import { addHomeContent } from "./home";
import { addMenuContent } from "./menu";
import { addAboutContent } from "./about";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

addHomeContent();

function tabSwitch () {
    const content = document.querySelector("#content");
    content.textContent = "";
};

homeButton.addEventListener("click", () => {
    tabSwitch();
    addHomeContent();
});

menuButton.addEventListener("click", () => {
    tabSwitch();
    addMenuContent();
});

aboutButton.addEventListener("click", () => {
    tabSwitch();
    addAboutContent();
});