---
---

/* DO NOT EDIT THIS ARRAY -- Built automatically from _data/fortunes.yaml. */
const FORTUNES = [
    {%- for fortune in site.data.fortunes %}
    "{{ fortune | strip_newlines }}",
    {%- endfor %}
];

/* Array.pick() - pick a random element from the array */
Array.prototype.pick = function () {
    return this[Math.floor(Math.random() * this.length)];
}

/* Simply push a random splash text to the page's header. */
window.addEventListener("DOMContentLoaded", (event) => {
    var fortuneElement = document.getElementById("fortune-placeholder");
    fortuneElement.textContent = FORTUNES.pick();
});
