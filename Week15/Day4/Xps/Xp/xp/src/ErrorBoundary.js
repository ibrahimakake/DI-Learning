import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: error
    });
  }

  render() {
    if (this.state.hasError) { 
      return (
        <div>
          <h2>An error has occurred.</h2>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
