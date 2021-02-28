const { NODE_ENV, APP_SERVER_PORT } = process.env;

const ENV = {
  APP: {
    NODE_ENV,
    SERVER_PORT: APP_SERVER_PORT,
  },
} as const;

export { ENV };
