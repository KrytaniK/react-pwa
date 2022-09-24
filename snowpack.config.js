// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/dist' },
    public: { url: '/', static: true }
  },
  devOptions: {
    port: 3000
  },
  buildOptions: {
    out: 'docs',
    baseUrl: '/',
  },
  optimize: {
    bundle: true,
    minify: true
  }
};
