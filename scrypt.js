let navbar = document.createElement("div");
navbar.classList.add("navbar");

let container = document.createElement("div");
container.classList.add("con");

let navdiv = document.createElement("div");
navdiv.classList.add("ndiv");

let startBootstrapLink = document.createElement("a");
startBootstrapLink.href = "#";
startBootstrapLink.textContent = "Start Bootstrap";

let menuList = document.createElement("ul");

let menuItems = ["Home", "Resume", "Projects", "Contact"];

menuItems.forEach(itemText => {
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    link.href = "#";
    link.textContent = itemText;
    listItem.appendChild(link);
    menuList.appendChild(listItem);
});

navdiv.appendChild(startBootstrapLink);
navdiv.appendChild(menuList);

container.appendChild(navdiv);

navbar.appendChild(container);

document.body.appendChild(navbar);