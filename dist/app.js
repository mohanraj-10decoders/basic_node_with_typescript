import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes.js';
const app = express();
const port = 3000;
mongoose
    .connect('mongodb://127.0.0.1:27017')
    .then((data) => console.log('connection succesful'))
    .catch((err) => console.error(err));
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.use('/', router);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map