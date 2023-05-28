// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// testing isPhoneNumber function
test('phone number with ten numbers', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('phone numbers with parentheses', () => {
    expect(functions.isPhoneNumber('(555)-456-7890')).toBe(true);
});
test('phone number with too little numbers', () => {
    expect(functions.isPhoneNumber('7890')).toBe(false);
});
test('phone number with too many numbers', () => {
    expect(functions.isPhoneNumber('5554567891891081')).toBe(false);
});

// testing isEmail function
test('email with @ and .<string>', () => {
    expect(functions.isEmail('jtanurdjaja@ucsd.edu')).toBe(true);
});
test('email with underscores', () => {
    expect(functions.isEmail('j_tan@ucsd.edu')).toBe(true);
});
test('no email input', () => {
    expect(functions.isEmail('')).toBe(false);
});
test('email missing @', () => {
    expect(functions.isEmail('jtanurdjaja.com')).toBe(false);
});

// testing isStrongPassword function
test('password that is longer than 3 characters', () => {
    expect(functions.isStrongPassword('abcde')).toBe(true);
});
test('password that contains numbers and underscores', () => {
    expect(functions.isStrongPassword('j_tan123')).toBe(true);
});
test('password starting with underscore', () => {
    expect(functions.isStrongPassword('_hhh')).toBe(false);
});
test('password only containing numbers', () => {
    expect(functions.isStrongPassword('1234')).toBe(false);
});

// testing isDate function
test('Date using forward slashes', () => {
    expect(functions.isDate('03/02/2021')).toBe(true);
});
test('Date with month and day as single numbers', () => {
    expect(functions.isDate('2/5/2023')).toBe(true);
});
test('Date using dashes', () => {
    expect(functions.isDate('03-02-2021')).toBe(false);
});
test('Date with year as two digits', () => {
    expect(functions.isDate('03/02/21')).toBe(false);
});

// testing isHexColor function
test('Hex color starts # and numbers', () => {
    expect(functions.isHexColor('#A12')).toBe(true);
});
test('Hex color with less than 5 characters', () => {
    expect(functions.isHexColor('#ABC')).toBe(true);
});
test('Hex color with letters out of range', () => {
    expect(functions.isHexColor('KKKKKK')).toBe(false);
});
test('Hex color with more than 6 characters', () => {
    expect(functions.isHexColor('ABBBBBB')).toBe(false);
});