document.addEventListener('DOMContentLoaded', function () {
    let disqus = document.getElementById('disqus_thread');

    let remove_ads = setInterval(() => {
        let iframes = document.getElementsByTagName('iframe');

        for (var iframe in iframes) {
            if (typeof iframes[iframe].src === 'undefined') {
                continue;
            }

            if (iframes[iframe].src.match(/(ads-iframe)|(disqusads)/gi)) {
                iframes[iframe].style.display = 'none';
                disqus.style.width = '100%';
            }
        }
    }, 500);

    setTimeout(function () {
        clearInterval(remove_ads);
    }, 5000);
});