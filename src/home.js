export function addHomeContent() {
    const contentHolder = document.querySelector("#content");

    const heading2 = document.createElement("h2");
    heading2.textContent = "The best restaurant in town";

    const par = document.createElement("p");
    par.textContent = "Come visit us!";

    contentHolder.appendChild(heading2);
    contentHolder.appendChild(par);
};