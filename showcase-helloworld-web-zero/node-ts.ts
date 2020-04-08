import express from 'express';

const handler = (_req: express.Request, res: express.Response) => {
  res.send('Hello, world!');
};

export default handler;
