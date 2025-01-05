// 1. Select the anchor tag
const anchor = document.querySelector("a")
// 2. Use getAttribute(attrName) to check the attribute.
console.log(anchor.getAttribute("href"))
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)
const a2 = document.querySelector(".a-two")
a2.setAttribute("href", "https://meta.com")