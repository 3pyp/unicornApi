const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const router = require('./routes');
const cors = require('cors')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
