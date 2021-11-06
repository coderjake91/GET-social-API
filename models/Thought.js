const { Schema, model } = require('mongoose');
const dateFormat, { masks } = require('dateformat');

//create the Thought schema

const ThoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required: "Don't forget to include your thought!",
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(nowcreatedAtVal, "dddd, mmmm dS, yyyy, h:MM:ss TT")
    },
    username: {
        type: String,
        required: 'Please include a username'
    },
    reactions: [],
},
    {
        toJSON:{
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});