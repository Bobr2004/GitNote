const result = document.querySelector(".result__score")
const imag = document.querySelector(".result__image")

console.log("chlen")

let col;
imag.classList.remove("result__image-good")
imag.classList.remove("result__image-bad")
const shzh = {
    "good": "#349048FF",
    "bad": '#dc383c'
}

if (Number(result.innerText) >= 3) {
    imag.classList.add("result__image-good")
    result.style.color = shzh.good
} else {
    imag.classList.add("result__image-bad")
    result.style.color = shzh.bad
}

result.innerText = Number(result.innerText) * 25 + "%"

