const express = require('express');
const router = express.Router();
const {v4:uuidv4} = require('uuid');

router.get('/', (req, res) => {
  res.json({id:`${uuidv4()}`});
});

router.post('/', (req, res) => {
  res.set('Allow', 'GET');
  res.status(405).send('Method Not Allowed')
})

module.exports = router;