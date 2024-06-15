import React, { useState } from 'react';
import axios from 'axios';

const CreateMemo = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateMemo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/memos', {
        title,
        content
      });
      setMessage('Memo created successfully');
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Create Memo</h2>
      <form onSubmit={handleCreateMemo}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Create Memo</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateMemo;
