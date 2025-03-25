"use client";
import PrivateRoute from "../routes/PrivateRoute";
import { Editor } from "./components/Editor";
import { Sidebar } from "./components/Sidebar";

const page = () => {
  return (
    <PrivateRoute>
      <div className="flex">
        <h3>Hello world</h3>
        <Sidebar />
        <Editor />
      </div>
    </PrivateRoute>
  );
};
export default page;
