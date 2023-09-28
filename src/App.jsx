import React from "react";
import Video from "./components/Video";
import Slider from "./components/Slider";
import SubmitButton from "./components/SubmitButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-md p-4">
        <Video />
        <Slider />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
