// function pythagorean() {
//     for (let a = 1; a < 1000; a ++) {
//         for (let b < a; b < 1000; b ++) {
//             for (let c = 1; c < 1000; c ++) {
//                 if ((a*a) + (b*b) === (c*c) && (a+b+c === 1000)) {
//                     console.log(a*b*c)
//                 }
//             }
//         }
//     }
// }

const pythagoreanTriplet = () => {
    for (let a = 1; a < 1000; a ++) {
        for (let b = a; b < 1000; b++) {
            const c = 1000 - b-a;
            if (a * a + b* b === c * c) {
                console.log(a*b*c)
            }
        }
    }
}

pythagoreanTriplet()