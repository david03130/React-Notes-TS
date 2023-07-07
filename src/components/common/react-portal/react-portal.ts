import React, { useEffect, useLayoutEffect, useState } from "react";
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
  let element: HTMLElement | null;

  element = document.getElementById(wrapperId);

  if (!element) {
    throw new Error("Error in the ReactPortal component.");
  }
  
  useEffect(() => {
    setWrapperElement(element!);
  }, []);

  return createPortal(children, element);
};

const createWrapper = (wrapperId: string): HTMLDivElement => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

export default ReactPortal;
