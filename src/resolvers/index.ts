import { IResolvers  } from 'apollo-server';
import { getRandomHome } from './query/home';

// Our resolver(general) needs to be an object

/**
 * @description Function to load all resolvers. From Mutations to Queries
 */
export function loadResolvers(): IResolvers {

  return {
    Query: {
      getRandomHome
    }
  }
}