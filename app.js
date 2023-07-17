console.log("hello!");

const { exec } = require('node:child_process')
const { spawn } = require('node:child_process')

const http = require('http');
const server = http.createServer();

const io = require('socket.io')(server);



function runCommand(command) {
    exec(command, (err, output) => {
        if (err) {
            return err;
        }
        return output;
    })
}

socketsArr = new Array(); 

io.on('connection', (socket) => {
    console.log("connection acquired!");
    socketsArr.push(socket)

    socket.on('disconnect', () => {
        console.log("connection from " + socket.handshake.address + " disconnected");
        socketsArr.splice(socketsArr.indexOf(socket), 1);
    })
    
})

function sleep(time) {
    var waitTill = new Date(new Date().getTime() + time );
while(waitTill > new Date()){}
}