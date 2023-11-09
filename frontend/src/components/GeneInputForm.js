import React, { useState } from 'react';

function GeneInputForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue.split(',').map(id => id.trim()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Gene IDs (comma-separated):
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <button type="submit">Fetch Data</button>
    </form>
  );
}

export default GeneInputForm;
