// function pangkats (angka, pangkat){
//     if (pangkat==1){
//         return angka;
//     }
//     else {
//         return angka * pangkats (angka, pangkat - 1)
//     }
// }
// console.log(pangkats(5,2));

// function sorting(arrNumber) {
//     // return (arrNumber.sort(function (a,b){return b-a}));
//     //ATAU PAKAI BUBBLE SORT

//     for (let i=0; i<=arrNumber.length-1; i++){
//         for (let j=0; j<=arrNumber.length-1; j++){
//             if (arrNumber[j]<arrNumber[j+1]){
//                 let temp = arrNumber [j]
//                 arrNumber[j] = arrNumber[j+1]
//                 arrNumber[j+1] = temp;
//             }
//         }
//     }
//     return arrNumber
//   }
  
//   function getTotal(arrNumber) {
//     if (arrNumber.length<1){
//         return "''";
//     }

//     let counter = 0;
//     for (let i=0; i<=arrNumber.length-1; i++){
//         if (arrNumber[0]==arrNumber[i]){
//             counter++
//         }
//     }
//     return 'angka paling besar adalah '+arrNumber[0]+' dan jumlah kemunculan sebanyak '+counter+' kali'
//   }
  
//   function mostFrequentLargestNumbers(arrNumber) {
//     var listSort = sorting(arrNumber);
//     var countHighest = getTotal(listSort);
//     return countHighest;
//   }
  
//   console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//   //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
//   console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
//   console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
//   console.log(mostFrequentLargestNumbers([]));
//   //''

// function changeVocals (str) {
//     henshin = ''
//     for (let i=0; i<=str.length-1; i++){
//         if (str[i]=='A' || str[i]=='I' || str[i]=='U' || str[i]=='E' || str[i]=='O'){
//             if (str[i]=='A'){
//                 henshin+='B'
//             }
//             if (str[i]=='I'){
//                 henshin+='J'
//             }
//             if (str[i]=='U'){
//                 henshin+='V'
//             }
//             if (str[i]=='E'){
//                 henshin+='F'
//             }
//             if (str[i]=='O'){
//                 henshin+='P'
//             }
//         }
//         else if (str[i]=='a' || str[i]=='i' || str[i]=='u' || str[i]=='e' || str[i]=='o'){
//             if (str[i]=='a'){
//                 henshin+='b'
//             }
//             if (str[i]=='i'){
//                 henshin+='j'
//             }
//             if (str[i]=='u'){
//                 henshin+='v'
//             }
//             if (str[i]=='e'){
//                 henshin+='f'
//             }
//             if (str[i]=='o'){
//                 henshin+='p'
//             }
//         }
//         else {henshin+=str[i];}
//     }
//     return henshin
//   }
  
//   function reverseWord (str) {
//     let balik = ''
//     for (let i=str.length-1; i>=0; i--){
//         balik+=str[i]
//     }
//     return balik
//   }
  
//   function setLowerUpperCase (str) {
//     let henshin = '';
//     for (let i=0; i<=str.length-1; i++){
//         if (str[i]===str[i].toLowerCase()){
//         henshin+=str[i].toUpperCase();
//         } else {
//             henshin+=str[i].toLowerCase();
//         }
//     }
//     return henshin
//   }
  
//   function removeSpaces (str) {
//     let fckSpaces = str.split(' ').join('');
//     return fckSpaces
//   }

//   function passwordGenerator (str) {

//     if (str.length<5){
//         return 'Minimal karakter yang diinputkan adalah 5 karakter'
//     }
//     let ubahVocal = changeVocals(str);
//     let balik = reverseWord(ubahVocal);
//     let gedeKecil = setLowerUpperCase(balik);
//     let password = removeSpaces(gedeKecil);
//     return password
//   }
  
//   console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
//   console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//   console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

// function makanTerusRekursif(waktu) {

//     let makanKenyang = 0;
//     makanKenyang++
//     if (waktu < 1){
//         return 0
//     }
//     else {
//         return makanKenyang + makanTerusRekursif(waktu-15)
//     }
//   }
  
//   // TEST CASES
//   console.log(makanTerusRekursif(66)); // 5
//   console.log(makanTerusRekursif(100)); // 7
//   console.log(makanTerusRekursif(90)); // 6
//   console.log(makanTerusRekursif(10)); // 1
//   console.log(makanTerusRekursif(0)); // 0

