import ItemHasEnchantmentRepo from "../repos/ItemHasEnchantmentRepo";
class ItemHasEnchantmentServiceWrapper {
    constructor() {
        this.repo = new ItemHasEnchantmentRepo();
    }

    getEnchantmentNamesByItem(item){
        return this.repo.getEnchantmentNamesByItem(item);
    }
  }
  
  export default ItemHasEnchantmentServiceWrapper;
  