const express = require('express');
const router = express.Router();
const problemController = require('../controllers/problemController');

// Route to add a new problem (you can later restrict this to admins only)
router.post('/add', problemController.addProblem);

// Route to get all problems
router.get('/', problemController.getAllProblems);

// Route to get problem by ID
router.get('/:id', problemController.getProblemById);

module.exports = router;
