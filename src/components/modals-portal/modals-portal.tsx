import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { hideNoteDetails } from "../../store/reducers/note-details-slice";
import { hideNoteForm } from "../../store/reducers/note-form-slice";
import { ReactPortal } from "../common/react-portal";
import { NoteDetails } from "../note-details";
import { NoteForm } from "../note-form";

const ModalsPortal = () => {
  const noteForm = useAppSelector((state) => state.noteFormModal);
  const noteDetails = useAppSelector((state) => state.noteDetailsModal);
  const dispatch = useAppDispatch();
  return (
    <div>
      <ReactPortal wrapperId="portal-root">
        <NoteForm
          modalVisibility={noteForm.visibility}
          handleClose={(e) => {
            e.preventDefault();
            dispatch(hideNoteForm());
          }}
          noteData={noteForm.noteData}
        />
        <NoteDetails
          modalVisibility={noteDetails.visibility}
          handleClose={(e) => {
            e.preventDefault();
            dispatch(hideNoteDetails());
          }}
          note={noteDetails.noteData}
        />
      </ReactPortal>
    </div>
  );
};

export default ModalsPortal;
