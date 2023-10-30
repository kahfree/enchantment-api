class ItemHasEnchantment {
    constructor(itemName, enchantmentName){
        this.itemName = itemName;
        this.enchantmentName = enchantmentName;
    }

    toString() {
        return `Item: ${this.itemName}, Enchantment: ${this.enchantmentName}`;
    }

}
export default ItemHasEnchantment;