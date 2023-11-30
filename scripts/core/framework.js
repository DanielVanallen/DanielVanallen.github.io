

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
    //creates the main div for the header
    var headBar = document.createElement('div');
    headBar.id = "head-bar";
    document.getElementById("main-page").appendChild(headBar);

    //creates name title
    var myName = document.createElement("p");
    myName.id = "my-name";
    myName.textContent = "Daniel Vanallen";
    headBar.appendChild(myName);

    //creates div for social links
    var linkIcons = document.createElement('div');
    linkIcons.id = "link-div";
    headBar.appendChild(linkIcons);

    //LinkedIn Link
    var linkedIn = document.createElement('img');
    linkedIn.id = "linkedIn-link";
    linkedIn.classList.add('social-link');
    linkedIn.src = "scripts/media/linkdIn_logo.png";
    linkIcons.appendChild(linkedIn);
    linkedIn.onclick = function() {
        window.location.href = 'https://www.linkedin.com/in/daniel-vanallen-34b022134';
    }

    //facebook Link
    var facebook = document.createElement('img');
    facebook.id = "facebook-link";
    facebook.classList.add('social-link');
    facebook.src = "scripts/media/Facebook_logo.png";
    linkIcons.appendChild(facebook);
    facebook.onclick = function() {
        window.location.href = 'https://www.facebook.com/daniel.vanallen.1';
    }
}