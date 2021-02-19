let imagesToLoad = document.querySelectorAll('img[data-src]');


const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 200px 0px'
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach(item => {
            if (!item.isIntersecting) {
                return;
            }   else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach(image => {
        imgObserver.observe(image);
    });
}

// //if supported, then ... if not supported just load all the images
// if ('IntersectionObserver' in window) {
//         const imgObserver = new IntersectionObserver((items) => {
//             items.forEach(item) => {
//                 if (item.isIntersecting) {
//                     loadImages(item.target);
//                     imgObserver.unobserve(item.target);
//                 }
//             });
//         }, imgOptions);

//         imagesToLoad.forEach(img) => {
//             imgObserver.observe(img);
//         });

//         } else {
//             imagesToLoad.forEach((img) => {
//                 loadImages(img);
//         });
// }
