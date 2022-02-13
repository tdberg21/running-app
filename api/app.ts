import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { RunService } from './src/runs.service';

const app = express();
const PORT = process.env['PORT'] || 4000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const runService = new RunService();

app.get('/api/runs', (req: any, res: any) => {
  const runs = runService.getNewRunLogs();
  res.send({
    msg: 'Found Runs',
    runs
  })

});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})