// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
//
//
// const handbleClick = () => {
//     console.log('click')
// }
//
// // handbleClick()
//
// const btn = document.querySelector('#btn')
//
// btn.addEventListener('click', () =>{
//     handbleClick()
// })
//
// setTimeout(() => {
//     console.log('async hello')
// }, 1000)
//
// console.log(1)
// console.log(2)
// console.log(3)

// const interval = setInterval(() => {
//     console.log('interval')
// }, 2000)
//
// // setTimeout(()=>clearInterval(interval), 6000)
//
// btn.addEventListener('click', ()=>{
//     clearInterval(interval)
// })

// let i = 0
//
// btn.addEventListener('click', () => {
//     i++
//     if (i === 1) {
//         var interval = setInterval(() => {
//             console.log('interval')
//         }, 2000)
//     } else {
//         clearInterval(interval)
//     }
// })

// const myFunc = (arg) => {
//     console.log(arg)
// }
//
// myFunc('hello')

// setTimeout()


// const doHomeWork = (subject, callback, callback2, callback3, callback4) => {
//     alert(`starting me ${subject} homework`)
//     callback()
//     callback2()
//     callback3()
//     callback4()
// }
//
// const alertFinished = () => {
//     alert('1')
// }
// const alertFinished2 = () => {
//     alert('2')
// }
// const alertFinished3 = () => {
//     alert('3')
// }
// const alertFinished4 = () => {
//     alert('4')
// }
//
// doHomeWork('chemistry', alertFinished, alertFinished2(), alertFinished3(), alertFinished4())
// // alertFinished()
//
// const myFunc = () => {
//     console.log('1')
// }
//
// setTimeout(myFunc, 1000)
//
// const timeout = (callback, time) => {
//     callback()
// }
//
// const eventlistener = (action, callback) => {}


// const [one, two] = [1, 2]
//
// console.log(one)
// console.log(two)

const block = document.querySelector('.block')
const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 440) {
        positionX += 1
        box.style.left = `${positionX}px`
        setTimeout(move, 5)
    } else if (positionX >= 440 && positionY <= 440) {
        positionY += 1
        box.style.top = `${positionY}px`
        setTimeout(move, 5)
    }
}

move()


setTimeout(() => {
    console.log('1')
}, 1000)
setTimeout(() => {
    console.log('1')
}, 1000)