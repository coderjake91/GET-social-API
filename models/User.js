const { Schema, model } = require('mongoose');

//create the User schema

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Please enter your username!',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Email address is required',
        //mongoose matching validation (must be a valid email address), using regex
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email address!']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
}
);

//retrieves the length of the friends array field on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//create the User model using UserSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;