import React from 'react';

// This component will take the gene data entries and render the stats
function GeneStats({ geneDataEntries }) {
  return (
    <div>
      <h3>Gene Statistics</h3>
      {/* Render a table or other components to display the stats */}
      {/* This is a placeholder table layout */}
      <table>
        <thead>
          <tr>
            <th>Gene</th>
            <th>Mean</th>
            <th>Variance</th>
            <th>Median</th>
          </tr>
        </thead>
        <tbody>
          {geneDataEntries.map(entry => (
            <tr key={entry._id}>
              <td>{entry.gene}</td>
              <td>{entry.stats?.mean || 'N/A'}</td>
              <td>{entry.stats?.variance || 'N/A'}</td>
              <td>{entry.stats?.median || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeneStats;
