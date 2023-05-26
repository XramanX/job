import React from "react";
import Gallery from "./content/gallery/Gallery";
import Posts from "./content/posts/Posts";
import Profile from "./content/profile/Profile";
import ToDo from "./content/Todo/ToDo";
const RightContent = ({ selected }) => {
  switch (selected) {
    case "Profile":
      return <Profile selected={selected} />;
    case "Posts":
      return <Posts selected={selected} />;
    case "Gallery":
      return <Gallery selected={selected} />;
    case "ToDo":
      return <ToDo selected={selected} />;
    default:
      return null;
  }
};

export default RightContent;
