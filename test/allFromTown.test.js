import assert from "assert";
import allFromTown from "../allFromTown.js";

var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');

describe('The allFromTown function', function(){
    it('should put the registration numbers with CJ inside an array when called with CJ 124,CY 567,CL 345, CJ 456,CL 341 ', function(){
        assert.deepEqual(fromStellies, ['CJ 456']);
    });
   
    it('It should return empty array when called CF', function(){
        assert.deepEqual(fromKuilsriver, []);
    });

});