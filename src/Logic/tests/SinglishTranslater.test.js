import { translate } from '../SinglishTranslator';

describe('Singlish Translater', () => {
  it('translate', () => {
    const result = translate('mage nama miyuru bhaashaNa mututantrii');
    expect(result).toBe('මගෙ නම මියුරු භාෂණ මුතුතන්ත්‍රී');
  });
});
