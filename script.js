const input = document.querySelector(".input")
const percent = [.5, .3, .2]
const easter = document.querySelector("#easter")

input.addEventListener("input", function(){
  const sibling = this.parentNode.children[1].children
  for(let i = 0; i < percent.length; i++){
    const persentLogo = `<span>${percent[i] * 100}</span>\n`
    sibling[i].innerHTML = persentLogo + "$" + (this.value * percent[i]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&.").replace(/.(..)$/, ",$1")
  }
  easter.textContent = codes[this.value]
})