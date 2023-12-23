$(document).ready(function () {
    var href = window.location.href;
    var hrefRegExp = /\?_?[A-Za-z0-9\-=]+/g;
    var link = "http://scp-jp.wikidot.com/";

    if (hrefRegExp.test(href)) {
        var arguments = href.slice(href.search(hrefRegExp) + 1);

        link = buildUrl(arguments)

        window.location.replace(link);
    } else {
        alert("SCP-JPにリダイレクトします");
        window.location.replace('http://scp-jp.wikidot.com/');
    }

    function buildUrl(arguments) {
        if (/=/g.test(arguments)) {
            var args = arguments.split("&");
            var name, site, scheme;
            for (i = 0; i < args.length; i++) {
                if (/name=[A-Za-z0-9\-]+/g.test(args[i])) {
                    name = args[i].slice(args[i].search(/=[A-Za-z0-9\-]+/g) + 1);
                }
                if (/site=[A-Za-z0-9\-]+/g.test(args[i])) {
                    site = args[i].slice(args[i].search(/=[A-Za-z0-9\-]+/g) + 1);
                }
            }
            console.log("name = " + name);
            console.log("site = " + site);
            console.log("scheme = " + scheme);
            if (site == undefined) {
                site = "scp-jp";
            }
            if (scheme == undefined) {
                scheme = "http";
            }
            link = scheme + "://" + site + ".wikidot.com/" + name;
        } else {
            link = "http://scp-jp.wikidot.com/" + arguments;
        }
        return link;
    }
})