class CampoInvalido extends Error {
    constructor (campo) {
        const mensagem = `O Campo '${campo}' Esta Invalido`
        super(mensagem)
        this.name = 'CampoInvalido'
        this.idErro = 1
    }
}

module.exports = CampoInvalido