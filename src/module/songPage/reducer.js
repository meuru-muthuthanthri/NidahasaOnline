import { Map } from 'immutable';
import { Events } from '../Actions';

const initialState = Map({
  showChords: true,
  title: '',
  song: `[G] අහස් කු[C]සට වඩා [D] පොළෝ තල[D]යට වඩා
ඔබේ ම[C]හිමට මුළු [D]ලොවටම වඩා උ[G]තුම්
රජුන්ගෙ [Em]රජිඳුන් ඔබමයි මාගේ ස්වා[C]මී [Bm]
[Am]විශ්වයේ මුළු පොළොවේ අග රජි[D]ඳුන්

[G] අහස් කු[C]සට වඩා [D] පොළෝ තල[D]යට වඩා
ඔබේ ම[C]හිමට මුළු [D]ලොවටම වඩා උ[G]තුම්
රජුන්ගෙ [Em]රජිඳුන් ඔබමයි මාගේ ස්වා[C]මී [Bm]
[Am]විශ්වයේ මුළු පොළොවේ අග රජි[B]ඳුන්

කු[G]රූසි[C]යේ පණ [D]පිදුවේ අප සමි[G]ඳුන්
ඔබෙ ආද[Am]රේ ලොව[D]ටම ගැළවුම වූ[G]වා
රෝස ම[Em]ලක් පය යට පාගා දැමු[C]වා [Bm]සේ
මා ගැන සිතු[Am]වා ඔබ ජේසු[C]නී [D] ඔබෙ පණට ව[G]ඩා
`,
});

const reducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case 'SHOW_CHORD_TOGGLED':
      return state.set('showChords', !state.get('showChords'));
    case Events.songList.NAVIGATED_TO_SONG:
      return state.set('song', payload.song).set('title', payload.title);
    default:
      return state;
  }
};

export default reducer;
