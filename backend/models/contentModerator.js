const mongoose = require("mongoose");

require("dotenv").config();

//Create schema for content Moderator
const contentModeratorSchema = new mongoose.Schema({
        email: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 200,
            unique: true,

        },
        password: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100,
        },
        approved: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
        },
        
    },
    {
        timestamps: true,
    }
);

//creating userModel
const contentModeratorModel = new mongoose.model("Moderator", contentModeratorSchema);

module.exports = contentModeratorModel;