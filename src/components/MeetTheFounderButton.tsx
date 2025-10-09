import React from "react";
import { Link } from "react-router-dom";

const MeetTheFounderButton: React.FC = () => {
  return (
    <Link
      to="/founder"
      className="inline-block rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      Meet the Founder
    </Link>
  );
};

export default MeetTheFounderButton;
