// import React from 'react'

// const Notification = () => {
//   return (
//     <div className='shadow-sm border border-gray-200 rounded-xl mt-5'>
//       <h2 className='text-2xl font-semibold relative p-4 pb-0'>Notification <span className='bg-red-500 rounded-full px-2 py-1 absolute text-white text-sm ml-1'>4</span></h2>
//       <div className="divider"></div>

//     </div>
//   )
// }

// export default Notification

// components/NotificationCard.jsx
import React from "react";
import { Bell, CheckCircle, Info, XCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Welcome!",
    message: "Thanks for joining the dashboard.",
    type: "success",
    time: "2 minutes ago",
    read: false,
  },
  {
    id: 4,
    title: "Welcome!",
    message: "Thanks for joining the dashboard.",
    type: "success",
    time: "2 minutes ago",
    read: false,
  },
  {
    id: 2,
    title: "Update Available",
    message: "New version of the app is available.",
    type: "info",
    time: "10 minutes ago",
    read: true,
  },
  {
    id: 3,
    title: "Server Down",
    message: "The backup server is currently offline.",
    type: "error",
    time: "1 hour ago",
    read: false,
  },
];

const getIcon = (type) => {
  if (type === "success") return <CheckCircle className="text-green-500" />;
  if (type === "info") return <Info className="text-blue-500" />;
  if (type === "error") return <XCircle className="text-red-500" />;
  return <Bell />;
};

const Notification = () => {
  return (
    <div className="shadow-sm border border-gray-200 rounded-xl mt-5">
   <h2 className='text-2xl font-semibold relative p-4 pb-0'>Notification <span className='bg-red-500 rounded-full px-2 py-1 absolute text-white text-sm ml-1'>4</span></h2>
   <div className="divider"></div>
      <div className="space-y-3 max-h-80 overflow-y-auto px-4 pb-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className={`flex items-start gap-3 p-3 rounded-xl border ${
              note.read ? "bg-gray-50" : "bg-yellow-50"
            }`}
          >
            <div className="mt-1">{getIcon(note.type)}</div>
            <div>
              <h3 className="font-semibold">{note.title}</h3>
              <p className="text-sm text-gray-600">{note.message}</p>
              <p className="text-xs text-gray-400 mt-1">{note.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
