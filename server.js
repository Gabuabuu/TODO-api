import express  from "express";
import 'dotenv/config'

const PORT = process.env.PORT || 3000

const app = express(); 

app.use(express.json());

app.get('/', (req, res) => {
    res.send('TODO API!');
});

app.get('/teste', (req, res) => {
    res.send('AAAAAAAAA')
})

app.listen(PORT, console.log("Server is okay! Running server"));

export default app
