const http = require ('http');

const fs = require('fs');

const host = 'localhost';

const port =  3008

const pagina = fs.readFileSync('./pagina.html', 'utf-8')

http.createServer((Request, Response) => {
   // Response.write("Este es el host")
    //return response.end()
    
    Response.write("Este es el host");
    Response.end()


    if(Reques.url  === `/home`){
        Response.write(pagina/* llamar pagina */)
        Response.end()
    }

    if(Reques.url === `/`){
        Response.url = ('inicio de proyecto');
        return Response.end()
    }
}).listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`);
})


