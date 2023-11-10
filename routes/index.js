var express = require('express');
var infocards1 = require('../src/infocards1.js');
var infocards2 = require('../src/infocards2.js');
var infocards3 = require('../src/infocards3.js');
var infocards4 = require('../src/infocards4.js');
var infocards5 = require('../src/infocards5.js');
var test = require('../src/test.js');
var router = express.Router();

router.get('/test', async (req, res) => {
  let response = await test.test();     
  res.json(response);
});

router.get('/infocards1/:username', async (req, res) => {
  let response = await infocards1.getInfoCards(req.params.username);     
  res.json(response);
});

router.get('/enablecard1/:username/:cardtype', async (req, res) => {
  let response = await infocards1.enableCard(req.params.username,req.params.cardtype);     
  res.json(response);
});

router.get('/infocards2/:username', async (req, res) => {
  let response = await infocards2.getInfoCards(req.params.username);     
  res.json(response);
});

router.get('/enablecard2/:username/:cardtype', async (req, res) => {
  let response = await infocards2.enableCard(req.params.username,req.params.cardtype);     
  res.json(response);
});

router.get('/infocards3/:username', async (req, res) => {
  let response = await infocards3.getInfoCards(req.params.username);     
  res.json(response);
});

router.get('/enablecard3/:username/:cardtype', async (req, res) => {
  let response = await infocards3.enableCard(req.params.username,req.params.cardtype);     
  res.json(response);
});

router.get('/infocards4/:username', async (req, res) => {
  let response = await infocards4.getInfoCards(req.params.username);     
  res.json(response);
});

router.get('/enablecard4/:username/:cardtype', async (req, res) => {
  let response = await infocards4.enableCard(req.params.username,req.params.cardtype);     
  res.json(response);
});

router.get('/infocards5/:username', async (req, res) => {
  let response = await infocards5.getInfoCards(req.params.username);     
  res.json(response);
});

router.get('/enablecard5/:username/:cardtype', async (req, res) => {
  let response = await infocards5.enableCard(req.params.username,req.params.cardtype);     
  res.json(response);
});

module.exports = router;
