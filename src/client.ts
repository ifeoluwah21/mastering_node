import net from 'node:net';

import { socket } from './socket';

//connect to the ICP server

socket.connect(
	{
		port: 3030,
	},
	() => {
		console.log('connected to "/tmp/tcp-serverrr..."');
	},
);
socket.write('Hello');

socket.on('data', (data) => {
	switch (data.toString().toLowerCase()) {
		case 'hi, how are you?':
			socket.write('Fine');
			break;
		case 'ok':
			break;
		case 'what did you eat today?':
			socket.write('Rice');
			break;
		case "that's nice.":
			break;
		case 'bye':
			break;
		default:
			break;
	}
});
// setTimeout(() => {
// 	socket.write('Client says hello, This is Ifeoluwa, Do you copy????');
// }, 1000);
// setTimeout(() => {
// 	socket.write('DONED');
// 	// socket.end();
// }, 2000);
