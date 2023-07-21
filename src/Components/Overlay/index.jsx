import React, { useEffect, useState } from "react";
import "./overlay.css";
import { useLockBodyScroll } from "@uidotdev/usehooks";

function Overlay({ children, isModal }) {
  useLockBodyScroll();
  const overlayClass = isModal ? "flex overlay" : "overlay";

  return <div className={overlayClass}>{children}</div>;
}

export default Overlay;
