import { expect } from 'chai';
import { renderLine } from '../ChordsManager';

describe('transform', () => {
  it('Should renderLine line without chords', () => {
    const line = 'Hello [A]how are [B]you';
    // expect(renderLine(line, 'ab')).to.equal(
    //   '<div className="chordsLine">' +
    //   '<span className="chords" id="ch_ab0">A</span><span className="chords" id="ch_ab1">B</span>' +
    //   '</div>' +
    //   '<span className="lyrics">' +
    //   'Hello <span id="ab0"/>how are <span id="ab1"/>you' +
    //   '</span>',
    // );
  });
});
