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

    getEnchantmentsFromNames(names){
        let enchantments = [];
        names.forEach(name => {
            let enchant = this.repo.getByEnchantmentName(name)[0];
            enchantments.push(enchant);
        })
        return enchantments;
    }
  }
  
  export default EnchantmentServiceWrapper;
  