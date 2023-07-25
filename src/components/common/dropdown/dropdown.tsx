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
}

const Dropdown = ({
  dropdownName,
  dropdownId,
  options,
  className,
}: DropdownProps) => {
  return (
    <select
      className={`dropdown ${className ?? ""}`}
      name={dropdownName}
      id={dropdownId}
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
