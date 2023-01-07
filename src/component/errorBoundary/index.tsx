import * as React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo: string;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    errorInfo: "",
  };

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return !this.state.hasError ? (
      this.props.children
    ) : (
      <div className="status">Something went wrong</div>
    );
  }
}

export default ErrorBoundary;
