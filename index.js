import express from 'express';
import request from 'request';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 7979;
const originAllowList = process.env.ORIGIN_ALLOW_LIST;

app.use(cors());

// eslint-disable-next-line no-useless-escape
app.use('/:url(https?:\/\/[a-zA-Z\.\-0-9\/]*)', (req, res) => {
  const origin = req.headers.origin || '';
  if (originAllowList.length && originAllowList.indexOf(origin) === -1) {
    res.writeHead(403, 'Forbidden');
    res.end(`HTTP request origin ${origin} was not whitelisted for this proxy ${req.protocol}://${req.headers.host}. Please set environment variable ORIGIN_ALLOW_LIST to ${origin}.`);
    return;
  }

  const { url } = req.params;
  req.pipe(request(url)).pipe(res);
});

app.listen(port);
