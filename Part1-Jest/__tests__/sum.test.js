test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

const sum = require('../assets/scripts/sum');
test('adds 1 + 2 to equal 3 function', () => {
    expect(sum(1,2)).toBe(3);
});

const formatVolumeIconPath = require('../assets/scripts/main');
describe('testing formatVolumeIconPath', () => {
    test('volume level 3', () => {
        expect(formatVolumeIconPath(100)).toMatch(new RegExp('volume-level-3.svg'));
    });

    test('volume level 2', () => {
        expect(formatVolumeIconPath(66)).toMatch(new RegExp('volume-level-2.svg'));
    });

    test('volume level 1', () => {
        expect(formatVolumeIconPath(33)).toMatch(new RegExp('volume-level-1.svg'));
    });

    test('volume level 0', () => {
        expect(formatVolumeIconPath(0)).toMatch(new RegExp('volume-level-1.svg'));
    });
});