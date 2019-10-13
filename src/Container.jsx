// import React from "react";
import { connect } from "react-redux";
import { actions } from "./store";

const mapStateToProps = state => {
  return {
    reduxState: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: actions
  };
};
export const Container = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
