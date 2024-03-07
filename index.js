const server = require('./api/server');

const port = 9000;

console.log('hey you')

server.listen(port, () => {
    console.log(`listening on ${port}`)
})
