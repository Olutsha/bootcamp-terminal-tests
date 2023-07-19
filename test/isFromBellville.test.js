import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('The isFromBellville function', function(){

    

    it('This should return true when called with a name that starts with CY correctly', function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('This should return false when called with a name that do not starts with CY correctly', function(){
        assert.equal(isFromBellville('CJ 123'), false);

    });
});