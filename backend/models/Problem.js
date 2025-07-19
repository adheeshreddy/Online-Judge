const mongoose = require('mongoose');

const testCaseSchema = new mongoose.Schema({
    input: String,
    output: String
});

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    statement: {
        type: String,
        required: true
    },
    constraints: {
        type: String,
        required: true
    },
    testCases: [testCaseSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Problem', problemSchema);
