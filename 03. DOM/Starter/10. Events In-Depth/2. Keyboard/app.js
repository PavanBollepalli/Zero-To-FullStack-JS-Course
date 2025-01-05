// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");
// input.addEventListener("keydown", (e) => {
//     console.log("key down")
//     console.log(e.key)
// })
// input.addEventListener("keypress", (e) => {
//     console.log("key press")
//     // console.log(`${e.key} pressed`)
// })

input.addEventListener("keyup", (e) => {
    console.log(e.code)
})