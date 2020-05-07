const {unlinkSync} = require('fs');
const {createServer} = require('net');

try {
	unlinkSync('./listener.sock');
} catch (error) {
}

const server = createServer();
server.listen('./listener.sock', () => {
	process.exit(0);
});
