// ------------------------------------
// createElement()
const h1 = document.createElement("h1")
h1.classList.add("Greetings")
console.log(h1)
h1.innerText = "Good morning"
h1.style.color = "purple"
console.log(h1)
// appendChild()
document.body.appendChild(h1)
// append()
// prepend()
// insertBefore()
const ul = document.querySelector("ul")
const newLi = document.createElement("li")
newLi.innerText = "newLi"
const firstLi = document.querySelector("li")
ul.appendChild(newLi)
ul.insertBefore(newLi, firstLi)
/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */
const p = document.querySelector("p")
const i = document.createElement("i")
i.innerText = "I am italics"
i.style.color = "orange"
p.insertAdjacentElement("afterbegin", i)
p.insertAdjacentElement("afterend", i)
p.insertAdjacentElement("beforebegin", i)
p.insertAdjacentElement("beforeend", i)
const section = document.querySelector("section")
const span = document.createElement("span")
span.innerText = "Span"
span.style.color = "red"
section.append(i, span)
// section.prepend(i, span)
// removeChild()
// section.removeChild(span)
// remove()
// section.remove(i, span)
const newList = document.querySelector(".new-list")
newList.removeChild(newList.children[1])
// ------------------------------------
