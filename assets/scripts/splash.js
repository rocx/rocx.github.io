---
---

/* DO NOT EDIT THIS ARRAY -- Built automatically from _data/splash_texts.yml. */
let SPLASHES = [
    {%- for splash in site.data.splash_texts %}
    "{{ splash | strip_newlines | escape }}",
    {%- endfor %}
];

/* Array.pick() - pick a random element from the array */
Array.prototype.pick = function () {
    return this[Math.floor(Math.random() * this.length)];
}

/* Simply push a random splash text to the page's header. */
window.addEventListener("DOMContentLoaded", (event) => {
    let splashText = document.createElement("div");
    let holder = document.getElementById("splash-holder");

    splashText.classList.add("splash-text");
    splashText.innerHTML = SPLASHES.pick();
    holder.appendChild(splashText);
});
