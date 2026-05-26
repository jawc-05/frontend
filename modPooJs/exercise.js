function Animal (raca, sexo){
    this.raca = raca;
    this.sexo = sexo;
}

function Gato(raca, sexo, nome, onivoro){
    Animal.call(this, raca, sexo)
    this.nome = nome;
    this.onivoro = true;
}

function Vaca(raca, sexo, nome, herbivoro){
    Animal.call(this, raca, sexo)
    this.nome = nome;
    this.herbivoro = true;
}

const animal1 = new Gato("Persa", "Masculino", "Miau", true);
const animal2 = new Vaca("Angus", "Feminino", "Bife", true);
const animal3 = new Vaca("Waggyu", "Feminino", "Bifão", true);

console.log(animal1);
console.log(animal2);
console.log(animal3);



