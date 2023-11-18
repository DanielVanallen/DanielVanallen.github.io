

function CreateMainPage()
{
    var mainPage = document.getElementById("main-page");
    var h = window.innerHeight;
    mainPage.style.height = "" + h + "px";
    mainPage.style.width = window.innerWidth;
    mainPage.style.backgroundColor = "black";
    var backgroundImage = document.createElement("img");
    backgroundImage.id = "background-image";
    backgroundImage.setAttribute('src', "scripts/media/MyPageBackground.jpg");
    backgroundImage.setAttribute('title', "Background-Image");
    mainPage.appendChild(backgroundImage);

    CreateHeadBar();
}

function CreateHeadBar()
{
    var headBar = document.createElement('div');
    headBar.id = "head-bar";
    document.getElementById("main-page").appendChild(headBar);
    var myName = document.createElement("p");
    myName.id = "my-name";
    myName.textContent = "Daniel Vanallen";
    headBar.appendChild(myName);
}