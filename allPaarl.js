export default function allPaarl(regNo){
    var reg = regNo.split(",");
    var allPaarl = [];
    for(let i = 0;i<reg.length;i++){
      let fromPaarl=reg[i].trim();
      if(fromPaarl.startsWith("CJ")){
        allPaarl.push(fromPaarl);
      }
    }
   return allPaarl;
   }