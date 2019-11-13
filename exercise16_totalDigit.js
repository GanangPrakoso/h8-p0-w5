function totalDigitRekursif(angka) {
    
    let angkaSplit = angka.toString();
    let jumlah = 0;
    jumlah += Number(angkaSplit[0])
    if (angkaSplit.length==1){
        return jumlah
    }
    else {
        return jumlah + totalDigitRekursif(Number(angkaSplit.slice(1)))
    }

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5