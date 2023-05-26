// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
const sum = require("../code-to-unit-test/sum");
const {isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor} = require("../code-to-unit-test/unit-test-me");

// TODO - Part 2
test('shorter phoneNumber', () => {
    expect(isPhoneNumber("123")).toBe(false);
});
test('longer phoneNumber', () => {
    expect(isPhoneNumber("12345678901011")).toBe(false);
});
test('unary phoneNumber', () => {
    expect(isPhoneNumber("111-111-1111")).toBe(true);
});
test('normal phoneNumber', () => {
    expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('no@ email', () => {
    expect(isEmail("123.com")).toBe(false);
});
test('no. email', () => {
    expect(isEmail("123@com")).toBe(false);
});
test('short email', () => {
    expect(isEmail("a@b.com")).toBe(true);
});
test('normal email', () => {
    expect(isEmail("123@abc.com")).toBe(true);
});

test('first no letter pw', () => {
    expect(isStrongPassword("123456")).toBe(false);
});
test('length less than 4 pw', () => {
    expect(isStrongPassword("123")).toBe(false);
});
test('only 1 letter pw', () => {
    expect(isStrongPassword("a123456")).toBe(true);
});
test('has udrScr pw', () => {
    expect(isStrongPassword("a_____")).toBe(true);
});

test('longer monthLength date', () => {
    expect(isDate("1/111/1111")).toBe(false);
});
test('longer dayLength date', () => {
    expect(isDate("111/11/1111")).toBe(false);
});
test('day length=1 date', () => {
    expect(isDate("1/11/1111")).toBe(true);
});
test('day length=2 date', () => {
    expect(isDate("11/11/1111")).toBe(true);
});

test('length < 3 hexCode', () => {
    expect(isHexColor("#f")).toBe(false);
});
test('day length>6 hexCode', () => {
    expect(isHexColor("#f111111")).toBe(false);
});
test('day length=3 hexCode', () => {
    expect(isHexColor("#f0f")).toBe(true);
});
test('day length=6 hexCode', () => {
    expect(isHexColor("#bb5588")).toBe(true);
});