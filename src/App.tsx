import React from "react";
import PhotoAlbumComponent from "./PhotoAlbum";
import Slider from "./Slider";

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = React.useState<number>(0);
  const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);

  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const playSound = () => {
    if (audio) {
      audio.pause();
    }

    setAudio(new Audio(`test.mp3#t=00:00:0${sliderValue*2}`));

    if (audio) {
      audio.play();

      setTimeout(function () {
        audio.pause();
      }, 2000);
    }
  };

  return (
    <div>
      {sliderValue}
      <h1>Week mood {week[sliderValue]}</h1>
      <Slider
        min={0}
        max={6}
        initialValue={0}
        onChange={(value) => {
          setSliderValue(value);
          playSound();
        }}
      />
      <PhotoAlbumComponent index={sliderValue} />
    </div>
  );
};

export default App;
