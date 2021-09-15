const express = require("express");
const Tarefa = require("../models/tarefa.model");
const router = express.Router();

router.get("/", async (req, res) => {
  await Tarefa.find({})
    .then((tarefa) => {
      res.send(tarefa);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/FindById/:id", async (req, res) => {
  await Tarefa.findOne({ _id: req.params.id })
    .then((tarefa) => {
      res.send(tarefa);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/add", async (req, res) => {
  if (
    !Tarefa ||
    !Tarefa.titulo ||
    !Tarefa.descrição ||
    !Tarefa.prioridade ||
    !Tarefa.status ||
    !Tarefa.prazo
  ) {
    await Tarefa.create(req.body)
      .then(() => {
        res.status(200).send("Tarefa adicionada com sucesso");
      })
      .catch((err) => {
        res.status(400).send("Algo errado. Tente novamente!");
        console.error(err);
      });
  }
});

router.put("/update/:id", async (req, res) => {
  if (
    !Tarefa ||
    !Tarefa.titulo ||
    !Tarefa.descrição ||
    !Tarefa.prioridade ||
    !Tarefa.status ||
    !Tarefa.prazo
  ) {
    await Tarefa.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.status(200).send("Tarefa atualizada com sucesso!");
      })
      .catch((err) => {
        res.status(400).send("Algo errado. Tente novamente!");
        console.error(err);
      });
  } else {
    res.status(400).send("Algo errado. Tente novamente!");
  }
});

router.delete("/delete/:id", async (req, res) => {
  await Tarefa.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("A tarefa foi apagada!");
    })
    .catch((err) => {
      res.status(400).send("Algo errado. Tente novamente!");
      console.error(err);
    });
});

module.exports = router;
