import {
  headingSlice,
  selectHeading,
  updateHeading,
} from "@/app/features/headingSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Editor = () => {
  const [editingHeadingId, setEditingHeadingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const dispatch = useDispatch();

  const selectedHeadingId = useSelector(
    (state) => state.headingReducer.selectedHeadingId
  );
  const headings = useSelector((state) => state.headingReducer.headings);

  const handleDoubleClick = (id, text) => {
    setEditingHeadingId(id);
    setEditingText(text);
  };

  const handleBlur = (id) => {
    dispatch(updateHeading({ id, text: editingText }));
    setEditingHeadingId(null);
  };
  return (
    <div className="w-2/3">
      Editor
      <div className="editor">
        {headings.map((heading) => (
          <div key={heading.id}>
            {/* {editingHeadingId === heading.id ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                onBlur={() => handleBlur(heading.id)}
                // onKeyDown={(e) => e.key === "Enter" && handleBlur(heading.id)}
                autoFocus
                className="text-3xl font-bold border outline-none border-blue-500 w-full block"
              />
            ) : ( */}
            <h1
              onClick={() => dispatch(selectHeading(heading.id))}
              onDoubleClick={() => handleDoubleClick(heading.id, heading.text)}
              onKeyDown={(e) => console.log(e.key)}
              contentEditable="true"
              className="text-3xl font-bold outline-none border border-gray-300"
            >
              {heading.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
