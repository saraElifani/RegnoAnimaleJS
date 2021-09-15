class RegnoAnimale {
    
    constructor(nome) {
        this.nome= nome;
        this.RegnoAnimale = "Regno Animale";
    }
    
    //getter
    getNome() {
        return this._nome;
    }

    getRegnoAnimale() {
        return this._RegnoAnimale;
    }

    //setter  
    seNome(nome){
        this.nome = nome;
    }   
}

class Vertebrati extends RegnoAnimale {

    constructor(nome,dominio){
        super(nome);
        this.dominio = dominio;
        this.Nzampe = 4;
    }

    getDominio() {
        return this._dominio;
    }
}

class Uccelli extends Vertebrati {

    constructor(nome){
        super(nome, "Uccelli");
        this.Nzampe = 2;
    }
}

class Rettile extends Vertebrati {
    constructor(nome){
        super(nome, "Rettile");
    }
}

const iguana = new Rettile("iguana");
console.log(iguana.nome + " "+ iguana.dominio + " "+ iguana.RegnoAnimale);

const pollo = new Uccelli("pollo");
console.log(pollo.nome+ " " + pollo.dominio + " " + pollo.RegnoAnimale);

console.log("Le zampe del pollo sono: "+ pollo.Nzampe);
console.log("Le zampe del rettile sono: "+ iguana.Nzampe);

