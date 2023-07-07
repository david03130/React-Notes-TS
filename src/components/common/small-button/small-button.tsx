import "./small-button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface SmallButtonProps {
  icon: IconDefinition;
  clickEvent: React.MouseEventHandler;
}

const SmallButton = ({ icon, clickEvent }: SmallButtonProps): JSX.Element => {
  return (
    <a className="smallButton" onClick={clickEvent} href="">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SmallButton;
