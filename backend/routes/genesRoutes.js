const express = require('express');
const router = express.Router();
const geneController = require('../controllers/genesControllers');

// Gen verilerini alma için API Endpoint
router.get('/gene-data', geneController.getGeneData);

// Gen verilerinin istatistiklerini hesaplamak için API Endpoint
router.get('/gene-analysis', geneController.getGeneAnalysis);

module.exports = router;
