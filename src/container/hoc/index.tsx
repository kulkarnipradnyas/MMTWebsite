import React from "react";
// Take in a component as argument WrappedComponent
const HigherOrderComponent = (WrappedComponent, props) => {
  // And return another component
  class HOC extends React.Component {
    render() {
      return <WrappedComponent {...props} />;
    }
  }
  return <HOC />;
};
export default HigherOrderComponent;
