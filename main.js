// 0 1 1 2 3 5 8 13
// f(n) = f(n-1) + f(n-2)



// function f(n){
//     if(n < 2) return 1;
//     return f(n - 1) + f( n - 2);

// }
// console.log(f(6));

// function fl(n){
//     let f1 = 0, f2 = 1, cf = 1;
//     if(n > 0 && n < 30){

//     }
//     for (let i= 1; i <= n; i++ ) {
//         cf = f1 + f2;
//         f1 = f2;
//         f2 = cf;
//     }
//     return cf;
// }
// console.log(fl(6));
let n=100;
let min=prompt('Minimum sonni kiriting');
let max=prompt('Maxsimum sonni kiriting');
let f1=0, f2=1,f3;
 document.write('Minimum '+min+'  va  Maximum  '+ max+ ' sonlari orasidagi fibonachi sonlar: ');
for(let i=0;i<n;i++){
        cf = f1 + f2;
        f1 = f2;
        f2 = cf;
    if(min < cf&& cf< max){
        document.write('   '+ cf+ '  ');

    }
}
function name(params) {
    
}