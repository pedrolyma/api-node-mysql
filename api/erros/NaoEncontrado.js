class NaoEncontrado extends Error {
    constructor () {
        super('Fornecedor Não foi Encontrado')
        this.name = 'NaoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado