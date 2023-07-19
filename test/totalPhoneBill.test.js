import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";
describe('The totalPhoneBill function', function(){ 

    it('This should return R7.45 when called with call, sms, call, sms, sms ', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('This should return R7.45 when called with call, sms', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('This should return R7.45 when called with sms, sms ', function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});