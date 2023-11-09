// DataSubmission.js
import React, { useState } from 'react';

function DataSubmission({ onSubmitGeneIds }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const geneIds = inputValue.split(',').map(id => id.trim()).filter(id => id);  
    onSubmitGeneIds(geneIds);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="gene-ids-input">
          Enter Gene IDs (comma-separated):
        </label>
        <textarea
          id="gene-ids-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Gene1, Gene2, Gene3"
          rows="5"
          style={{ width: '100%', margin: '10px 0' }}
        />
        <button type="submit">Fetch Data</button>
      </form>
    </div>
  );
}

export default DataSubmission; 





//       const response = await axios.get(DATA_ENDPOINT, { params: { geneIDs: ids.toString() } });
