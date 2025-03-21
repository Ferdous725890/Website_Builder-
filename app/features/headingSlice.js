import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from "uuid";
const initialState = {
  headings: [],
  selectedHeadingId: null,
};
export const headingSlice = createSlice({
  name: "heading",
  initialState,
  reducers: {
    addHeading: (state, action) => {
      const newHeading = {
        id: uuidV4(),
        text: "heading",
      };
      state.headings.push(newHeading);
    },
    selectHeading: (state, action) => {
      state.selectedHeadingId = action.payload;
    },
    updateHeading: (state, action) => {
      const { id, text } = action.payload;
      const heading = state.headings.find((h) => h.id === id);
      if (heading) {
        heading.text = text;
      }
    },
  },
});

export const { addHeading, selectHeading, updateHeading } =
  headingSlice.actions;
export default headingSlice.reducer;
