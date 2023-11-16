class Enchantment {
    constructor(name, type, description, maxLevel){
        this.name = name;
        this.type = type;
        this.description = description;
        this.maxLevel = maxLevel;
    }

    toString() {
        return `Name: ${this.name}, Type: ${this.type}, Description: ${this.description}, Max Level: ${this.maxLevel}`;
    }

    getValuesForDB(){
        return [this.type, this.description, this.name, this.maxLevel];
    }

}
export default Enchantment;