"use client";
import PrivateRoute from "../routes/PrivateRoute";
import { Editor } from "./components/Editor";
import { Sidebar } from "./components/Sidebar";

const page = () => {
  return (
    <PrivateRoute>
      <div className="flex">
        <Sidebar />
        <Editor />
      </div>
    </PrivateRoute>
  );
};
export default page;
