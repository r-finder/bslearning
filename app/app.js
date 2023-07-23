//const express = require('express');
import express from 'express';
import * as path from 'node:path';
import * as url from 'node:url';

import Bullshit from './client/views/bullshit.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const port = 3000;

app.use(express.static('./dist'));

app.get('/', (req, res) => {
  //res.send('Hello xxx World!');
  const tmplFile = './dist/index.html';
  const tmplPath = path.join(__dirname, tmplFile);

  res.sendFile(tmplPath);
})

app.get('/', (req, res) => {
  //res.send('Hello xxx World!');
  const tmplFile = './public/index.html';
  const tmplPath = path.join(__dirname, tmplFile);

  res.sendFile(tmplPath);
})

app.get('/getdata', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.send(getData());
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const getData = () => {
  const bs = new Bullshit();

  let result = {
    headers: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9', 'x10'],
    rows: []
  };

  for (let i=0; i<100; i++) {
    let row = bs.generateDataRow([
      {type:'int', min:0, max:1000},
      {type:'date', daysBack: 1000},
      {type:'bool'},
      {type:'name', gender: 'male'},
      {type:'name', gender: 'female'},
      {type:'date', daysBack: 100},
      {type:'name'},
      {type:'xxx'},
      {type:'xxx'},
      {type:'xxx'} ])
    result.rows.push(row);
  }

  return result;
}
