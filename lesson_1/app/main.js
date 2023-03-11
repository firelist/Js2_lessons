// const user = prompt('Tell me ur name!');
//
// const regExp = /y/i;
//
// console.log(user.match(regExp))

// const letter = 'aDAWcCseoC'
//
// // const regExp = /[Cc]/gi
//
// const regExp = RegExp('[Cc]', 'g')
//
// console.log(letter.match(regExp))

// const letter = '0W1wAad2geg345t67Ad8jg909wdT87655geRF432esfP1'
//
// const regExp = /\w/g
//
// console.log(letter.replace(regExp, '*'))


// const phoneInput = document.querySelector('#phoneInput')
// const phoneCheck = document.querySelector('.phoneCheck')
// const phoneResult = document.querySelector('span')
//
// const regExp = /^\+996 \d{3} \d{2} \d{2} \d{2}$/
//
// phoneCheck.addEventListener('click', () => {
//     console.log(regExp.test(phoneInput.value))
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.innerText = 'ok'
//         phoneResult.style.color = 'green'
//     } else {
//         phoneResult.innerText = 'not ok'
//         phoneResult.style.color = 'red'
//     }
// })

// let i = 0
//
// const incr = () => {
//     console.log(++i)
//     if (i < 500) {
//         incr ()
//     }
// }
//
// incr()


const peopleObj = {
    Jhon: {
        age: 19,
        parents: {
            Tony: {
                age: 50,
                parents: {
                    Alex: {
                        age: 80,
                    }
                },
            },
            Kelly: {
                age: 40
            },
        },
    },
    Sem: {
        age: 15,
        parents: {
            Jihn: {
                age: 35,
            },
        },
    },
}

// console.log(peopleObj.Jhon.parents)

const parentList = (obj) => {
    if (obj.parents) {
        for (let key in obj.parents) {
            console.log(key)
            parentList(obj.parents[key])
        }
    } else {
        console.log('Упс')
    }
}

for (let key in peopleObj) {
    parentList(peopleObj[key])
}