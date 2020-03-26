import React from 'react';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { renderSong, getTags } from '../../Logic/ChordsManager';
import { read } from '../../repository/SongReader';
const song = read();

export default class View extends React.Component {
  componentDidMount() {
    getTags(song).forEach(val => {
      const chordElement = document.getElementById(`ch_${val}`);
      if (chordElement) {
        chordElement.style.left = `${document.getElementById(val).offsetLeft}px`;
      }
    });
  }

  render() {
    // const { count } = this.props;
    return (
      <div>
        <h1>{'count'}</h1>
        <div className="songPageHeader"><Switch /></div>
        <div className="songSection">
        {renderSong(song)}
        </div>
      </div>
    );
  }
}
