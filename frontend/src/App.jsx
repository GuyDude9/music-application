import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled'
import Repeat from '@material-ui/icons/Repeat'
import Shuffle from '@material-ui/icons/Shuffle'
import SkipNext from '@material-ui/icons/SkipNext'
import SkipPrevious from '@material-ui/icons/SkipPrevious'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled'
import "./App.css"
import React, {useState} from 'react'
import { audios } from './audioData';


export default function App(){
  return SoundBox();
}

function SoundBox(){
  return(
    <div className = "sound-box">
    <Image />
    <SongInformation />
    <CurrentTimeIndicator />
    <MediaControls />
  </div>
  )
}

function Image(){
  return(
    <div className = "skip-media">
      <SkipPreviousSong />
      <img className = "music-image" src="https://www.nme.com/wp-content/uploads/2016/09/62_radiohead-1.jpg" alt="Album Cover" />
      <SkipNextSong />
    </div>
  );
}

function SkipNextSong(){

  const handleClick = () =>{
    
  }

  return(
    <div className = "skip-next" onClick={handleClick}>
      <SkipNext style = {{fontSize: '5rem'}}/>
    </div>
  );
}

function SkipPreviousSong(){
  return(
    <div className = "skip-previous">
      <SkipPrevious style = {{fontSize: '5rem'}}/>
    </div>
  );
}

function SongInformation(){
  return <>
    <div className = "song-info">
      <h4>In Rainbows</h4>
      <h4>Radiohead</h4>
    </div>
  </>

}

function CurrentTimeIndicator(){
  return(
    <hr />
  );

  //how to make a currentimeindicator in javascript
}

function MediaControls() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="media-control">
      <div className="shuffle-control">
        <Shuffle style={{ fontSize: '3.5rem' }} />
      </div>


      {isPlaying ? (
        <div className="pause-play-control">
          <PauseCircleFilled
            onClick={togglePlay}
            style={{ fontSize: '7rem' }}
          />
        </div>
      ) : (
        <div className="pause-play-control">
          <PlayCircleFilled
            onClick={togglePlay}
            style={{ fontSize: '7rem' }}
          />
        </div>
      )}


      <div className="replay-control">
        <Repeat style={{ fontSize: '3.5rem' }} />
      </div>
    </div>
  );
}
