const carroJoão = {
    modelo:'Fiesta',
    fabricante: 'Ford',
    anoMOdelo: 2020,
    anoFabricação: 2019,
    acelerar: function(){
        console.log("vrummm")
    }
}
const carroMaria = {
    modelo:'Ka',
    fabricante: 'Ford',
    anoMOdelo: 2016,
    anoFabricação: 2015,
    acelerar: function(){
        console.log("vrummm")
    }
}

function Carro(modelo, fabricante, anoMOdelo, anoFabricação ){
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoMOdelo = anoMOdelo;
    this.anoFabricação = anoFabricação;
    this.acelerar = function(){
        console.log("vrumm")
    }
}

const carroDoJoão2 = new Carro("Fiesta", "Ford", 2020, 2019)
const carroDaMaria2 = new Carro("Ka", "Ford", 2016, 2015)

console.log(carroDoJoão2, carroDaMaria2)

const nome = "jawc"
const idade = 20
const isMaiorDeiDade= true
const conhecimentos = ["java", "springboot", "restAPI"]

const pessoa = {
    nome: nome,
    idade: idade,
    isMaiorDeiDade: isMaiorDeiDade, 
    conhecimentos: conhecimentos
}

console.log(pessoa.nome)
pessoa.sobrenome=null

if(pessoa.sobrenome){
    console.log("a pessoa possui um sobrenome")
}

if ('sobrenome' in pessoa){
    console.log("sim tem sobrenome")
}