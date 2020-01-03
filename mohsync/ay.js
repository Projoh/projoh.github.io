const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://accounts.spotify.com/authorize?client_id=0aee05689c87401bb1655859ef15d235&response_type=code"; // site that doesn’t send Access-Control-*
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;
let rediurl = "www.mayassin.com/mohsync/work.html"
const url = "https://accounts.spotify.com/authorize?client_id=0aee05689c87401bb1655859ef15d235&response_type=code&redirect_uri="+rediurl; // site that doesn’t send Access-Control-*
window.open(url,"",params);

// fetch(proxyurl + url)
//     .then(function (response) {
//         console.log(response.text().then(function (s) {
//             window.open()
//             console.log(s);
//         }));
//         console.log(response);
//     })
//     .then(function (content) {
//         console.log(content);
//     })
//     .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


// var email = prompt("Please enter your email homie");
// var pass = prompt("Please enter your password");
