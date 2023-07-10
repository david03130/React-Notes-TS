import "./button.css";

interface ButtonProps {
  text: string;
  clickEvent: React.MouseEventHandler;
}

const Button = ({ text, clickEvent }: ButtonProps) => {
  return (
    <a className="button" onClick={clickEvent} href="">
      {text}
    </a>
  );
};

export default Button;
