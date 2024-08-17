module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: {
      resolve: {
        fallback: {
          "fs": false,
          "path": require.resolve("path-browserify")
        }
      }
    }
  }
};
