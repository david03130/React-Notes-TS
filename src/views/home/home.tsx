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
  // const [noteToShow, setNoteToShow] = useState(defaultNote);
  // const [noteDetailsVisibility, setNoteDetailsVisibility] = useState(false);

  // TODO: Aquí hay cosas que hay que quitar.

  // NoteCalls.create({
  //   id: 2,
  //   title: "Otro VSCode",
  //   content: "Otro test desde VSCode",
  //   important: true,
  // }).then(() => console.log("Note created"));

  // const openNoteDetails = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //   newNoteToShow: Note
  // ) => {
  //   e.preventDefault();
  //   setNoteToShow(newNoteToShow);
  //   setNoteDetailsVisibility(true);
  // };

  // const closeNoteDetails = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   setNoteDetailsVisibility(false);
  // };

  return (
    <div className="home">
      <MainMenu />
      <Notes />
      {/* <NoteDetails
        modalVisibility={noteDetailsVisibility}
        handleClose={closeNoteDetails}
        note={noteToShow}
      /> */}
    </div>
  );
};

export default Home;
