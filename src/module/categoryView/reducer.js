import { Map } from 'immutable';

const originalCategories = [
  { name: 'මනස්ථාපනයේ ගී', order: 1, id: 'rep' },
  { name: 'මෙනෙහි කිරීමේ ගී', order: 2, id: 'med' },
  { name: 'බලය අයැදීමේ ගී', order: 3, id: 'pow' },
  { name: 'දේව සුරක්ෂිතභවයේ ගී', order: 4, id: 'pro' },
  { name: 'අයිතිය දීමේ ගී', order: 5, id: 'sur' },
  { name: 'ප්‍රශංසාවේ ගී', order: 6, id: 'pra' },
  { name: 'නමස්කාරයේ ගී', order: 7, id: 'wor' },
  { name: 'දේව ආදරයේ ගී', order: 8, id: 'lov' },
  { name: 'ශුද්ධාත්ම ගී', order: 9, id: 'spi' },
  { name: 'සුවයේ ගී', order: 10, id: 'hea' },
  { name: 'දිව්‍ය සත්ප්‍රසාදීය ගී', order: 11, id: 'euc' },
  { name: 'දිව්‍ය යාගයන්හි ගැයෙන ගී', order: 12, id: 'mas' },
  { name: 'දෙව් මවුන්ට ගී', order: 13, id: 'mar' },
  { name: 'කැඳවීම පිළිබඳ ගී', order: 14, id: 'voc' },
  { name: 'Action Songs', order: 15, id: 'act' },
  { name: 'Jesus Youth Hymns', order: 15, id: 'jys' },
];

const initialState = Map({
  categories: originalCategories,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case Events.songEditor.NAVIGATE:
    //   return state.set('song', '').set('title', null);
    default:
      return state;
  }
};

export default reducer;
