// GeneTable.js
import React from 'react';
import './GeneTable.css';

function GeneTable({ geneDataEntries }) {
  // Render a table row for each gene entry
  return (
    <table>
      <thead>
        <tr>
          <th>Gene</th>
          <th>Sample Names</th>
          <th>Expression Values</th>
          {/* Add more headers for other data points as needed */}
        </tr>
      </thead>
      <tbody>
        {geneDataEntries.map(entry => (
          <tr key={entry._id}>
            <td>{entry.gene}</td>
            <td>{entry.samplenames}</td>
            <td>{entry.expressionValues}</td>
            {/* Add more cells for other data points as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GeneTable;
