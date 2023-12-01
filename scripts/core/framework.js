
//link for Full Sail University mention.
var fsLink = document.createElement('a');
fsLink.id = "full-sail";
fsLink.classList.add("links");
fsLink = "<a href='https://www.fullsail.edu/'>Full Sail University</a>";

var gdLink = document.createElement('a');
gdLink.id = "game-design";
gdLink.classList.add("links");
gdLink = "<a href='https://www.fullsail.edu/degrees/interactive-technology-game-design'>Game Design Concentration</a>";

var svLink = document.createElement('a');
svLink.id = "sim-vis";
svLink.classList.add("links");
svLink = "<a href='https://www.fullsail.edu/degrees/simulation-and-visualization-bachelor'>Simulation & Visualization</a>";

function ClearMainDiv()
{
    if(document.getElementById('main-div').getAttribute('cur-page') != "")
    {
        document.getElementById(document.getElementById('main-div').getAttribute('cur-page')).remove();
    }
}

//creates the main page that can be manipulated as needed
function CreateMainCanvas()
{
    var mainPage = document.getElementById("main-page");
    document.body.appendChild(mainPage);

    CreateHeadBar();
}

//creates the header bar that will remain in place the for the whole website.
//parent = main-page
function CreateHeadBar()
{
    //creates the main div for the header
    var headBar = document.createElement('div');
    headBar.id = "head-bar";
    document.getElementById("main-page").appendChild(headBar);

    //creates name title bar for the name and titles
    var titleBar = document.createElement("div");
    titleBar.id = "title-bar";
    headBar.appendChild(titleBar);

    //creates the p for my name
    var nameBar = document.createElement('p');
    nameBar.id = 'my-name';
    nameBar.innerHTML = "Daniel Vanallen"
    titleBar.appendChild(nameBar);

    var emailBar = document.createElement('p');
    emailBar.id = 'my-email';
    emailBar.innerHTML = "daniel.brian.vanallen@gmail.com";
    titleBar.appendChild(emailBar);

    //creates div for social links
    var linkIcons = document.createElement('div');
    linkIcons.id = "link-div";
    linkIcons.classList.add("center-divs");
    headBar.appendChild(linkIcons);

    //LinkedIn Link
    var linkedIn = document.createElement('img');
    linkedIn.id = "linkedIn-link";
    linkedIn.classList.add('social-link');
    linkedIn.src = "scripts/media/linkdIn_logo.png";
    linkedIn.alt = "linkedIn logo";
    linkIcons.appendChild(linkedIn);
    linkedIn.onclick = function() {
        window.location.href = 'https://www.linkedin.com/in/daniel-vanallen-34b022134';
    }

    //facebook Link
    var facebook = document.createElement('img');
    facebook.id = "facebook-link";
    facebook.classList.add('social-link');
    facebook.src = "scripts/media/Facebook_logo.png";
    facebook.alt = "facebook logo";
    linkIcons.appendChild(facebook);
    facebook.onclick = function() {
        window.location.href = 'https://www.facebook.com/daniel.vanallen.1';
    }
    
    //Creates navigation bar
    CreateNavigationBar();
}

 //creates the navigation bar that stays active the whole time,
 //parent = headBar
function CreateNavigationBar()
{
    //creates the main div for the header
    var navBar = document.createElement('div');
    navBar.id = "nav-bar";
    navBar.classList.add("center-divs");
    document.getElementById("head-bar").appendChild(navBar);

    var hpLink = document.createElement("div")
    hpLink.id = "home-page-link";
    hpLink.innerHTML = "Home";
    hpLink.classList.add("nav-div");
    navBar.appendChild(hpLink);
    hpLink.onclick = function(){
        CreateHomePage();
    }

    var myResumeLink = document.createElement('div');
    myResumeLink.id = "resume-link";
    myResumeLink.innerHTML = "Resume and Skills";
    myResumeLink.classList.add("nav-div");
    navBar.appendChild(myResumeLink);
    myResumeLink.onclick = function(){
        CreateResumePage();
    }
    CreateHomePage();
}

