 const targets = document.querySelectorAll('img.lazy-load');

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            console.log('&');

            if(entry.isIntersecting){
                const img = entry.target;
                const src = img.getAttribute('alt');

                img.setAttribute('src', src);
                img.classList.remove('lazy-load');
                img.classList.add('lazy-fade');

                observer.disconnect();
            }
        });

    });

    io.observe(target);
};

targets.forEach(lazyLoad);