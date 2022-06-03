module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
    todo: {
      enabled: true,
      resolve: "./src/plugins/todo",
    },
  },
];
