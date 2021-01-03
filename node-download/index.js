const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 5000;

const app = express();

// set the public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middle ware
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.writeHead(200,
        {
            'Content-Type': 'text/plain',
            'Content-Disposition': 'attachment;filename="test.txt"'
        }
    );
    let download = Buffer.from('HelloWorld小陈');
    res.end(download);
});

app.listen(port, () => {
    console.log(`Server runing at http://localhost:${port}`);
})