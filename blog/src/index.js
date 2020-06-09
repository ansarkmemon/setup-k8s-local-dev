const express = require('express');
const app = express();

app.get('/api/blog', (req, res) => {
  res.json({ message: "Hello BRO !" })
});


app.listen(3000, () => console.log('listening on port 3000'))