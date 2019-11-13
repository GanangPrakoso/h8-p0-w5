function changeVocals (str) {
    henshin = ''
    for (let i=0; i<=str.length-1; i++){
        if (str[i]=='A' || str[i]=='I' || str[i]=='U' || str[i]=='E' || str[i]=='O'){
            if (str[i]=='A'){
                henshin+='B'
            }
            if (str[i]=='I'){
                henshin+='J'
            }
            if (str[i]=='U'){
                henshin+='V'
            }
            if (str[i]=='E'){
                henshin+='F'
            }
            if (str[i]=='O'){
                henshin+='P'
            }
        }
        else if (str[i]=='a' || str[i]=='i' || str[i]=='u' || str[i]=='e' || str[i]=='o'){
            if (str[i]=='a'){
                henshin+='b'
            }
            if (str[i]=='i'){
                henshin+='j'
            }
            if (str[i]=='u'){
                henshin+='v'
            }
            if (str[i]=='e'){
                henshin+='f'
            }
            if (str[i]=='o'){
                henshin+='p'
            }
        }
        else {henshin+=str[i];}
    }
    return henshin
  }
  
  function reverseWord (str) {
    let balik = ''
    for (let i=str.length-1; i>=0; i--){
        balik+=str[i]
    }
    return balik
  }
  
  function setLowerUpperCase (str) {
    let henshin = '';
    for (let i=0; i<=str.length-1; i++){
        if (str[i]===str[i].toLowerCase()){
        henshin+=str[i].toUpperCase();
        } else {
            henshin+=str[i].toLowerCase();
        }
    }
    return henshin
  }
  
  function removeSpaces (str) {
    let fckSpaces = str.split(' ').join('');
    return fckSpaces
  }

  function passwordGenerator (name) {

    if (name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    let ubahVocal = changeVocals(name);
    let balik = reverseWord(ubahVocal);
    let gedeKecil = setLowerUpperCase(balik);
    let password = removeSpaces(gedeKecil);
    return password
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'