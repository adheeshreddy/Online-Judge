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

// Update problem by ID
exports.updateProblem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProblem = await Problem.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProblem) {
            return res.status(404).json({ error: 'Problem not found' });
        }
        res.status(200).json({ message: 'Problem updated successfully', updatedProblem });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update problem', details: err.message });
    }
};

// Delete problem by ID
exports.deleteProblem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProblem = await Problem.findByIdAndDelete(id);
        if (!deletedProblem) {
            return res.status(404).json({ error: 'Problem not found' });
        }
        res.status(200).json({ message: 'Problem deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete problem', details: err.message });
    }
};
