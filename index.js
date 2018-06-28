const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let scores = [{
    name: "Edwin",
    score: 50
}, {
    name: "David",
    score: 39
}];
app.use(bodyParser.json())

app.get('/scores', (req, res) => {
    res.status(200);
    res.setHeader("content-type", "application/javascript");
    res.send(scores);
    // res.end(scores);
})

app.post('/scores', (req, res) => {
    res.status(201);
    if (req.body.length) req.body.forEach(score => {
        scores.push(score);
    });
    else scores.push(req.body);

    console.log(scores)
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 3);
    res.setHeader("content-type", "application/json");

    res.send(req.scores);
    // res.end(scores)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))