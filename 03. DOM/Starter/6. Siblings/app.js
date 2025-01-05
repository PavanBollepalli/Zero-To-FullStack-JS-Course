const li1 = document.querySelector("li")
// parentElement accessing
console.log(li1.parentElement)
console.log(li1.parentElement.parentElement)
console.log(li1.parentElement.parentElement.parentNode)
// children element accessing
console.log(li1.children)
console.log(li1.parentElement.children)
console.log(li1.parentElement.children[0].innerText)
// sibling accessing 
console.log(li1.nextElementSibling)
console.log(li1.previousElementSibling)