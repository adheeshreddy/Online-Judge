const express = require('express');
const router = express.Router();
const problemController = require('../controllers/problemController');

// Routes
router.post('/', problemController.addProblem);
router.get('/', problemController.getAllProblems);
router.get('/:id', problemController.getProblemById);
router.put('/:id', problemController.updateProblem);
router.delete('/:id', problemController.deleteProblem);

module.exports = router;
