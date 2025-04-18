// /app/(builder)/builder/page.jsx

import CanvasArea from "./components/CanvasArea";

export default function BuilderPage() {
  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      <div className="bg-white p-4 rounded shadow col-span-2">Tools Sidebar</div>
      <div className="bg-white p-4 rounded shadow col-span-7">
        <CanvasArea />
      </div>
      <div className="bg-white p-4 rounded shadow col-span-3">Properties Panel</div>
    </div>
  );
}
