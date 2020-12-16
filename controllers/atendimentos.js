const Atendimento = require("../models/atendimentos");

module.exports = app => {
    app.get("/atendimentos", (req, res) => res.send("Atendimentos"));
    app.post("/atendimentos", (req, res) => {
        console.log("body: ", req.body);
        const atendimento = req.body;
        Atendimento.adiciona(atendimento);
        res.send("Atendimentos POST")
    });
}