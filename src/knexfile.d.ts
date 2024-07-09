import { Knex } from 'knex';

declare module '../../knexfile' {
  
    interface KnexConfig {
      [key: string]: Knex.Config;
    }
  
    const knexConfig: KnexConfig;
    export { knexConfig };
  }
  