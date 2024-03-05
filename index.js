class BadyesTea {
    constructor() {
      this.teaData = {};
    }
  
    setTeaData(key, value) {
      this.teaData[key] = value;
      console.log(`Set Badyes Tea data for key '${key}':`, value);
    }
  
    getTeaData(key) {
      const value = this.teaData[key];
      console.log(`Retrieved Badyes Tea data key '${key}':`, value);
      return value;
    }
  
    brewTea() {
      console.log('Brewing a bold cup of Badyes Tea. ☕💪');
    }
  
    customizeBlend(blend) {
      console.log(`Customizing Badyes Tea blend with ${blend}.`);
    }
  
    addEnergyBoost(ingredient) {
      console.log(`Adding an energy-boosting touch of ${ingredient} to power up Badyes Tea.`);
    }
  
    enjoyTea() {
      console.log('Sipping on the invigorating flavor of Badyes Tea. 🌟🍵');
    }
  }
  
  // Example usage:
  const badyesTea = new BadyesTea();
  
  badyesTea.setTeaData('flavor', 'Energetic Fusion');
  badyesTea.setTeaData('aroma', 'Empowering Essence');
  badyesTea.brewTea();
  badyesTea.customizeBlend('Mighty Mint');
  badyesTea.addEnergyBoost('Ginseng');
  badyesTea.enjoyTea();
  