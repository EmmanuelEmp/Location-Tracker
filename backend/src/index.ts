import * as C from './constants';
import express from 'express';

const app = express();

app.use(express.json());

app.listen(C.PORT, () => {
    console.log(`Server running on PORT: ${C.PORT}`)
});
