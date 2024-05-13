module.exports = (ctx) => ({
    index: async (ctx) => {
      const io = ctx.state.io;
  
      io.on('connection', (socket) => {
        console.log('A user connected');
  
        socket.on('message', (data) => {
          console.log('Received message:', data);
          socket.emit('message', data);
        });
  
        socket.on('disconnect', () => {
          console.log('A user disconnected');
        });
      });
  
      return { data: 'WebSocket API is running' };
    },
  });