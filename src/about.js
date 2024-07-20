import { menuPage } from "./menu";

export function aboutPage() {
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('aboutPageContainer');
    const subPageContainer = document.createElement('div');
    subPageContainer.classList.add('subPageContainer');
    const aboutPageHeading = document.createElement('span');
    aboutPageHeading.innerText = 'Estd. 1856';
    aboutPageHeading.classList.add('aboutPageHeading');
    const aboutPageContent = document.createElement('div');

    const menuPageLink = document.createElement('button');
    menuPageLink.classList.add('menuPageLink');
    menuPageLink.innerText = 'menu';
    menuPageLink.addEventListener('click', () => {
        console.log('About button clicked')
        const aboutPageContainer = document.getElementsByClassName('aboutPageContainer')[0];
        const PageContainer = document.getElementsByClassName('pageContainer')[0];
        if(!aboutPageContainer) return;
        PageContainer.removeChild(aboutPageContainer);
        PageContainer.appendChild(menuPage());
    });

    aboutPageContent.appendChild(menuPageLink);
    aboutPageContent.classList.add('aboutPageContent');
    aboutPageContent.appendChild(getContent());
    subPageContainer.appendChild(aboutPageContent);
    subPageContainer.appendChild(aboutPageHeading);
    aboutPage.appendChild(subPageContainer);
    return aboutPage;
}

function getContent() {

    const aboutPageContentSpanContainer = document.createElement('div');
    aboutPageContentSpanContainer.classList.add('aboutPageContentSpanContainer');

    const span1 = document.createElement('span1');
    const span2 = document.createElement('span2');
    const span3 = document.createElement('span3');

    span1.classList.add('contentContainer');
    span2.classList.add('contentContainer');
    span3.classList.add('contentContainer');

    span1.innerText = 'Tomar\'s, established in the 1800s, is a culinary gem serving a delightful fusion of Indian and Italian cuisine. Nestled on the banks of a picturesque river, it offers a serene dining experience that is both relaxing and captivating.';
    span2.innerText = 'The restaurant\'s unique blend of flavors and rich history creates an unforgettable atmosphere. Diners can savor exquisite dishes while enjoying the stunning riverside views, where the sunlight dances on the water, enhancing the overall ambiance.';
    span3.innerText = 'With its charming setting and delicious food, Tomar\'s leaves every customer in awe. Whether it\'s the aromatic spices of Indian dishes or the savory tastes of Italian cuisine, a meal here is a true delight.';

    aboutPageContentSpanContainer.appendChild(span1);
    aboutPageContentSpanContainer.appendChild(span2);
    aboutPageContentSpanContainer.appendChild(span3);

    return aboutPageContentSpanContainer;
}