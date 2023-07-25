import "./dropdown.css";

export interface DropdownOption {
  value: string;
  title: string;
}

export interface DropdownProps {
  dropdownName: string;
  dropdownId: string;
  options: DropdownOption[];
  className?: string;
  changeEvent: React.ChangeEventHandler<HTMLSelectElement>;
}

const Dropdown = ({
  dropdownName,
  dropdownId,
  options,
  className,
  changeEvent,
}: DropdownProps) => {
  return (
    <select
      className={`dropdown ${className ?? ""}`}
      name={dropdownName}
      id={dropdownId}
      onChange={changeEvent}
    >
      {options.map((option) => {
        return (
          <option key={crypto.randomUUID()} value={option.value}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
