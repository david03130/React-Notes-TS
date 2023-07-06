import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ReactPortalProps {
  children: React.ReactNode;
  wrapperId: string;
}

const ReactPortal = ({
  children,
  wrapperId,
}: ReactPortalProps): React.ReactPortal | null => {
  const [wrapperElement, setWrapperElement] = useState<Element>();

  const element = document.getElementById(wrapperId);

  if (!element) {
    throw new Error("Error in the ReactPoral component.");
  } else {
    setWrapperElement(element);
    return createPortal(children, element);
  }
};

const createWrapper = (wrapperId: string): HTMLDivElement => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

export default ReactPortal;
