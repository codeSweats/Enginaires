const { test, expect } = require('@jest/globals');
const { getMaxListeners } = require('node:process');
const Employee = require('../lib/Employee');

test('Could instantiate Employee instance', () => {
    const emp = new Employee();
    expect(typeOf(emp)).toBe("object");
});

test('Could set name by our constructor arguments', () => {
    const name = "Sean";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test('Could get name via getName method', () => {
    const name = "Francis";
    const emp = new Employee(name);
    expect(emp.name()).toBe(name);
})

test('Set ID by a constructor', () => {
    const id = 45;
    const emp = new Employee('Francis', id);
    expect(emp.id).toBe(id);
});

test('Could get id via getId method', () => {
    const id = 32;
    const emp = new Employee('Tiffany', id);
    expect(emp.getId()).toBe(id);
});

test('Could get email via getEmail method', () => {
    const email = "seanlfrancis@gmail.com";
    const emp = new Employee('Kayla', 33, email);
    expect(emp.getEmail()).toBe(email);
});

test('Could get role via getRole method', () => {
    const getRole = "Employee";
    const emp = new Employee('Kayla', 33, "here@b.com");
    expect(emp.getRole()).toBe(getRole);
});