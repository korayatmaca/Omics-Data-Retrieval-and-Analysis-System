const mongoose = require('mongoose');

const geneExpressionSchema = new mongoose.Schema({
  gene: {
    type: String,
    required: true,
    unique: true,
  }
}, {
  collection: 'test', // Kullanılacak koleksiyonun adını belirtin
});

const GeneExpression = mongoose.model('GeneExpression', geneExpressionSchema);

module.exports = GeneExpression;
