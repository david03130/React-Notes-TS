import "./notes.css";

import React from "react";
import Note from "../Note/note";

const Notes = (): JSX.Element => {
  return (
    <div className="notes">
      <Note
        title="My first note!"
        content="This is my very first note in my new notes application!"
        important={false}
      />
      <Note
        title="TypeScript is great"
        content="I've been learning TypeScript for the past month and I really like it! I'm excited to keep making more projects with it."
        important={false}
      />
    </div>
  );
};

export default Notes;
