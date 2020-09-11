// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";

module.exports = {
  TimelineMax: class {
    constructor() {
      this.to = jest.fn().mockReturnThis();
    }
  },
};
