const express = require('express');
const router = express.Router();
const Solution = require('../models/Solution');
const Problem = require('../models/Problem');

// POST /api/solutions/submit
router.post('/submit', async (req, res) => {
  const { userId, problemId, code, language } = req.body;

  try {
    const problem = await Problem.findById(problemId);
    if (!problem) return res.status(404).json({ message: 'Problem not found' });

    // Simulate test case validation (in real app, you'd run code in sandbox)
    let result = 'Passed';
    for (let testCase of problem.testCases) {
      if (!code.includes(testCase.input) || !code.includes(testCase.output)) {
        result = 'Failed';
        break;
      }
    }

    const solution = new Solution({ user: userId, problem: problemId, code, language, result });
    await solution.save();

    res.status(201).json({ message: 'Solution submitted', result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
