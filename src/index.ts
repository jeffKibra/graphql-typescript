import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
//
import { graphqlMiddleware, checkAuthMiddleware } from './middlewares';
//
dotenv.config();
//

// import { connect } from './dbConnection';
//
const PORT = 5000;

//
const app = express();

//check authentication for request before proceeding
app.use('/', checkAuthMiddleware);

app.use('/graphql', graphqlMiddleware);

//================================================================

app.get('/api/v1/orgs', (req: Request, res: Response) => {
  console.log('getting orgs list...');

  res.status(200).send('orgs list from server.');
});

app.listen(PORT, () => {
  // connect();
  console.log(`Listening on port ${PORT}`);
});
