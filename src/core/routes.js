import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from '../module/songList';
import SongPage from '../module/songPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SongList} />
      <Route path="/page" component={SongPage} />
      <Route component={SongList} />
    </Switch>
  );
}
