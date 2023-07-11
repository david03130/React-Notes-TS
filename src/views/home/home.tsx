import "./home.css";

import React, { useEffect, useState } from "react";
import NoteCalls from "../../services/note-calls";
import { Notes } from "../../components/notes";
import { MainMenu } from "../../layout/main-menu";
import { type Note } from "../../components/note";
import { NoteDetails } from "../../components/note-details";

const defaultNote: Note = {
  id: 0,
  title: "",
  content: "",
  important: false,
};

const Home = (): JSX.Element => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteToShow, setNoteToShow] = useState(defaultNote);
  const [noteDetailsVisibility, setNoteDetailsVisibility] = useState(false);

  const getNotes = () => {
    NoteCalls.getAll().then((response) => {
      console.log("Promise fulfilled.");
      setNotes(response);
    });
  };
  useEffect(getNotes, []);

  const openNoteDetails = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    newNoteToShow: Note
  ) => {
    e.preventDefault();
    setNoteToShow(newNoteToShow);
    setNoteDetailsVisibility(true);
  };

  const closeNoteDetails = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setNoteDetailsVisibility(false);
  };

  return (
    <div className="home">
      <MainMenu />
      <Notes notes={notes} noteDetailsEvent={openNoteDetails} />
      <NoteDetails
        modalVisibility={noteDetailsVisibility}
        handleClose={closeNoteDetails}
        note={noteToShow}
      />
    </div>
  );
};

export default Home;
