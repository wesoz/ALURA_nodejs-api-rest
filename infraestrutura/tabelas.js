class Tabelas {
    init(conexao) {
        if (!conexao) {
            throw new Error("Invalid Connection");
        }
        this.conexao = conexao;
        console.log("Tables initialized");

        this.criarAtendimentos();
    }

    criarAtendimentos() {
        const sql = `
        CREATE TABLE IF NOT EXISTS Atendimentos (
            id INT NOT NULL AUTO_INCREMENT, 
            cliente VARCHAR(50) NOT NULL, 
            pet VARCHAR(20), 
            servico VARCHAR(20) NOT NULL,
            data datetime NOT NULL,
            dataCriacao datetime NOT NULL,
            status VARCHAR(20) NOT NULL, 
            oservacoes TEXT,
            PRIMARY KEY(id)
        )
            `;
        this.conexao.query(sql, (erro) => { 
            if (erro) {
                console.log(erro);
            } else {
                console.log("Table Atendimentos created successfully");
            }
        });
    }
}

module.exports = new Tabelas;