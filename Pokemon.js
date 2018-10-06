class Pokemon{
    constructor(name){
        this.name = name;
        this.level = Math.floor(Math.random() * 100)+1;
        this.hp = Math.floor(Math.random() * this.level + this.level);
        this.attack = Math.floor(Math.random() * this.level + this.level);
        this.defense = Math.floor(Math.random() * this.level + this.level);
        this.spAttack = Math.floor(Math.random() * this.level + this.level);
        this.spDefense = Math.floor(Math.random() * this.level + this.level);
        this.type = types[Math.floor(Math.random()*types.length)];
    }

    getPokemon(){return this}

    getName(){return this.name}
    getLevel(){return this.level}
    getHp(){return this.hp}
    getAttack(){return this.attack}
    getDefense(){return this.defense}
    getSpAttack(){return this.spAttack}
    getSpDefense(){return this.spDefense}
    getType(){return this.type}

    loseHp(value) {this.hp = this.hp - value}
    attack(){return this.hp}    
}

    const types = [
        'Normal', 'Fire',
        'Fighting', 'Water',
        'Flying', 'Grass',
        'Poison', 'Electric',
        'Ground', 'Psychic',
        'Rock',	'Ice',
        'Bug', 'Dragon',
        'Ghost', 'Dark'
    ]

    function newPokemon(){
        const pokemon = new Pokemon(document.getElementById('pokemon').value);
        console.log(pokemon);
        document.getElementById("pokemon").innerHTML = pokemon;
        document.write('<p>Name: '+pokemon.getName()+'</p>');        
        document.write('<p>Level: '+pokemon.getLevel()+'</p>');
        document.write('<p>hp: '+pokemon.getHp()+'</p>');
    }

    function callPokemon(){
        
        document.getElementById("pokemon").innerHTML = pokemon;
    }

