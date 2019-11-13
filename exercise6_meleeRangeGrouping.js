function meleeRangedGrouping (str) {
    if (str.length<1){
        console.log();
        return []
    }

    let range = []
    let melee = []
    let grouping = [range, melee]

    let newArr = str.split(',')
    for (let i=0; i<=newArr.length-1; i++){
        if (newArr[i][newArr[i].length-1]=='d'){
            let temp = newArr[i].split('-');
            range.push(temp[0])

        }
        else if (newArr[i][newArr[i].length-1]=='e'){
            let temp = newArr[i].split('-');
            melee.push(temp[0])
        }
    }
    console.log('');
    
    return grouping;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []