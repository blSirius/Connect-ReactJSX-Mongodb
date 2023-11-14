const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://siriusblackazka:azkabann@cluster0.ar5fu2f.mongodb.net/todos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//example
// const todosSchema = new mongoose.Schema({
//     tasks: String,
// });
// const Todos = mongoose.model('todos', todosSchema);

//example
// app.get('/api/getTodos', async (req, res) => {
//     try {
//         const data = await Todos.find();
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});