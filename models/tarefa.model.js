const mongoose = require("mongoose");

const tarefaModel = new mongoose.Schema({
  titulo: { type: String, required: true },
  descrição: { type: String, required: true },
  prioridade: { type: String, required: true },
  status: { type: String, required: true },
  prazo: { type: String, required: true },
  dataCriação: { type: Date, default: Date.now },
});

const Tarefa = mongoose.model("tarefa", tarefaModel);

module.exports = Tarefa;
