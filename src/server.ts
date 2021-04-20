import express from 'express';

import './database';

const app = express();

app.post('/', (request, response) => {
  
});

const port = 3333;
app.listen(port, () => console.log(`Server is running at port ${port}`));