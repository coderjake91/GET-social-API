const { Schema, model } = require('mongoose');
const moment = require('moment');

//create the Reaction schema (will be a subdocument in the Thought model)
const ReactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: "Please include your reaction text!",
        maxlength: 280
    },
    username: {
        type: String,
        required: 'Please enter a username'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format("dddd, MMMM Do YYYY, h:mm:ss a")
    }
},
{
    toJSON: {
        getters: true
    }
}
);

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
        get: (createdAtVal) => dateFormat(createdAtVal, "dddd, mmmm dS, yyyy, h:MM:ss TT")
    },
    username: {
        type: String,
        required: 'Please include a username'
    },
    reactions: [ReactionSchema]
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

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;