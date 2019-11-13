function attack (damage) {
    let minusDamage = damage*2
    return minusDamage
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    let totalAttack = damagePerAttack*numberOfAttacks;
    let minDmg = attack(numberOfAttacks);
    return totalAttack - minDmg;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90