const getBlogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3/all" );
    
    xhr.responseType = "json";

    xhr.onload = () => {
        const blogs = xhr.response;
        for (var blog of blogs)
           console.log(blog.flags[0]);
    };

    xhr.send();
};
getBlogs();
