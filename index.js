const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const port = 8080;
const server = app.listen(port, () => {
  console.log(`App is listening on PORT ${port}`);
});

app.post('/calculate', (req, res) => {
  const { value } = req.body;

  const answer = eval(value);

  return res.status(200).json({
    status: 'success',
    data: {
      answer,
    },
  });
});


const shutdownServer = () => {
  server.close();
};

module.exports = {
  app, // Export the Express app for testing
  shutdownServer, // Export the server shutdown function
};


