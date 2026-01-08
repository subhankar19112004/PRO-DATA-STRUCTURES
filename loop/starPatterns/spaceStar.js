let n = 5;
// for( let i =0; i < n; i++){
//     let row = "";
//     for(let j = 0; j < n - (i+1);j++ ){
//         row = row + "#";
//     }
//     for( let k = 0; k < i+1; k++){
//         row = row + "*";
//     }
//     console.log(row);
// }

// let n = 5
// for( let i = 0; i < n; i++){
//     let row = "";
//     let toggle = 1;
//     for( let j = 0; j < i+1; j++){
//         row = row  + toggle;
//         if (toggle == 1) {
//             toggle = 0;
//         }else {
//             toggle = 1;
//         }
//     }
//     console.log(row);
// }


// let n = 5;
// let toggle = 1;
// for( let i = 0;  i< n; i++){
//     let row = "";
//     for( let j = 0; j < i+1; j++){
//         row = row  + toggle;
//         if( toggle == 1){
//             toggle = 0;
//         }else { 
//             toggle = 1;
//         }
//     }
//     console.log(row);
    
// }

// for( let i = 0; i < 5; i++ ){
//     let row = "";
//     for(let k = 0; k < 5 - (i + 1 ); k++){
//         row += " ";
//     }
//     for(let j = 0; j < i + 1; j++){
//         row += "*";
//     }
//     console.log(row);
// }

for( let i = 0; i < n; i++ ){
    let row = "";
    let toggle = 1;
    for ( let j =0; j < i + 1; j++ ){
        row = row + toggle;
        // if ( toggle == 1){
        //     toggle = 0;
        // }else {
        //     toggle = 1;
        // }
        toggle = toggle === 1 ? 0 : 1;
    }
    console.log(row)
}