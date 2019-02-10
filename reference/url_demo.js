const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);

// Return URL as string
console.log(myUrl.toString());

// Return the host (root domain)
// Will provide a port number if given
console.log(myUrl.host);

// Return the hostname
console.log(myUrl.hostname);

// Return the pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Return search query params object
console.log(myUrl.searchParams);

// Add a parameter to the search query
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params object using forEach
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));