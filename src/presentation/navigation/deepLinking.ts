export const linking = {
  prefixes: ["products://"],
  config: {
    screens: {
      Home: {
        path: "category/:slug?",
        parse: {
          slug: (slug: string) => slug,
        },
      },
      ProductDetail: {
        path: "product/:id",
        parse: {
          id: (id: string) => Number(id),
        },
      },
    },
  },
};
