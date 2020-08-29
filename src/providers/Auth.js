import { Component } from "react";

class withAuth extends Component {
  state = {
    isAuthorised: false,
  };

  toggleAuth = () => {
    this.setState((prevState) => ({
      isAuthorised: !prevState.isAuthorised,
    }));
  };

  render() {
    const renderProps = {
      isAuthorised: this.state.isAuthorised,
      toggleAuth: this.toggleAuth,
    };

    return this.props.render(renderProps);
  }
}

export default withAuth;
