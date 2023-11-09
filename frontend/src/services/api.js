import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchGeneData = (geneIDs) => {
  return api.get('/gene-data', {
    params: {
      geneIDs: geneIDs.join(','),
    },
  });
};

export const fetchGeneAnalysis = (gene) => {
  return api.get('/gene-analysis', {
    params: {
      gene,
    },
  });
};
