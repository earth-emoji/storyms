import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
var port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
