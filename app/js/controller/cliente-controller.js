class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.inputNumeroConta = document.querySelector("#numConta");
        this.inputSaldoConta = document.querySelector("#SaldoConta");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        if (this.clientes.pesquisar(this.inputCpf.value)) {
            throw Error;
        }
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, new Conta(this.inputNumeroConta.value, parseFloat(this.inputSaldoConta.value)));
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
