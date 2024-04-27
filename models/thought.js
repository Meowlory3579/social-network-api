const { Schema, model, Types } = require("mongoose");
const moment = require('moment');

// Schema to be used as the reaction field's subdocument schema in the Thought model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);


// Virtual that retrieves the length of the thought's `reactions` array   
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// Initialize the Thought model
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;







