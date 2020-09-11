module.exports = {
  verbose: true,
  TimelineMax: class {
    constructor() {
      this.to = jest.fn().mockReturnThis();
    }
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(!gsap/gsap-core)"],
};
