const express = require('express');
const router = express.Router();
const memoController = require('../controllers/memoController');

router.post('/memos', memoController.createMemo);
router.get('/memos', memoController.getMemos);
router.put('/memos/:id', memoController.updateMemo);
router.delete('/memos/:id', memoController.deleteMemo);

module.exports = router;
