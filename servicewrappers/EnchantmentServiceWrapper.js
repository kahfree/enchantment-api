import EnchantmentRepo from '../repos/EnchantmentRepo'
class EnchantmentServiceWrapper {
    constructor() {
        this.repo = new EnchantmentRepo();
    }
  
    getAllEnchantments(){
        return this.repo.getAllEnchantments();
    }

    getEnchantmentsByName(name){
        return this.repo.getEnchantmentsByName(name);
    }
  }
  
  export default EnchantmentServiceWrapper;
  