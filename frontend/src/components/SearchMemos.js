import React, { useState } from 'react';
import axios from 'axios';

const SearchMemos = () => {
  const [query, setQuery] = useState('');
  const [memos, setMemos] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:5000/api/search?query=${query}`);
    setMemos(response.data);
  };

  return (
    <div>
      <h2>Search Memos</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label>Query</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
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

export default SearchMemos;
