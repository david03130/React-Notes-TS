import "./notes-dropdown.css";
import Dropdown, { DropdownOption } from "../common/dropdown";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { NotesToShow, setNotesToShow } from "../../store/reducers/notes-slice";

const NotesDropdown = () => {
  const dispatch = useAppDispatch();

  const changeEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setNotesToShow(e.target.value as NotesToShow));
  };
  const dropdownOptions: DropdownOption[] = [
    { value: "all", title: "All" },
    { value: "important", title: "Only Important" },
  ];
  return (
    <Dropdown
      className="notes-dropdown"
      dropdownName="notes_importance"
      dropdownId="notes_importance"
      options={dropdownOptions}
      changeEvent={changeEvent}
    />
  );
};

export default NotesDropdown;
