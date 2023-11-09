// App.js
import React, { useState } from 'react';
import axios from 'axios';
import DataSubmission from './components/DataSubmission';
import GeneTable from './components/GeneTable';
import GeneChart from './components/GeneChart';

const DATA_ENDPOINT = 'http://localhost:5000/api/gene-data';
const STATS_ENDPOINT = 'http://localhost:5000/api/gene-analysis';

function App() {
  const [geneDataEntries, setGeneDataEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({});

  const fetchGeneData = async (ids) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(DATA_ENDPOINT, { params: { geneIDs: ids.toString() } });
      setGeneDataEntries(response.data);
    } catch (err) {
      setError('Error fetching gene data. Please try again.');
      console.error(err);
    }
    setLoading(false);
  };

  const fetchStatistics = async () => {
    setLoading(true);
    setError(null);

    try {
      const geneIds = geneDataEntries.map(entry => entry.gene); // Get all gene IDs from current data
      const response = await axios.get(STATS_ENDPOINT, { params: { geneIDs: geneIds.toString() } });
      setStats({ 
        mean: response.data.mean, 
        median: response.data.median, 
        variance: response.data.variance 
      });
      } catch (err) {
      setError('Error fetching statistics. Please try again.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Omics Data Retrieval and Analysis System</h1>
      <DataSubmission onSubmitGeneIds={fetchGeneData} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <GeneTable geneDataEntries={geneDataEntries} />
      <button onClick={fetchStatistics} disabled={loading || geneDataEntries.length === 0}>
        Get Statistics
      </button>
      {stats.mean && <div>
        <h2>Statistics:</h2>
        <p>Mean: {stats.mean}</p>
        <p>Median: {stats.median}</p>
        <p>Variance: {stats.variance}</p>
      </div>}
      {geneDataEntries.length > 0 && <GeneChart geneDataEntries={geneDataEntries} />}
    </div>
  );
}

export default App;
