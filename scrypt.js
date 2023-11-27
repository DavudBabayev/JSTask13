let navbar = document.createElement("div");
navbar.classList.add("navbar");

let container = document.createElement("div");
container.classList.add("con");

let nestedDiv = document.createElement("div");
nestedDiv.classList.add("ndiv");

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

nestedDiv.appendChild(startBootstrapLink);
nestedDiv.appendChild(menuList);

container.appendChild(nestedDiv);

navbar.appendChild(container);

document.body.appendChild(navbar);