const {Schema, model} = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    ]
}, {
    toJSON: {
        virtuals: true,
        // getters: true // not sure if this is needed
    },
    id: false
});

// Virtual that retrieves the length of the user's `friends` array
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

// Initialize the User model
const User = model("User", userSchema);

module.exports = User;