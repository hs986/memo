const Memo = require('../models/memoModel');

exports.createMemo = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newMemo = new Memo({ title, content });
    await newMemo.save();
    res.status(201).json(newMemo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMemos = async (req, res) => {
  try {
    const memos = await Memo.find();
    res.status(200).json(memos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMemo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedMemo = await Memo.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedMemo) {
      return res.status(404).json({ message: 'Memo not found' });
    }
    res.status(200).json(updatedMemo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMemo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMemo = await Memo.findByIdAndDelete(id);
    if (!deletedMemo) {
      return res.status(404).json({ message: 'Memo not found' });
    }
    res.status(200).json({ message: 'Memo deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
