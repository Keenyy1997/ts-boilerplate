import Server from './loaders/server';

// Server Port
const PORT: number = Number(process.env.PORT) || 3000;

// Server init
new Server(PORT)
  .start();