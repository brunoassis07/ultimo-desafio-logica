class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataqueDescr;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataqueDescr = 'magia';
                break;
            case 'guerreiro':
                ataqueDescr = 'espada';
                break;
            case 'monge':
                ataqueDescr = 'artes marciais';
                break;
            case 'ninja':
                ataqueDescr = 'shuriken';
                break;
            default:
                ataqueDescr = 'um método desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataqueDescr}`);
    }
}


const h1 = new Hero('Arthur', 30, 'guerreiro');
const h2 = new Hero('Merlin', 150, 'mago');

h1.atacar(); 
h2.atacar(); 
