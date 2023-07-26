import "./switch.css";

interface SwitchProps {
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Switch = ({isChecked, onChange}: SwitchProps) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
