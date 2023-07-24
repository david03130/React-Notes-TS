import "./dropdown.css";

export interface DropdownOption {
  value: string;
  title: string;
}

export interface DropdownProps {
  dropdownName: string;
  dropdownId: string;
  options: DropdownOption[];
}

const Dropdown = ({ dropdownName, dropdownId, options }: DropdownProps) => {
  return (
    <select name={dropdownName} id={dropdownId}>
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
