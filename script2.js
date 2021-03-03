// function outerFunction(outerVariable) {
//     const outer2 = 'Hi'
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable)
//         console.log('inner Variable: ' + innerVariable)
//         console.log(outer2)
//     }
// }

function outerFunction(url) {
    fetch(url).then(() => {
        console.log(url)
    })
}

const newFunction = outerFunction('outside')
newFunction('inner')