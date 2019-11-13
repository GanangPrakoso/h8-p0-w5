function kaliTerusRekursif(angka) {
    let angkaString = angka.toString();
    let kali = 1;
    for (let i=0; i<=angkaString.length-1; i++){
        kali*=Number(angkaString[i])
    }

    if (angkaString.length==1){
        return angka;
    }
    else {
        return kaliTerusRekursif(kali)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6