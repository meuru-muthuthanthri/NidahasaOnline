import React from 'react';
import { renderSong, getTags } from '../../../Logic/ChordsManager';

const positionChords = (song) => {
  getTags(song).forEach(val => {
    const chordElement = document.getElementById(`ch_${val}`);
    if (chordElement) {
      chordElement.style.left = `${document.getElementById(val).offsetLeft}px`;
    }
  });
};


export default class SongView extends React.Component {
  componentDidMount() {
    const { currentSong } = this.props;
    positionChords(currentSong);
  }

  componentDidUpdate() {
    const { currentSong } = this.props;
    positionChords(currentSong);
  }

  render() {
    const { showChords, currentSong, lyricsSize, chordSize, chord, originalChord } = this.props;
    const params = { showChords, lyricsSize, chordSize, key: originalChord, newKey: chord };
    return (
      <div className="songSection">
        { renderSong(currentSong, params) }
      </div>
    );
  }
}
