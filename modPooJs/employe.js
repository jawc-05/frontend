function Pessoa(nome, idade, sexo){
    this.nome = nome;
    this.idade = idade;
    this. sexo = sexo;
    this.dizOi = function(){
        console.log(this.nome + " diz olá!")
    }
}


function Funcionario(nome, idade, sexo, cargo, salario){
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

    Pessoa.call(this, nome, idade, sexo)
}

const pessoa1 = new Pessoa("João", 20, "Masculino")
const funcionario1 = new Funcionario("João", 20, "Masculino", "Engenheiro de Software", 3000);
funcionario1.dizOi();

console.log(funcionario1.getSalario());
funcionario1.setSalario(5000);
console.log(funcionario1.getSalario());
funcionario1.setSalario("mil")
console.log(funcionario1.getSalario());
