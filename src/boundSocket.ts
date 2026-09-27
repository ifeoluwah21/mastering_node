import net from 'node:net';

export const boundSocket = new net.BoundSocket({
	host: '127.0.0.1',
	port: 3030,
	// ipv6Only: false,
	// path: '/tmp/tcp-server.sock',
});

console.log(`The generated address is:`, boundSocket.address());
console.log(`The file descriptor for the socket is: ${boundSocket.fd()}`);
console.log(`${boundSocket.isPipe ? 'ICP' : 'TCP'}`);

// setTimeout(() => {
// 	boundSocket.close();
// 	console.log('closed boundsocket....');
// }, 5000);
