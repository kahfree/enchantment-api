import ItemRepo from '../repos/ItemRepo'
class ItemServiceWrapper {
    constructor() {
        this.repo = new ItemRepo();
    }
  
    getAllEnchantments(){
        return this.repo.getAllItems();
    }
  }
  
  export default ItemServiceWrapper;
  