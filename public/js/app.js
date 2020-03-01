// const log = console.log

// log('Client side JS file is loaded')
// // fetch('http://puzzle.mead.io/puzzle').then((res)=>{


// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
// const msg1 = document.querySelector('#msg1')
// const msg2 = document.querySelector('#msg2')

// // msg1.textContent = "from JS"
// // msg2.textContent = 

// // msg2.textContent = "Alex is a big idiot"
// weatherForm.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     const location = search.value
//     msg1.textContent = 'loading ... '
//     msg2.textContent = ''
//     fetch('http://localhost:3000/weather?address='+location).then((res)=>{ res.json().then((data)=>{
//     if(data.error){
//         msg1.textContent = data.error
//     }    
//     msg1 .textContent = data.address
//     msg2.textContent = data.forecast
//     // log(data.forecast)
//     // log(data.address)
//     })
// })
// })



// // const weatherForm = document.querySelector('form')
// // const search = document.querySelector('input')
// // const msg1 = document.querySelector('#msg1')
// // const msg2 = document.querySelector('#msg2')


// // weatherForm.addEventListener('submit',(e)=>{
// //     e.preventDefault() // e stands for event
// //     const location = search.value
// //     msg1.textContent = 'Loading...'
// //     msg2.textContent = ''

// //     fetch('/weather?address='+ location).then((response)=>{
// //     response.json().then((data)=>{
// //         if(data.error){
// //             msg1.textContent = data.error 
// //         } else {
// //             msg1.textContent = data.location
// //             msg2.textContent = data.forecast
// //         }

// //     })
// // })
// //     // log('testing submit')
// // })