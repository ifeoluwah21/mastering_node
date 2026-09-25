import net from 'node:net';
export const blockList = new net.BlockList();

//add a rule to block the given IP address
blockList.addRange('127.0.0.2', '127.0.0.8', 'ipv4');
// create the socket address
const socketAddress = new net.SocketAddress({
	address: '127.0.0.1',
	family: 'ipv4',
	port: 5050,
});
