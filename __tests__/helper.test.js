const {format_date, format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('returns plural or singular', () => {
    const word = 'Tiger'
    const amount = 1
    const amount2 = 2

    expect(format_plural(word, amount)).toBe('Tiger');
    expect(format_plural(word, amount2)).toBe('Tigers');
})