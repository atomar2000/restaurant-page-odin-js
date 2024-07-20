import Breads from './Breads.json';
import Appetizers from './Appetizers.json';
import { aboutPage } from './about.js';

let currPageIndex = 0;

console.log(Breads);

const menuArray = [Appetizers, Breads];

export function menuPage() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menuPageContainer');
    const subPageContainer = document.createElement('div');
    subPageContainer.classList.add('subPageContainer');
    const menuPageFooter = document.createElement('span');
    menuPageFooter.innerText = 'Estd. 1856';
    menuPageFooter.classList.add('menuPageFooter');

    const menuPageHeading = document.createElement('span');
    menuPageHeading.innerText = 'Tomar\'s Menu';
    menuPageHeading.classList.add('menuPageHeading');

    const aboutPageLink = document.createElement('button');
    aboutPageLink.innerText = 'about';
    aboutPageLink.classList.add('menuPageHeading');
    aboutPageLink.addEventListener('click', () => {
        console.log('About button clicked')
        const menuPageContainer = document.getElementsByClassName('menuPageContainer')[0];
        const PageContainer = document.getElementsByClassName('pageContainer')[0];
        if(!menuPageContainer) return;
        PageContainer.removeChild(menuPageContainer);
        PageContainer.appendChild(aboutPage());
    });

    const headingContainer = document.createElement('div');
    headingContainer.classList.add('headingContainer');

    headingContainer.appendChild(menuPageHeading);
    headingContainer.appendChild(aboutPageLink);

    const menuPageContent = document.createElement('div');
    menuPageContent.classList.add('menuPageContent');
    menuPageContent.appendChild(getContent());
    subPageContainer.appendChild(headingContainer)
    subPageContainer.appendChild(menuPageContent);
    menuPage.appendChild(subPageContainer);
    return menuPage;
}

function getContent() {

    const menuPageContentSpanContainer = document.createElement('div');
    menuPageContentSpanContainer.classList.add('menuPageContentSpanContainer');

    const leftContainer = document.createElement('div');
    const mainContent = document.createElement('div');
    const rightContainer = document.createElement('div');

    leftContainer.classList.add('leftContainer');
    mainContent.classList.add('mainContent');
    rightContainer.classList.add('rightContainer');

    const leftArrow = document.createElement('button');
    leftArrow.classList.add('arrows');
    leftArrow.innerText = '<'
    leftContainer.appendChild(leftArrow);
    leftArrow.addEventListener('click', () => {
        currPageIndex = currPageIndex-1;
        if(currPageIndex == -1) {
            currPageIndex = menuArray.length-1;
        }
        updatePageIndex(currPageIndex);
    });

    const rightArrow = document.createElement('button');
    rightArrow.classList.add('arrows');
    rightArrow.innerText = '>'
    rightContainer.appendChild(rightArrow);
    rightArrow.addEventListener('click', () => {
        currPageIndex = currPageIndex+1;
        if(currPageIndex == menuArray.length) {
            currPageIndex = 0;
        }
        updatePageIndex(currPageIndex);
    });

    mainContent.appendChild(parseMenuContent(menuArray[currPageIndex]));

    menuPageContentSpanContainer.appendChild(leftContainer)
    menuPageContentSpanContainer.appendChild(mainContent)
    menuPageContentSpanContainer.appendChild(rightContainer)

    return menuPageContentSpanContainer;
}

function parseMenuContent(menuObject) {
    const listContainer = document.createElement('div');
    listContainer.classList.add('listContainer');
    const subMenuHeading = document.createElement('span');
    subMenuHeading.classList.add('itemTypeHeader');
    subMenuHeading.innerText = menuObject.title;
    listContainer.appendChild(subMenuHeading);

    menuObject.subMenu.forEach(content => {
        const subListContainer = document.createElement('ul');
        subListContainer.classList.add('subListContainer');
        const type = document.createElement('span');
        type.classList.add('itemType');
        type.innerText = content.title;
        listContainer.appendChild(type);
        content.content.forEach(element => {
            const item = document.createElement('li');
            item.appendChild(menuItem(element.name, element.desc));
            item.classList.add('item');
            subListContainer.appendChild(item);
        });
        listContainer.appendChild(subListContainer);
    });
    return listContainer;
}

function menuItem(name, desc) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    const itemName = document.createElement('span');
    itemName.classList.add('itemName');
    itemName.innerText = name;
    const itemDesc = document.createElement('span');
    itemDesc.classList.add('itemDesc');
    itemDesc.innerText = desc;
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDesc);
    return menuItem;
}

function updatePageIndex(currPageIndex) {
    const listContainer = document.body.getElementsByClassName('listContainer')[0];
    const page = document.getElementsByClassName('mainContent')[0];
    page.removeChild(listContainer);
    page.appendChild(parseMenuContent(menuArray[currPageIndex]));
}