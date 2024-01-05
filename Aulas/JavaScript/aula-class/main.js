class Pessoa{
    Nome;
    Peso;
    Altura;

    constructor(Nome, Peso, Altura){
        this.Nome = Nome;
        this.Peso = Peso;
        this.Altura = Altura;
    }

    imc(Peso, Altura){
    return this.Peso / (this.Altura * this.Altura);
    }

    classimc(){
        // const name = this.Nome
        const imc = this.imc()
        if(imc < 18.5){
            return (`${this.Nome} está abaixo do peso ideal.`)
        }
        else if(imc >= 18.5 && imc <25){
            return (`${this.Nome} está com o peso ideal.`)
        }
        else if(imc >= 25 && imc <= 30){
            return (`${this.Nome} está acima do peso ideal.`)
        }
        else if(imc >= 30 && imc <= 40){
            return (`${this.Nome} está obeso.`)
        }
        else if(imc > 40){
            return (`${this.Nome} está com obesidade grave.`)
        }
    }
}

const Jose = new Pessoa('José', 70, 1.75)
console.log(Jose.classimc())

const Pedrin = new Pessoa('Pedrin', 50, 1.63)
console.log(Pedrin.classimc())

const Jao = new Pessoa('Joãozin', 90, 1.68)
console.log(Jao.classimc())