import net from 'node:net';

import { blockList } from './blocklist';
import { boundSocket } from './boundSocket';

export const server = new net.Server(
	{
		allowHalfOpen: true,
	},
	(socket) => {
		console.log(`connection event(server)-1: client connected\n`);

		setTimeout(() => {
			socket.end();
			server.close();
		}, 9000);
		socket.on('error', (err) => {
			console.warn('error event(server):', err.message, '\n');
			server.close(() => console.warn(`error event(server): ${err.message}\n`));
		});

		socket.on('data', (data) => {
			console.log(`client: ${data}\n`);
			switch (data.toString().toLowerCase()) {
				case 'hello':
					socket.write('Hi, how are you?');
					break;
				case 'fine':
					socket.write('Ok');
					socket.write('What did you eat today?');
					break;
				case 'rice':
					socket.write("That's nice.");
					socket.write('Bye');
					socket.end();
					break;
				default:
					socket.end();
			}
		});

		socket.write('server: Hello');

		socket.on('end', () => {
			console.log('socket end event: server');
		});
	},
);

//setting up logging events on the server
server.on('close', () => console.log('close event(server):closed server...\n'));

server.on('connection', (socket) => {
	console.log(
		`connection event(server)-2:server connected to a socket on address:`,
		socket.address(),
		'\n',
	);
	// socket.end();
});

server.on('error', (err) =>
	console.log('error event(server): server was killed due to error\n'),
);

server.on('drop', (data) => {
	console.log(
		'drop event(server): server reached threshold. connection details',
		data,
		'\n',
	);
});

server.on('listening', () =>
	console.log(`listening event(server): server is listening for connection\n`),
);

//server adopting the bound socket
server.listen(boundSocket);
