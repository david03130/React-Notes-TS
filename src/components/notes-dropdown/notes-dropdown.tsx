import Dropdown, { DropdownOption } from "../common/dropdown";

const NotesDropdown = () => {
  const dropdownOptions: DropdownOption[] = [
    { value: "not-important", title: "Not important" },
    { value: "important", title: "Important" },
  ];
  return (
    <Dropdown
      dropdownName="notes_importance"
      dropdownId="notes_importance"
      options={dropdownOptions}
    />
  );
};

export default NotesDropdown;
