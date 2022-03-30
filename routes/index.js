const express = require('express');
const router = express.Router();
const { Unicorn } = require('../models');

router.get('/unicorns/:unicornid', (req, res) => {
  Unicorn.findById(req.params.unicornid)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

router.get('/unicorns', (req, res) => {
  Unicorn.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

router.post('/unicorns', (req, res) => {
  const newUnicorn = new Unicorn(req.body);
  console.log(req.body);
  newUnicorn
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(409).send(err);
    });
});

router.put('/unicorns/:unicornid', (req, res) => {
  Unicorn.findById(req.params.unicornid)
    .then((dbunicorn) => {
      const newUnicorndata = Object.assign(dbunicorn, req.body);
      return newUnicorndata.save();
    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(304).send(err);
    });
});

router.delete('/unicorns/:unicornid' , (req,res) =>{
  Unicorn.findByIdAndDelete(req.params.unicornid).then((result) => {
    res.status(200).send({message: "Unicornio eliminado"})
  }).catch((err) => {
    res.status(404).send({message: "Unicornio no encontrado"})
  });
})

module.exports = router;
