import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MemoList = () => {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const fetchMemos = async () => {
      const response = await axios.get('http://localhost:3000/api/memos');
      setMemos(response.data);
    };
    fetchMemos();
  }, []);

  return (
    <div>
      <h2>Memo List</h2>
      <ul>
        {memos.map((memo) => (
          <li key={memo._id}>
            <h3>{memo.title}</h3>
            <p>{memo.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoList;
