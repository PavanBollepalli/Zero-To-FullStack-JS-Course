const btn = document.querySelector("button")
// ----------- BAD WAY-----------
// btn.onclick = alert("hey")
// btn.onclick = () => {
//     console.log("Pavan")
// }
// ----------- GREAT WAY-----------
btn.addEventListener("click", (event) => console.log(event))
// ----------- Event (e) Object -----------
const form = document.querySelector("form")
const input = document.querySelector("input")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    // console.log(event);
    console.log(input.value)
})