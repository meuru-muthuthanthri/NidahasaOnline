import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from '../module/songList';
import SongPage from '../module/songPage';
import SongEditor from '../module/songEditor';
import PinnedSongs from '../module/pinnedSongs';
import CategoryView from '../module/categoryView';
import { SONG_EDITOR, SONG_PAGE, HOME_SCREEN, PINNED_SONG, CATEGORIES } from '../module/Constants';
import Header from '../module/tabView';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function Routes() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Header>
        <Switch>
          <Route path={HOME_SCREEN} exact component={SongList} />
          <Route path={SONG_PAGE} component={SongPage} />
          <Route path={SONG_EDITOR} component={SongEditor} />
          <Route path={PINNED_SONG} component={PinnedSongs} />
          <Route path={CATEGORIES} component={CategoryView} />
          <Route component={SongList} />
        </Switch>
      </Header>
    </ThemeProvider>
  );
}
