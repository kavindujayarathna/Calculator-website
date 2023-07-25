const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/calculate', (req, res) => {
  const { value } = req.body;

  const answer = eval(value);

  return res.status(200).json({
    status: 'success',
    data: {
      answer
    }
  });
});

module.exports = app;
