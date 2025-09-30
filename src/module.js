import mapImage from "./map_location.png";

export function addHomeContent() {
    const contentHolder = document.querySelector("#content");

    const heading2 = document.createElement("h2");
    heading2.textContent = "The best restaurant in town";

    const par = document.createElement("p");
    par.textContent = "Come visit us!";

    const img = document.createElement("img");
    img.src = mapImage;
    img.id = "map";

    contentHolder.appendChild(heading2);
    contentHolder.appendChild(par);
    contentHolder.appendChild(img);
};