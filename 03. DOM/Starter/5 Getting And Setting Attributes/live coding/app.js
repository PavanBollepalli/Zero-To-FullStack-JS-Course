// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)
const a = document.querySelector("a")
console.log(a.href)
a.href = "https://meta.com"
console.log(a.href)
a.classList.add("hero")
a.style = "padding:20px; color: red; font-style:none;"
const input = document.querySelector("input")
console.log(input.placeholder)
// input.placeholder = "i changed it "
input.setAttribute("placeholder", "i changed it")