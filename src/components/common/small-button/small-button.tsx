import "./small-button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
interface SmallButtonProps {
  icon: IconDefinition;
  iconSize?: SizeProp;
  transparent?: boolean;
  clickEvent: React.MouseEventHandler;
}

const SmallButton = ({
  icon,
  iconSize,
  transparent,
  clickEvent,
}: SmallButtonProps): JSX.Element => {
  let classes = "smallButton";

  if (!transparent) {
    classes += " colored";
  }

  return (
    <a className={classes} onClick={clickEvent} href="">
      <FontAwesomeIcon icon={icon} size={iconSize} />
    </a>
  );
};

export default SmallButton;
