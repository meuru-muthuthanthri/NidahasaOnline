import React from 'react';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { renderSong, getTags } from '../../Logic/ChordsManager';
import { read } from '../../repository/SongReader';
const song = read();

const postionChords = () => {
  getTags(song).forEach(val => {
    const chordElement = document.getElementById(`ch_${val}`);
    if (chordElement) {
      chordElement.style.left = `${document.getElementById(val).offsetLeft}px`;
    }
  });
}

export default class View extends React.Component {
  componentDidMount() {
    postionChords();
  }

  componentDidUpdate() {
    postionChords();
  }

  render() {
    const { showChords, onShowChordToggle } = this.props;
    return (
      <div>
        <div className="songPageHeader">
          <FormControlLabel
          control={<Switch checked={showChords} onChange={onShowChordToggle}/>}
          label="Show Chords" />
        </div>
        <div className="songSection">
        {renderSong(song, showChords)}
        </div>
      </div>
    );
  }
}
