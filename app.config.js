import 'dotenv/config';

export default {
  expo: {
    name: "products-app",
    slug: "products-app",
    extra: {
      apiUrl: process.env.API_URL,
    },
  },
};
