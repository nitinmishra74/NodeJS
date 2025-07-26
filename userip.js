const http = require('http');

const server = http.createServer((req, res) => {
    // Show the form only on GET request to "/"
    if (req.url === '/' && req.method === 'GET') {
        console.log(req.url , req.method);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Form Page</title></head>');
        res.write('<body>');
        res.write('<h2>Fill the Form</h2>');
        res.write(`
            <form method="POST" action="/submit">
                <label for="name">Name:</label>
                <input type="text" name="name" required /><br><br>

                <label>Gender:</label><br>
                <input type="checkbox" name="gender" value="Male" /> Male<br>
                <input type="checkbox" name="gender" value="Female" /> Female<br><br>

                <button type="submit">Submit</button>
            </form>
        `);
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else if(req.url === '/submit' && req.method == 'POST'){
        
        res.statusCode = 302;
        //redirecting code yad rhe status code bhut maine rakhta hai
        res.setHeader('Location', '/success');
        return res.end();
    }else if(req.url === '/success'){
        res.setHeader('Content-Type', 'Text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Form Submitted Successfully');
        res.write('</body>');
        res.write('</html>');
       res.end();
    }


   
});
    
//     const PORT = 3001;
// server.listen(PORT,()=>{
//     console.log(`Server is strten on PORT NO. ${PORT}`);
// })