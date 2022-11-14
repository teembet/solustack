import * as React from "react";
import { CSSProperties } from "react";
import Status from "./Status";

const defaultStyle: CSSProperties = {
  //height: "101vh",
  // textAlign: "center",
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "center",
  // backgroundColor: "#2d1176",
  // color: "#fff",
};

type Props = {
  children: React.ReactNode;
  inView: boolean;
  style?: CSSProperties;
};

/**
 * ScrollWrapper directs the user to scroll the page to reveal it's children.
 * Use this on Modules that have scroll and/or observer triggers.
 */
const ScrollWrapper = ({ children, style, inView, ...props }: Props) => {
  return <div {...props}>{children}</div>;
};

export default ScrollWrapper;
