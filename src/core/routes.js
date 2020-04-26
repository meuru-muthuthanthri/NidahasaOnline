import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from '../module/songList';
import SongPage from '../module/songPage';
import SongEditor from '../module/songEditor';
import { SONG_EDITOR, SONG_PAGE, HOME_SCREEN } from '../module/Constants';
import Header from '../module/tabView';

export default function Routes() {
  return (
    <Header>
      <Switch>
        <Route path={HOME_SCREEN} exact component={SongList} />
        <Route path={SONG_PAGE} component={SongPage} />
        <Route path={SONG_EDITOR} component={SongEditor} />
        <Route component={SongList} />
      </Switch>
    </Header>
  );
}
