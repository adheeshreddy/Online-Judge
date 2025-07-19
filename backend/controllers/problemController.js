const Problem = require('../models/Problem');

// Add a new problem (Admin only)
exports.addProblem = async (req, res) => {
    try {
        const { title, statement, constraints, testCases } = req.body;
        const problem = new Problem({ title, statement, constraints, testCases });
        await problem.save();
        res.status(201).json({ message: 'Problem added successfully', problem });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add problem', details: err.message });
    }
};

// Get all problems (titles only)
exports.getAllProblems = async (req, res) => {
    try {
        const problems = await Problem.find({}, '_id title');
        res.status(200).json(problems);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch problems' });
    }
};

// Get single problem by ID (includes full details)
exports.getProblemById = async (req, res) => {
    try {
        const { id } = req.params;
        const problem = await Problem.findById(id);
        if (!problem) {
            return res.status(404).json({ error: 'Problem not found' });
        }
        res.status(200).json(problem);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch problem' });
    }
};
