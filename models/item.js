class Item {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    toString() {
        return `Name: ${this.name}, Type: ${this.type}`;
    }

}
export default Item;