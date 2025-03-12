import React from "react";
import AppsWindow from "./Windows/AppsWindow";
import AboutWindow from "./Windows/AboutWindow";
import CoursesWindow from "./Windows/CoursesWindow";



import Welcome from "./Welcome";

function AppsList() {
  return (
    <div className="appswindow">

    
      <AppsWindow/>
      <AboutWindow />
      <CoursesWindow/>
      <Welcome />
    </div>
  );
}

export default AppsList;
