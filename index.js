//1-masala
 function qaytaTartiblash(sonlar) {
    let tartiblangan = [...sonlar].sort((a, b) => a - b);
    let natija = [];
    let chap = 0;
    let ong = tartiblangan.length - 1;
    while (chap <= ong) {
        if (chap !== ong) {
            natija.push(tartiblangan[ong]);
            natija.push(tartiblangan[chap]);
        } else {
            natija.push(tartiblangan[chap]);
        }
        chap++;
        ong--;
    }
    return natija;
}
let arr = [3, 1, 4, 1, 5, 9, 2];
console.log(qaytaTartiblash(arr)); 



//2-masala


// function uniqueSozlar(matn) {
//     let sozlar = matn.split(" ");
//     let unique = [];

//     for (let soz of sozlar) {
//         if (!unique.includes(soz)) {
//             unique.push(soz);
//         }
//     }

//     return unique;
// }
// const str = "apple banana apple orange banana orange grape";
// console.log(uniqueSozlar(str));



//4-masala


// function stringKopaytir(matn, son) {
//     let natija = "";

//     for (let i = 0; i < son; i++) {
//         natija += matn;
//     }

//     return natija;
// }


// console.log(stringKopaytir("salom", 4));



//5-masala

// function Arry(birinchiarry,ikkinchiarry) {
//     let natija=[]
//     for (const element of birinchiarry) {
//         if (ikkinchiarry.includes(element)) {
//             natija.push(element)
//         }
//     }
//     return natija;
// }
// let arr1=[1,2,3,4,5]
// let arr2=[4,5,6,7,8,9]
// console.log(Arry(arr1,arr2));
