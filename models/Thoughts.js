// Require mongoose and moment
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Reactions Schema
const ReactionsSchema = new Schema(
    {
    // sets custom id 
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 250
    },

    username: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
    },
    
    {
    toJSON: {
        getters: true
    } 
    }
);
// Thoughts Schema
const ThoughtsSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 250
    },
    // Moment
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },

    username: {
        type: String,
        required: true
    },

    // use ReactionsSchema to validate
    reactions: [ReactionsSchema]
    },

    {
    toJSON: {
        virtuals: true,
        getters: true
    },

    id: false
    }
)

// get total count of reactions
ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thoughts model using the Thoughts Schema
const Thoughts = model('Thoughts', ThoughtsSchema);
// Export thoughts module
module.exports = Thoughts;