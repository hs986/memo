const Memo = require('../models/memoModel');

exports.searchMemos = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }
    const memos = await Memo.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } }
      ]
    });
    res.status(200).json(memos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
