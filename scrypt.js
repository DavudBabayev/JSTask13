///////////////////////////////////
///////////////Navbar/////////////
/////////////////////////////////

let navbar = document.createElement("div");
navbar.classList.add("navbar");

let navbarContainer = document.createElement("div");
navbarContainer.classList.add("con");

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

navbarContainer.appendChild(navdiv);
navbar.appendChild(navbarContainer);
document.body.appendChild(navbar);

////////////////////////////////////
///////////////Section/////////////
//////////////////////////////////

let section = document.createElement("div");
section.classList.add("section");

let sectionContainer = document.createElement("div");
sectionContainer.classList.add("con");

let sectionDiv = document.createElement("div");
sectionDiv.classList.add("sectiondiv");

let secDiv1 = document.createElement("div");
secDiv1.classList.add("secdiv1");

let heading5 = document.createElement("h5");
heading5.textContent = "DESIGN · DEVELOPMENT · MARKETING";

let paragraph1 = document.createElement("p");
paragraph1.textContent = "I can help your business to";

let heading2 = document.createElement("h2");
heading2.textContent = "Get online and grow fast";

let btnsDiv = document.createElement("div");
btnsDiv.classList.add("btns");

let btn1 = document.createElement("div");
btn1.classList.add("btn1");
btn1.textContent = "Resume";

let btn2 = document.createElement("div");
btn2.classList.add("btn2");
btn2.textContent = "Projects";

let secDiv2 = document.createElement("div");
secDiv2.classList.add("secdiv2");

let image = document.createElement("img");
image.src = "https://startbootstrap.github.io/startbootstrap-personal/assets/profile.png";
image.alt = "Nigga";

btnsDiv.appendChild(btn1);
btnsDiv.appendChild(btn2);

secDiv1.appendChild(heading5);
secDiv1.appendChild(paragraph1);
secDiv1.appendChild(heading2);
secDiv1.appendChild(btnsDiv);

sectionDiv.appendChild(secDiv1);
sectionDiv.appendChild(secDiv2);

secDiv2.appendChild(image);

sectionContainer.appendChild(sectionDiv);
section.appendChild(sectionContainer);

document.body.appendChild(section);

///////////////////////////////////////
/////////////////Main/////////////////
/////////////////////////////////////

let main = document.createElement("div");
main.classList.add("main");

let maindiv = document.createElement("div");
maindiv.classList.add("maindiv");

let mainHeading2 = document.createElement("h2");
mainHeading2.textContent = "About Me";

let mainHeading5 = document.createElement("h5");
mainHeading5.textContent = "My name is Start Bootstrap and I help brands grow.";

let paragraph = document.createElement("p");
paragraph.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?";

let icondiv = document.createElement("div");
icondiv.classList.add("icondiv");

let twitterLink = document.createElement("a");
twitterLink.href = "#";
let twitterIcon = document.createElement("i");
twitterIcon.classList.add("bi", "bi-twitter");
twitterLink.appendChild(twitterIcon);

let linkedinLink = document.createElement("a");
linkedinLink.href = "#";
let linkedinIcon = document.createElement("i");
linkedinIcon.classList.add("bi", "bi-linkedin");
linkedinLink.appendChild(linkedinIcon);

let githubLink = document.createElement("a");
githubLink.href = "#";
let githubIcon = document.createElement("i");
githubIcon.classList.add("bi", "bi-github");
githubLink.appendChild(githubIcon);

icondiv.appendChild(twitterLink);
icondiv.appendChild(linkedinLink);
icondiv.appendChild(githubLink);

maindiv.appendChild(mainHeading2);
maindiv.appendChild(mainHeading5);
maindiv.appendChild(paragraph);
maindiv.appendChild(icondiv);

main.appendChild(maindiv);

document.body.appendChild(main);

///////////////////////////////////////
///////////////Footer/////////////////
/////////////////////////////////////

let footer = document.createElement("div");
footer.classList.add("footer");

let footerContainer = document.createElement("div");
footerContainer.classList.add("con");

let footerdiv = document.createElement("div");
footerdiv.classList.add("footerdiv");

let copyrightParagraph = document.createElement("p");
copyrightParagraph.textContent = "Copyright © Your Website 2023";

let footerList = document.createElement("ul");

let footerItems = ["Privacy", "Terms", "Contact"];

footerItems.forEach(itemText => {
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    link.href = "#";
    link.textContent = itemText;
    listItem.appendChild(link);
    footerList.appendChild(listItem);
});

footerdiv.appendChild(copyrightParagraph);
footerdiv.appendChild(footerList);

footerContainer.appendChild(footerdiv);
footer.appendChild(footerContainer);

document.body.appendChild(footer);