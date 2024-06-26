# NoSQL: Social Network API

## Description
The purpose of this project is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM.  

## User Story
AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data  

## Acceptance Criteria
GIVEN a social network API  
WHEN I enter the command to invoke the application, THEN my server is started and the Mongoose models are synced to the MongoDB database.  
WHEN I open API GET routes in Insomnia for users and thoughts, THEN the data for each of these routes is displayed in a formatted JSON.  
WHEN I test API POST, PUT, and DELETE routes in Insomnia, THEN I am able to successfully create, update, and delete users and thoughts in my database.  
WHEN I test API POST and DELETE routes in Insomnia, THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.  

## Installation for development
Install Node.js, if needed.  

Create a .gitignore file and include "node_modules", ".vscode", "package-lock.json", and ".DS_Store" in it, so that these files aren't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

Make sure that your repo includes a package.json with the required dependencies. You can create one by running "npm init" when you first set up the project, before installing any dependencies.

Required packages: Express.js (npm install express), Mongoose (npm install mongoose), moment.js (npm install moment).

## Usage for development
Right-click on the "server.js" file and select "Open in Integrated Terminal". To initiate application, type "node server.js" and press enter. Test routes in tool like Insomnia or Postman.

## URL for video walkthrough to demonstrate functionality
https://drive.google.com/file/d/1gLXBWo-e_ooV-yzqaXeUm2r7T6oe6Jzc/view?usp=sharing