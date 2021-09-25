const getBlogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3/all" );
    
    xhr.responseType = "json";

    xhr.onload = () => {
        const blogs = xhr.response;
        for (var blog of blogs)
           console.log(`Country name: ${blog.name.common} Region: ${blog.region} Sub Region: ${blog.subregion}`);
    };

    xhr.send();
};
getBlogs();
