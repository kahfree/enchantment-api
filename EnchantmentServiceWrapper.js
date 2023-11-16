import EnchantmentRepo from './EnchantmentRepo'
class EnchantmentServiceWrapper {
    constructor() {
        this.repo = new EnchantmentRepo();
    }
  
    getAllEnchantments(){
        return this.repo.getAllEnchantments();
    }
  }
  
  export default EnchantmentServiceWrapper;
  