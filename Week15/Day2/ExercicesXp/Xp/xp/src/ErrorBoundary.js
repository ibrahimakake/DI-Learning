import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <img
      alt="error"
      src="https://img.freepik.com/vecteurs-libre/oops-erreur-404-illustration-concept-robot-casse_114360-5529.jpg?w=140&t=st=1691966632~exp=1691967232~hmac=65c9d2c5e7d1e14f4c5b037951de7eecb968e5227429e75f6a43ebdb8e368338"
    />
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
