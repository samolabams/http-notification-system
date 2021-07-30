export default () => ({
  publisher: {
    PORT: Number(process.env.PUBLISHER_APP_PORT) || 8000,
  },
  subscriber: {
    PORT: Number(process.env.SUBSCRIBER_APP_PORT) || 9000,
  },
});
