import net from 'node:net';

import { socket } from './socket';
import { server } from './server';
import { blockList } from './blocklist';

console.log(socket.address());
console.log(socket.bytesWritten);
console.log(socket.bytesRead);

console.log(socket.server);
console.log(socket.localAddress);
// console.log(socket.destroy());
