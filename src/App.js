// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AssignmentCard from "./components/AssignmentCard";

const assignments = [
  {
    title: "Assignment. : Python Matplotlib",
    date: "6 May, 2025 at 1:45 PM",
    type: "Practice",
    status: "",
    subject: "Coding",
  },
  {
    title: "Assignment : Multivariate Calculus set -1",
    date: "5 May, 2025 at 10:30 PM",
    due: "12 May, 2025 - 11:59 PM",
    type: "Assignment",
    status: "Over Due",
    subject: "Maths",
  },
  {
    title: "DLC : Python Matplotlib",
    date: "5 May, 2025 at 10:00 PM",
    type: "Practice",
    subject: "Coding",
  },
  {
    title: "Assignment : Python Pandas",
    date: "4 May, 2025 at 6:00 PM",
    type: "Practice",
    status: "Over Due",
    subject: "Coding",
  },
  {
    title: "DLC : DS Faculty lecture 10 - Multivariate Calculus 2",
    date: "2 May, 2025 at 10:00 PM",
    type: "Practice",
    subject: "Maths",
  },
];

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <div className="p-4 space-y-4">
          {assignments.map((item, index) => (
            <AssignmentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
