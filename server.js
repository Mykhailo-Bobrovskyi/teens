import express from 'express';
import { appendFileSync } from "fs";
let app = express();

app.use(express.static('./'));
app.use(express.json());

app.post('/stats', (req, res)=> {
    console.log(req.body)
    appendFileSync('stat.txt', JSON.stringify(req.body)+'\n')
});

app.listen(3000, () => {
    console.log('Server hosted by 3000th port')
});