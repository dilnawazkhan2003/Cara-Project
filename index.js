const express = require('express');
const connectDB = require('./db');

const app = express();
app.use(express.json());
app.use(express.static('public'));  // Serves the HTML file

async function startServer() {
    const db = await connectDB();
    const usersCollection = db.collection('users');

    app.post('/users', async (req, res) => {
        const newUser = req.body;
        const result = await usersCollection.insertOne(newUser);
        res.send(result);
    });

    app.get('/users', async (req, res) => {
        const users = await usersCollection.find().toArray();
        res.send(users);
    });

    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}




startServer();