//This will be the first page that is created all the time.  Navigation will start here
//parent = none
function CreateHomePage()
{
    ClearMainDiv();
    var mainDiv = document.getElementById('main-div');
    //creates the main div for the home page
    var homePage = document.createElement('div');
    homePage.id = 'home-page';
    homePage.classList.add('page')
    mainDiv.appendChild(homePage);
    mainDiv.setAttribute("cur-page", homePage.id);

    //the div that holds the pictures
    var picDiv = document.createElement('div');
    picDiv.id = "pic-div";
    picDiv.classList.add("center-divs");
    homePage.appendChild(picDiv);
    
    //creates the professional image of me
    // var proPic = document.createElement('img');
    // proPic.id = "pro-pic";
    // proPic.classList.add("profile-pics");
    // proPic.src = "scripts/media/Professional_Pic_500.jpg";
    // proPic.alt = "My Professional Pic";
    // picDiv.appendChild(proPic);

    //Creates the relaxed image of me
    var relPic = document.createElement('img');
    relPic.id = "relaxed-pic";
    relPic.classList.add("profile-pics");
    relPic.src = "scripts/media/relaxed_pic.jpg";
    relPic.alt = "my relaxed picture";
    picDiv.appendChild(relPic);

    //the div that holds the opening text of me.
    var aboutMe = document.createElement('div');
    aboutMe.id = 'about-me';
    aboutMe.classList.add("center-divs");
    homePage.appendChild(aboutMe);

    //creates the p for the about me text
    var meText = document.createElement("p");
    meText.id = 'me-text';
    meText.innerHTML = "Hello, My name is Daniel Vanallen and I have a wide variety of skills that can be helpful to fill many different positions.  After 11 years in the US Army, I have moved on to my passion which is computer science.  I have obtained two bachelor degrees from " + fsLink + ".  One in "+ gdLink + " and one in "+ svLink + "." + 
    "<br><br>I have also aquired web development experience due to a prior job needing help with the web development portion of the project I was on so I took it upon myself to learn HTML, CSS and Javascript in order to help.</br></br>"+
    "Please feel free to look around my portfolio and if you have any questions you may reach out to me via linkedIn or by my email.";
    aboutMe.appendChild(meText);
}

function CreateResumePage()
{
    //clears the main div and creates a reference
    ClearMainDiv();
    var mainDiv = document.getElementById('main-div');

    //creates the main div for the Resume page
    var resPage = document.createElement('div');
    resPage.id = 'resume-page';
    mainDiv.appendChild(resPage);
    mainDiv.setAttribute("cur-page", resPage.id);

    //creates the first dive that has links to both my resumes
    var resumes = document.createElement("div");
    resumes.id = "res-div";
    resumes.classList.add('page');
    resumes.classList.add('center-divs');
    resPage.appendChild(resumes);

    //creates the GameDev resume link
    var gameRes = document.createElement("div");
    gameRes.id = "game-resume";
    gameRes.classList.add("resLink-div");
    gameRes.innerHTML = "GAME DEVELOPER RESUME";
    resumes.append(gameRes);
    gameRes.onclick = function(){
        window.location.href = "https://drive.google.com/file/d/1qgCaRciYSuANNCuQHhkaCqPfkDuPk4J_/view?usp=sharing"
    }

    //creates the first resume link
    var xrRes = document.createElement("div");
    xrRes.id = "xr-resume";
    xrRes.classList.add("resLink-div");
    xrRes.innerHTML = "XR DEVELOPER RESUME";
    resumes.append(xrRes);
    xrRes.onclick = function(){
        window.location.href = "https://drive.google.com/file/d/1vkiU0DtQL20p5QIMVd3xnT988_NLu6-9/view?usp=sharing"
    }

}