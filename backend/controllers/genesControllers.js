const GeneExpression = require('../models/Genes');

// Gen verilerini alma işlemi
const getGeneData = async (req, res) => {
    try {
        const geneIDs = req.query.geneIDs.split(',');
        const genes = await GeneExpression.find({ gene: { $in: geneIDs } });

        if (genes.length === 0) {
            res.status(404).json({ error: 'No genes found' });
            return;
        }

        res.json(genes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

// Gen verilerinin istatistiklerini hesaplamak için API Endpoint
const getGeneAnalysis = async (req, res) => {
  try {
    const geneIDs = req.query.geneIDs.split(',');
    let geneData = await GeneExpression.find({ gene: { $in: geneIDs } });
    console.log("geneData",geneData);
    if (!geneData) {
      res.status(404).json({ error: 'Gene not found' });
      return;
    }

    // Gen verilerinin istatistiklerini hesaplayın
    let expressionValues = geneData.map(a => a.expressionValues);
    console.log("expressionValues",expressionValues);
    //const expressionValues = geneData.exper_rep2;
    const mean = expressionValues.reduce((acc, val) => acc + val, 0) / expressionValues.length;
    const median = calculateMedian(expressionValues);
    const variance = calculateVariance(expressionValues);

    res.json({ mean, median, variance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

function calculateMedian(arr) {
  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
}

function calculateVariance(arr) {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return arr.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / arr.length;
}

module.exports = { getGeneData, getGeneAnalysis };
