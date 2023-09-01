const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.post('/echo', (req, res) => {
   
    res.status(200).json(req.body);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})