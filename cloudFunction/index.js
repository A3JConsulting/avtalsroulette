require('dotenv').config({silent: true});
const cors = require('cors');

const db = require('knex')({
  client: 'mysql',
  connection: process.env.DB_URL
});

function getAgreements(req, res) {
  db('agreement')
    .join('contract', 'agreement.contract_id', 'contract.id')
    .select('agreement.created_at', 'agreement.name', 'agreement.signature', 'contract.summary', 'contract.sponsor_logo')
    .orderBy('agreement.created_at', 'desc')
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      console.error(err)
      res.status(500).json({
        status: 'Internal serverless error'
      });
    });
}

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.getAgreements = function helloWorld(req, res) {
  const corsFn = cors();
  corsFn(req, res, () => {
    getAgreements(req, res);
  });
};
