function Pessoa(nome, idade, sexo){
    this.nome = nome;
    this.idade = idade;
    this. sexo = sexo;
    this.dizOi = function(){
        console.log(this.nome + " diz olá!")
    }
}


function Funcionario(nome, idade, sexo, cargo, salario){

    Pessoa.call(this, nome, idade, sexo)

    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    this.getSalario = function(){
        return _salario;
    }

    this.setSalario = function(value){
        if(typeof value === 'number'){
            _salario = value;
        }
    }

    this.aumento = function(){
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }
}

function Estagiario(nome, idade, sexo){
    Funcionario.call(this, nome, idade, sexo, "Estágiario(a)", 2200);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.5;
        this.setSalario(novoSalario);
    }
}

function Gerente(nome, idade, sexo){
    Funcionario.call(this, nome, idade, sexo, "Gerente(a)", 9800);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new Funcionario("João", 20, "Masculino", "Engenheiro de Software", 3000);
const funcionario2 = new Estagiario("Cecília", 18, "Feminino");
const funcionario3 = new Gerente("Alfredo", 25, "Masculino")

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());

