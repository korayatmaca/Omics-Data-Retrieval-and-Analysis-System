const mongoose = require('mongoose');

const geneExpressionSchema = new mongoose.Schema({
  gene: {
    type: String,
    required: true,
  }
 /*   expressionValues: {
        type: String,
        required: true,
    },
    samplenames: {
        type: String,
        required: true,
    },*/
});

module.exports = mongoose.model('GeneExpression', geneExpressionSchema);
