import assert from "assert";
import allPaarl from "../allPaarl.js";
var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

var regNumbersForPaarl = allPaarl(regNumbers);

describe('The allPaarl function', function(){ 

    it('This should return There are 2 Paarl reg numbers, when called with CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864', function(){
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
    });
    it('This should return There are 0 Paarl reg numbers, when called with CL 900, CJ 678 543', function(){
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
    });
    it('This should return There are 1 Paarl reg numbers, when called with   CJ 67890', function(){
        assert.equal('CJ 67890', regNumbersForPaarl[1]);

    });
});