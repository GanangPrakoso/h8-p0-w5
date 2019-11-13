// VARIASI SOAL NOMOR 2
// MENCARI MOVIE BERDASARKAN BULAN/TAHUN
function findMovie(when, arrMovie){

    if (when.length<1){
        console.log();
        return {error: 'filter harus diisi'}
    }

    let output = {}

    for (let h=0; h<=when.length-1; h++){
        if (when[h]===String(when[h])){
            output.month = when[h]
        } else {
            output.year = when[h]
        }
    }
    output.count = 0
    output.list = [];

    function checkArr (date){
        let dateArr = [];
        
            let temp = ''
            for (let j=0; j<=date.length-1; j++){
                if (date[j]===' '){
                    dateArr.push(temp);
                    temp = ''
                }
                else {
                    temp+=date[j];
                }
            }
            dateArr.push(temp)
        return dateArr
    }

    for (let i=0; i<=arrMovie.length-1; i++){
        let checkDate = checkArr(arrMovie[i][1]);

        if (checkDate[1]==output.month && checkDate[2]==output.year){
            output['list'].push({title: arrMovie[i][0], genre: arrMovie[i][2]})
            output.count++
        } 
        else if (checkDate[2]==output.year || checkDate[1]==output.month){
            output['list'].push({title: arrMovie[i][0], genre: arrMovie[i][2]})
            output.count++
        }
    }

    if (output['list'].length<1){
        console.log();
        return {error: 'tidak menemukan movie di waktu tersebut'}
    }
    console.log();
    return output
}
console.log(findMovie(["May", 2016], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));
/*
{
    month: "May",
    year: "2016",
    count: 1,
    list: [
        {
            title: "Suicide Squad",
            genre: "Action"
        }
    ]
}
*/
console.log(findMovie(["January", 2019], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));
/*
{ 
    month: 'January',
    year: 2019,
    count: 2,
    list:[ 
        { title: 'Fast Furious', genre: 'Action' },
        { title: 'IT', genre: 'Horror' } 
    ] 
}
*/
console.log(findMovie([2019], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));
/*
{ 
    year: 2019,
    count: 4,
    list:[ 
        { 
            title: 'Fast Furious', 
            genre: 'Action' 
        },
        { 
            title: 'IT', 
            genre: 'Horror' 
        },
        { 
            title: 'Justice League', 
            genre: 'Action'
        },
        { 
            title: 'Lion King', 
            genre: 'Animation' 
        }
    ] 
}
*/
console.log(findMovie(["December"], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));
/*
{ error: 'Tidak menemukan movie di waktu tersebut' }
*/
console.log(findMovie([], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));
/*
{ error: 'Filter Harus Diisi' }
*/
