import "./small-button.css";

interface SmallButtonProps {
  icon?: string;
  clickEvent: React.MouseEventHandler;
}

const SmallButton = ({icon, clickEvent}: SmallButtonProps): JSX.Element => {
  return <a onClick={clickEvent} href="">
    +<i></i>
  </a>;
};

export default SmallButton;
