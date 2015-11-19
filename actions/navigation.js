function navigated() {
    normalizedHash = window.location.hash.replace(/^#\/?|\/$/g, "");

    if (normalizedHash === "") {
        startNavigating("/contacts");
    }
    else {
        setState({ location: normalizedHash.split("/") });
    }
}

function startNavigating(newURI) {
    var currentURI = window.location.hash.substr(1);

    window.location.replace(
        window.location.pathname + window.location.search + '#' + newURI
    );
}
