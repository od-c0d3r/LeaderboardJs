/**
 * @jest-environment jsdom
 */

import * as Display from '../../src/modules/display.js';

describe("Unit Testing", () => {
    describe('Display Module', () => {
        let testArrayObjs = [
            { user: 'test1', score: 100 },
            { user: 'test2', score: 101 },
            { user: 'test3', score: 102 },
        ];
        let testObj = testArrayObjs[0];
        document.body.innerHTML = `<table id='table'></table>`;

        test('getElementWith returns a node element', () => {
            let expected = document.getElementById('table');

            let result = Display.getElementWith('table');

            expect(result).toEqual(expected);
            expect(result.id).toEqual('table');
            expect(typeof result).toEqual('object');
        });
        test('createElementWith returns a node element', () => {
            let expected = document.createElement('div');

            let result = Display.createElementWith('div');

            expect(result).toEqual(expected);
            expect(typeof result).toEqual('object');
        });
        test('htmlScore returns an html string filled with input data', () => {
            let expected = `<td>test1</td><td>100</td>`

            let result = Display.htmlScore(testObj);

            expect(result).toEqual(expected);
        });
        test('updateTable adds new row of input object', () => {
            Display.updateTable(testObj);
            let result = Display.getElementWith('table');

            expect(result.innerHTML).toContain('test');
            expect(result.innerHTML).toContain('100');
        });
        test('showData fills the table with input array of objects', () => {
            Display.showData(testArrayObjs);
            let result = Display.getElementWith('table');
            
            expect(result.innerHTML).toContain('test1');
            expect(result.innerHTML).toContain('test2');
            expect(result.innerHTML).toContain('test3');
        });
    })
});