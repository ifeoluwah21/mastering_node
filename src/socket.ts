import net from 'node:net';

import { blockList } from './blocklist';

export const socket = new net.Socket({
	allowHalfOpen: false,
});

socket.on('close', (err) => {
	if (err) {
		console.log(`close event: The Socket close due to an error\n`);
	}
});

socket.on('connect', () => {
	console.log('connect event: Handshake was successfully\n');
});

socket.on('connectionAttempt', (ip, port, family) => {
	console.log(
		`connectionAttempt event: ${ip}:${port} - attempted to connect\n`,
	);
});

socket.on('connectionAttemptFailed', (ip, port, family, error) => {
	console.error(
		`connectionAttemptFailed event:${ip}:${port} - failed to connect`,
	);
	console.error(`connectionAttemptFailed event: ${error.message}\n`);
});

socket.on('connectionAttemptTimeout', (ip, port, family) => {
	console.log(
		`connectionAttemptTimeout event:${ip}:${port} - connection timed out\n`,
	);
});

socket.on('data', (data) => {
	console.log(`server: ${data}\n`);
});

socket.on('drain', () => console.log('write buffer is empty'));

socket.on('end', () => console.log('end event: closing socket....\n'));

socket.on('error', (err) => console.log(`error event: ${err.message}\n`));

socket.on('ready', () =>
	console.log('ready event: socket is ready to write or read data\n'),
);

socket.on('timeout', () =>
	console.log('timeout event: socket is idle.... Timeout manually\n'),
);
