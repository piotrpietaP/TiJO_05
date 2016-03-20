describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {

    });

    xdescribe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });

    xdescribe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });

    describe('generateMessage', function(){

        it('should get a true number', function() {
            expect(app.generateMessage('a')).toEqual({vowel : 1, palindrome : true});
        });
        it('should get a true number', function() {
            expect(app.generateMessage('d')).toEqual({vowel : 0, palindrome : true});
        });
        it('should get a real number', function() {
            expect(app.generateMessage('a5a')).toEqual({vowel : 2, palindrome : true});

        });
        it('should geta a real number', function() {
            expect(app.generateMessage('101')).toEqual({vowel : 0, palindrome : true});
        });

        it('should get a false palindromes value', function() {
            expect(app.generateMessage('123abc')).toEqual({vowel : 1, palindrome : false});
        });

        it('should get a false palindromes value', function() {
            expect(app.generateMessage('123ccc')).toEqual({vowel : 0, palindrome : false});
        });


    })
});



