import GraphQL from './loaders/graphql';

// Server Port
const PORT: number = Number(process.env.PORT) || 3000;

try {
  // Server init
  new GraphQL(PORT)
  .start();
} catch(err) {
  console.error(`Error initializing the graphql server`, err)
  process.exit();
}