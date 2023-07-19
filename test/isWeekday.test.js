import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('The isWeekday function', function(){

    it('The funcrion should return false', function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it('The funcrion should return false', function(){
        assert.equal(isWeekday('Sunday'), false);
    });
    it('The funcrion should return true', function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('The funcrion should return true', function(){
        assert.equal(isWeekday('Tuesday'), true);
    });
    it('The funcrion should return true', function(){
        assert.equal(isWeekday('Wednesday'), true);
    });
    it('The funcrion should return true', function(){
        assert.equal(isWeekday('Thursday'), true);
    });
    it('The funcrion should return true', function(){
        assert.equal(isWeekday('Friday'), true);
    });
});