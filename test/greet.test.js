import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){
        assert.equal('Hello, Karen', greet('Karen'));
    });
    it('should greet Olutsha correctly', function(){
        assert.equal('Hello, Olutsha', greet('Olutsha'));
    });
    it('should greet Okwenene correctly', function(){
        assert.equal('Hello, Okwenene', greet('Okwenene'));
    });
});