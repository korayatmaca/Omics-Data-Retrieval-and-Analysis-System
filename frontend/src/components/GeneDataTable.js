import React from 'react';

function GeneDataTable({ data, onAnalyze }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Gene</th>
          <th>Expression Values</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((geneData) => (
          <tr key={geneData.gene}>
            <td>{geneData.gene}</td>
            <td>{geneData.expressionValues.join(', ')}</td>
            <td>
              <button onClick={() => onAnalyze(geneData.gene)}>Analyze</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GeneDataTable;
