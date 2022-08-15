var Tarefas = require("./tarefa-model");

exports.listarTarefas = (req, res) => {
  Tarefas.find({}, function (err, tarefas) {
    if (err) return next(err);
    return res.json(tarefas);
  });
};

exports.buscarTarefa = (req, res) => {
  Tarefas.findById(req.params.id, function (err, tarefa) {
    if (err) return next(err);
    return res.json(tarefa);
  });
};

exports.cadastrarTarefa = (req, res) => {
  let tarefa = new Tarefas({
    descricao: req.body.descricao,
    prazo: req.body.prazo,
    completa: req.body.completa,
  });
  tarefa.save(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.send("tarefa cadastrada com sucesso");
};
