const conexao = require("../infraestrutura/conexao");
const moment = require("moment");

class Atendimento {
    adiciona(atendimento, res) {
        const date = moment(atendimento.data, "DD/MM/YYYY").format("YYYY-MM-DD hh:mm:ss")
        const atendimentoObj = { ...atendimento, data: date, dataCriacao: moment().format("YYYY-MM-DD hh:mm:ss") };

        const validations = [
            {
                campo: "data",
                valid: moment(date).isSameOrAfter(atendimentoObj.dataCriacao),
                message: "A data deve ser maior que a data atual."
            },
            {
                campo: "cliente",
                valid: atendimento.cliente.length >= 5,
                message: "Cliente deve ter pelo menos cinco caracteres."
            }
        ];

        const errors = validations.filter(v => !v.valid);

        if (errors.length > 0) {
            res.status(400).json(errors);
        } else {
            const sql = `INSERT INTO Atendimentos SET ? `;
            conexao.query(sql, atendimentoObj, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro);
                }
                else {
                    res.status(201).json(resultados);
                }
            });
        }
    }
};

module.exports = new Atendimento;