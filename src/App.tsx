import React from 'react';
import PhotoAlbumComponent from './PhotoAlbum';
import Slider from './Slider';

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = React.useState<number>(0);
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <div>
      <h1>Week mood {week[sliderValue]}</h1>
      <Slider min={0} max={6} initialValue={0} onChange={() => setSliderValue(sliderValue/1-1)} />
      <PhotoAlbumComponent index={sliderValue} />
    </div>
  );
};

export default App;