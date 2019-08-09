function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

fetch("http://httpstat.us/500")
    .then(handleErrors)
    .then(response => console.log("ök!"))
    .catch(err => console.log(err));