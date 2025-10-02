export function addMenuContent() {
    const contentHolder = document.querySelector("#content");

    const heading2 = document.createElement("h2");
    heading2.textContent = "Menu";

    const par = document.createElement("p");
    par.textContent = "Burger - 10€";

    contentHolder.appendChild(heading2);
    contentHolder.appendChild(par);
};