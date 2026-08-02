const http = require("http")

const server = http.createServer()

const PORT = 5000
server.listen(PORT, 'localhost', (err) => {
    if (!err) {
        console.log(`Server Running.. ${PORT}`)

        console.log("Please CTRL + C to disconnect server...")

    }
})