// function totalDigitRekursif(angka) {
    
//     let angkaSplit = angka.toString();
//     let jumlah = 0;
//     jumlah += Number(angkaSplit[0])
//     if (angkaSplit.length==1){
//         return jumlah
//     }
//     else {
//         return jumlah + totalDigitRekursif(Number(angkaSplit.slice(1)))
//     }

//   }
  
//   // TEST CASES
//   console.log(totalDigitRekursif(512)); // 8
//   console.log(totalDigitRekursif(1542)); // 12
//   console.log(totalDigitRekursif(5)); // 5
//   console.log(totalDigitRekursif(21)); // 3
//   console.log(totalDigitRekursif(11111)); // 5

// function kaliTerusRekursif(angka) {
//     let angkaString = angka.toString();
//     let kali = 1;
//     for (let i=0; i<=angkaString.length-1; i++){
//         kali*=Number(angkaString[i])
//     }

//     if (angkaString.length==1){
//         return angka;
//     }
//     else {
//         return kaliTerusRekursif(kali)
//     }
//   }
  
//   // TEST CASES
//   console.log(kaliTerusRekursif(66)); // 8
//   console.log(kaliTerusRekursif(3)); // 3
//   console.log(kaliTerusRekursif(24)); // 8
//   console.log(kaliTerusRekursif(654)); // 0
//   console.log(kaliTerusRekursif(1231)); // 6

// function meleeRangedGrouping (str) {
//     if (str.length<1){
//         console.log();
//         return []
//     }

//     let range = []
//     let melee = []
//     let grouping = [range, melee]

//     let newArr = str.split(',')
//     for (let i=0; i<=newArr.length-1; i++){
//         if (newArr[i][newArr[i].length-1]=='d'){
//             let temp = newArr[i].split('-');
//             range.push(temp[0])

//         }
//         if (newArr[i][newArr[i].length-1]=='e'){
//             let temp = newArr[i].split('-');
//             melee.push(temp[0])
//         }
//     }
//     console.log('');
    
//     return grouping;
//   }
  
//   // TEST CASE
  
//   console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
//   // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
//   console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
//   console.log(meleeRangedGrouping('')); // []

// function asterisk (rows){
//     for (let i=1; i<=rows; i++){
//         let bintang = '';
//         for (let j=1; j<=(rows-i); j++){
//             bintang+= ' ';
//         }
//         for (let k=1; k<=i; k++){
//             bintang+= '*';
//         }
//         console.log(bintang);
//     }
// }

// asterisk(5);

// function asterisk (rows){
//     for (let i=1; i<=rows; i++){
//         let bintang = '';
//         for (let j=1; j<=i; j++){
//             bintang+= '*'
//         }
//         console.log(bintang);
//     }
//     for (let l=1; l<=rows; l++){
//         if (l>1){
//             let abc = ''
//         for (let m=rows; m>=l; m--){ 
//             abc+='*' 
//         }
//         console.log(abc);
        
//         }
//     }
// }

// asterisk (5)

// var str = 'Regex itu ez pizi';
// var rts = str.split(/\s/);
// console.log(rts);

// var trs = str.replace(/ez pizi/, 'susah COEG!');
// console.log(trs);

// var strMatch = trs.match(/e/gi);
// console.log(strMatch);

// var bacotz = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%itu#$*( , ^%&*!!^& dan !#*#$&ini*@%#'
// console.log(bacotz.match(/[a-z]+/gi));

// if (bacotz.match(/[0-9]/g)==null){
//     console.log('yo wtf niggzzzzterssss');  
// }

// function hapusSimbol(str) {
//     let trs = str.match(/[a-z0-9]+/g)
//     return trs.join('')
//   }
  
//   // TEST CASES
//   console.log(hapusSimbol('test%$4aa')); // test4aa
//   console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
//   console.log(hapusSimbol('ma@#k!an~')); // makan
//   console.log(hapusSimbol('coding')); // coding
//   console.log(hapusSimbol('1+3-5*2=100')); // 1352100

function checkArr (date){
    let dateArr = [];
    
        let temp = ''
        for (let j=0; j<=date.length-1; j++){
            if (date[j]===' '){
                dateArr.push(temp);
                temp = ''
            }else{
                temp+=date[j];
            }
            
        }
        dateArr.push(temp)
    
    return dateArr
}

console.log(checkArr('16 mei 2017'));
