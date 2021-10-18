const banners = [];

const createNewBanner = (element_id, redirect_link, banner_img) => {
    // Create a banner element
    createBannerElement(element_id, redirect_link, banner_img);

    // Push the new banner to the banners array
    banners.push({ redirectLink: redirect_link, bannerImage: banner_img });
}

const createBannerElement = (element_id, redirect_link, banner_img) => {
    // Creates a banner element
    const bannerElement = document.createElement('img');
    bannerElement.style.height = '320px';
    bannerElement.style.width = '320px';
    bannerElement.style.marginBottom = '15px';
    bannerElement.src = banner_img;
    bannerElement.addEventListener('click', () => window.open(redirect_link, '_blank'));

    // Append banner to the requested element by element's id
    document.getElementById(element_id).appendChild(bannerElement);

    // Reset input fields after submitting the form
    document.forms['banner-form'].reset();

    // Prevent refresh after submitting the form
    return false;
}

const saveBannersOnLocalStorage = () => {
    // Saving banners array on local storage
    localStorage.setItem('banners-data', JSON.stringify(banners));
}

const clearBannersFromLocalStorage = () => {
    // Clearing all banners from local storage
    localStorage.removeItem('banners-data');
}

const renderSavedBanners = () => {
    // Get saved banners from local storage and parse them into an array
    const savedBanners = JSON.parse(localStorage.getItem('banners-data')) || [];

    // Iterate saved banners array
    savedBanners.forEach((savedBanner) => {
        // Populating the our local banners array to be updated with the saved banners from local storage
        banners.push({ redirectLink: savedBanner.redirectLink, bannerImage: savedBanner.bannerImage });
        // Creates a banner element from each saved banner from local storage
        createBannerElement('banners-list', savedBanner.redirectLink, savedBanner.bannerImage);
    })
}

