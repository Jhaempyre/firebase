import { log } from 'console';
import express from 'express'
import path from 'path';

const app = express()
const PORT = process.env.PORT || 3000;

const directoryPath = 'C:\\Users\\Jhaas\\server\\src';

app.use(express.static(path.join(directoryPath)))
app.get('/',(req,res) => {
    res.sendFile(path.join(directoryPath, 'index.html'));

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`https://localhost:${PORT}/`);
});

