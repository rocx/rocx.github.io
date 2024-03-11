const FORTUNES = {
    "default": [
        "INSERT CREDIT",
        "Unexpected item in the frontal lobe area",
        "📦",
        "You have angered the gazebo.  Roll for initiative.",
        "On the rocks",
        "My condolences to the chef",
    ],
};

export default class FortuneCookie extends HTMLElement {
    constructor() {
        super();
        this.fortunes = ["default"].flatMap((k) => FORTUNES[k]);
    }

    static register() {
        customElements.define("fortune-cookie", this);
    }

    fortune() {
        const idx = Math.floor(Math.random() * this.fortunes.length);
        const fortune = this.fortunes.at(idx);

        switch (typeof fortune) {
        case "string":
            return fortune;
        default:
            return fortune.toString();
        }
    }

    setFortune() {
        this.innerText = this.fortune();
    }

    connectedCallback() {
        this.setFortune();
   }
}
