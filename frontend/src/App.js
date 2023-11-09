import React, { useState, useEffect } from 'react';
import { fetchGeneData, fetchGeneAnalysis } from './services/api';

function App() {
  const [geneIDs, setGeneIDs] = useState([]);
  const [geneData, setGeneData] = useState([]);
  const [analysisResults, setAnalysisResults] = useState({});

  const handleGeneIDsChange = (event) => {
    setGeneIDs(event.target.value.split(','));
  };

  const fetchGeneDataAndAnalysis = async () => {
    try {
      const response = await fetchGeneData(geneIDs);
      setGeneData(response.data);

      for (const gene of geneIDs) {
        const analysisResponse = await fetchGeneAnalysis(gene);
        setAnalysisResults((prevResults) => ({
          ...prevResults,
          [gene]: analysisResponse.data,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Omics Data Retrieval and Analysis</h1>
      <div>
        <label htmlFor="geneIDs">Enter Gene IDs (comma-separated):</label>
        <input type="text" id="geneIDs" onChange={handleGeneIDsChange} />
        <button onClick={fetchGeneDataAndAnalysis}>Fetch Data and Analyze</button>
      </div>
      <div>
        <h2>Fetched Data:</h2>
        <ul>
          {geneData.map((gene, index) => (
            <li key={index}>{JSON.stringify(gene)}</li>
            
          ))}
        </ul>
      </div>
      <div>
        <h2>Analysis Results:</h2>
        <ul>
          {Object.entries(analysisResults).map(([gene, analysis], index) => (
            <li key={index}>
              <strong>{gene}</strong>
              <div>Mean: {analysis.mean}</div>
              <div>Median: {analysis.median}</div>
              <div>Variance: {analysis.variance}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
