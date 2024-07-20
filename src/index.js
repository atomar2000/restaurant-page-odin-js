import './index.css'
import { aboutPage } from './about';
import { menuPage } from './menu';

function handleMenuBtnClick() {
    console.log("handleMenuBtnClicked!");   
}

function handleAboutBtnClick() {
    console.log("handleAboutBtnClicked!");    
}

function header(){
    const headerElement = document.createElement('div');
    headerElement.classList.add('header');
    headerElement.classList.add('playwrite-hu-elegant');
    const headerText = document.createElement('span');
    headerText.classList.add('headerText');
    headerText.innerText = "tomar's";
    headerElement.appendChild(headerText);
    return headerElement;
}

function tabs() {
    const tabContainer = document.createElement('div');
    const menuTab = document.createElement('nav');
    const aboutTab = document.createElement('nav');
    const menuButton = document.createElement('button');
    const aboutButton = document.createElement('button');
    menuButton.innerHTML = "menu";
    aboutButton.innerHTML = "about";
    menuButton.addEventListener('click', handleMenuBtnClick);
    aboutButton.addEventListener('click', handleAboutBtnClick);
    tabContainer.classList.add('tabContainer');
    menuTab.classList.add('tabElement');
    aboutTab.classList.add('tabElement');
    menuButton.classList.add('tabButton', 'menuTabButton');
    aboutButton.classList.add('tabButton', 'aboutTabButton');
    menuTab.appendChild(menuButton);
    aboutTab.appendChild(aboutButton);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(aboutTab);
    return tabContainer;
}

export function renderMenuPage() {
    const aboutPageContainer = document.getElementsByClassName('aboutPageContainer')[0];
    const PageContainer = document.getElementsByClassName('pageContainer')[0];
    if(!aboutPageContainer) return;
    PageContainer.removeChild(aboutPageContainer);
    PageContainer.appendChild(menuPage());
}

const pageContainer = document.createElement('div');
pageContainer.classList.add('pageContainer');

document.body.classList.add('playwrite-hu-elegant');
pageContainer.appendChild(menuPage());
document.body.appendChild(pageContainer);