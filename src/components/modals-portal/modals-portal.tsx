import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { hideNote } from "../../store/reducers/note-form-slice";
import { ReactPortal } from "../common/react-portal";
import { NoteForm } from "../note-form";

const ModalsPortal = () => {
  const noteForm = useAppSelector((state) => state.noteFormModal);
  const dispatch = useAppDispatch();
  return (
    <div>
      <ReactPortal wrapperId="portal-root">
        <NoteForm
          modalVisibility={noteForm.visibility}
          handleClose={(e) => {
            e.preventDefault();
            dispatch(hideNote());
          }}
        />
      </ReactPortal>
    </div>
  );
};

export default ModalsPortal;
