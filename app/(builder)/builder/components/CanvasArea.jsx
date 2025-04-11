"use client";
import { componentList } from "../utils/componentData";
import ComponentRenderer from "./ComponentRenderer";

export default function CanvasArea() {
  return (
    <div className="p-4 bg-gray-100 min-h-[400px] rounded-lg">
      {componentList.map((component) => (
        <div key={component.id} className="mb-4">
          <ComponentRenderer component={component} />
        </div>
      ))}
    </div>
  );
}
