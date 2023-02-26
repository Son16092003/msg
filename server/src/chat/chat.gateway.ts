import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class ChatGateway {

  @WebSocketServer() server;

  handleConnection(client: any, ...args: any[]) {
    console.log( `client ${client.id} connected`);

  }

  handleDisconnect(client: any, ...args: any[]) {
    console.log( `client ${client.id} disconnected`);

  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    const roomId = payload.roomId;
    console.log('message', payload);
    this.server.emit('message-' + roomId, payload);
    return 'Hello world!';
  }
}
