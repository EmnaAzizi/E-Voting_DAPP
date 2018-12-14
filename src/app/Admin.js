export default class Admin  {
    constructor (ID) 
 { this.ID=ID 
     this.g1 =this.generateGerm(); 
 
 }
 
 /****************GENERATE GERME */
  
   
 generateGerm (){
   var BigInteger = require('bigi'); //npm install --save bigi@1.1.0
   var ecurve = require('ecurve') ;//npm install --save ecurve@1.0.0
   var Point = require('ecurve/lib/point.js')
   var EC = require('elliptic').ec;
   var ec = new EC('secp256k1');
   var ecparams = ecurve.getCurveByName('secp256k1');
  
 
   var key = ec.genKeyPair();
   var g = key.getPublic();
   var x1 = g.getX();
   var tx1= x1.toString('hex');
   var t2x1 = new Buffer(tx1, 'hex');
   var bx1= BigInteger.fromBuffer(t2x1);
   
   var y1 = g.getY();
   var ty1= y1.toString('hex');
   var t2y1 = new Buffer(ty1, 'hex');
   var by1= BigInteger.fromBuffer(t2y1);
   var pt = new Point(ecparams,bx1,by1,BigInteger.ONE);
   var bool = ecparams.isOnCurve(pt);
   if (bool == true)
   {return g;}
   
   else 
   {
       return generateGerm() ;}}
          
   
 /**************** FIN GENERATE GERME ***************************************/
 
   
 
     /*******************CALCUL PUBLIC KEY : RETURN point ********************************* */
     publicKey  () {
     var BigInteger = require('bigi'); //npm install --save bigi@1.1.0
     var ecurve = require('ecurve') ;//npm install --save ecurve@1.0.0
     var Point = require('ecurve/lib/point.js')
     var EC = require('elliptic').ec;
     var ec = new EC('secp256k1');
     var ecparams = ecurve.getCurveByName('secp256k1');
     var privateKey = new Buffer(this.ID.hexEncode(), 'hex');
     var curvePt = ecparams.G.multiply(BigInteger.fromBuffer(privateKey));// yehseb publicKey bi formule G*privateKey
 
     return curvePt 
   }
 
 
   /*********************************CALCUL (S.id) ******************************************************** */
   Secret(pass) {
  var BigInteger = require('bigi'); //npm install --save bigi@1.1.0
   var ecurve = require('ecurve') ;//npm install --save ecurve@1.0.0
   var Point = require('ecurve/lib/point.js')
   var EC = require('elliptic').ec;
   var ec = new EC('secp256k1');
       var pt=this.publicKey();
       var resu =pt.multiply(BigInteger.fromBuffer(pass.hexEncode())) ;
       var ResulFinal = resu.getEncoded(true);
     return  ResulFinal.toString('hex') ;
   }
 
 
     
   
   /************************************CALCUL OFFSET***************************************************** */
 
 Offset ()
 {var BigInteger = require('bigi'); //npm install --save bigi@1.1.0
 var ecurve = require('ecurve') ;//npm install --save ecurve@1.0.0
 var Point = require('ecurve/lib/point.js')
 var AES = require("crypto-js/aes");
 var SHA256 = require("crypto-js/sha256");
 var CryptoJS = require("crypto-js");
 var EC = require('elliptic').ec;
 var ec = new EC('secp256k1');
 var pubpt1 = this.g1; 
 console.log(this.g1+'interieur offset ****************************************')
   var t1x = pubpt1.getX().toString('hex');
   var t1y = pubpt1.getY().toString('hex');
   var c1x=new Buffer(t1x, 'hex');
   var c1y= new Buffer(t1y, 'hex');
   var ccc1 = Buffer.concat([new Buffer([0x04]), c1x, c1y]);
   var low = ccc1.toString('hex');
   var b36 = parseInt(low,16).toString(36);
   /******************************BINAIRE************************************* */
   function text2Binary(string) { // fonction qui convertit un string en binaire 
       var byte=""
       for (var i=0; i<string.length; i++) {
       
           byte+= string.charCodeAt(i).toString(2);}
           return byte}
  /******************************FIN BINAIRE********************* */       
 
   var low1 = text2Binary(b36); // le g1 en binaire
   
   //calcul de l'offset = H(g1) mod m
 var sh1 = CryptoJS.SHA256(low1); //hashage de g1 
 var offset = sh1.toString(CryptoJS.enc.Hex); //extraction 
 var yourNumber = parseInt(offset, 16);// conversion en decimal 
 var offsetfinal = ( parseInt(yourNumber).mod(6) ) ; // offset 
 return offsetfinal
 } 
   /************************************ FIN CALCUL OFFSET***************************************************** */
 
 /********************************CALCUL BN ********************* */
 
 
 calculBN  (pkey) {
   var BigInteger = require('bigi'); //npm install --save bigi@1.1.0
   var ecurve = require('ecurve') ;//npm install --save ecurve@1.0.0
   var Point = require('ecurve/lib/point.js')
   var AES = require("crypto-js/aes");
   var SHA256 = require("crypto-js/sha256");
   var CryptoJS = require("crypto-js");
   var EC = require('elliptic').ec;
   var ec = new EC('secp256k1');
   console.log(this.g1+'interieur bn ****************************************')
   var pubpt1 = this.g1; 
     var t1x = pubpt1.getX().toString('hex');
     var t1y = pubpt1.getY().toString('hex');
     var c1x=new Buffer(t1x, 'hex');
     var c1y= new Buffer(t1y, 'hex');
     var ccc1 = Buffer.concat([new Buffer([0x04]), c1x, c1y]);
     var low = ccc1.toString('hex');
     var b36 = parseInt(low,16).toString(36);
 
     /******************************TEXT 2 BINAIRE********************* */
 
 
     function text2Binary(string) { // fonction qui convertit un string en binaire 
         var byte=""
         for (var i=0; i<string.length; i++) {
         
             byte+= string.charCodeAt(i).toString(2);}
             return byte}
    /******************************FIN BINAIRE********************* */       
   
     var low1 = text2Binary(b36); // le g1 en binaire
     
   var encrypted = CryptoJS.AES.encrypt(low1,pkey);
   //var BN = encrypted.ciphertext.toString(CryptoJS.enc.Hex);
 return encrypted;
 }
 
 

calculQcj(Cj){

  var BigInteger = require('bigi'); //npm install --save bigi@1.1.0
  var ecurve = require('ecurve') ;//npm install --save ecurve@1.0.0
  var Point = require('ecurve/lib/point.js')
  var AES = require("crypto-js/aes");
  var SHA256 = require("crypto-js/sha256");
  var CryptoJS = require("crypto-js");
  
  var EC = require('elliptic').ec;
  var ec = new EC('secp256k1');
  var ecparams = ecurve.getCurveByName('secp256k1');
  
  var bu= new Buffer((Cj.toString()).hexEncode(), 'hex');
  
  var ecparams = ecurve.getCurveByName('secp256k1');
  var Qcjpt = ecparams.G.multiply(BigInteger.fromBuffer(bu));// yehseb publicKey bi formule G*privateKey
  var Qcjobject= Qcjpt.getEncoded(true);
  var Qcj=Qcjobject.toString('hex');
  return Qcj;}

      decryptBN(s0,s1,s2,s3,s4,s5,bnchiff,bn){
              var AES = require("crypto-js/aes");
              var SHA256 = require("crypto-js/sha256");
              var CryptoJS = require("crypto-js");
              var tab = [];
              tab[0]=s0 ; 
              tab[1]=s1 ;
              tab[2]=s2 ;
              tab[3]=s3 ;
              tab[4]=s4 ;
              tab[5] = s5;
              var t = []
              var i = 0 ;
              while ( i < tab.length) {
                try{
                 console.log("qcj dans while ",tab[i]) 
                 
                 console.log('bnchiffff',bnchiff)
                var decrypted = CryptoJS.AES.decrypt(bnchiff.toString(),tab[i]);
                 var c = decrypted.toString(CryptoJS.enc.Utf8);}
                catch(e){
                console.log ( "merooor je suis passé  ");
                } 
                console.log("hahahhahaha",c) 
                if (c == bn.toString() ) {t[0]= c; 
                  console.log("iiiiiiii",i)
                  t[1]= i ; 
                return t  }
                else (i++) ; }
                return t ; }


                
getGermDecrypt(t,publicKey){
  var AES = require("crypto-js/aes");
  var SHA256 = require("crypto-js/sha256");
  var CryptoJS = require("crypto-js");
  var bn1 = t[0] ; 
  console.log("this is BN1 : " ,bn1)
  console.log("public keeeeeey",publicKey)
    var decrypted = CryptoJS.AES.decrypt(bn1,publicKey); 
    console.log("after decrypt" , decrypted ) ; 
    var c =  decrypted.toString(CryptoJS.enc.Utf8) 
    return c  
  }
calculofff(g11){
    console.log("hyyyyyy")
    var SHA256 = require("crypto-js/sha256");
    var CryptoJS = require("crypto-js");
    var sh1 = CryptoJS.SHA256(g11); //hashage de g1 
    var offset = sh1.toString(CryptoJS.enc.Hex); //extraction 
    var yourNumber = parseInt(offset, 16);// conversion en decimal 
    console.log("your number 2 ", yourNumber);
    var offsetfinal = ( parseInt(yourNumber).mod(6) ); // offset 
    return offsetfinal
   } 

   getCj(t){
    var cj = t[1]
    return cj ;}
    /***************************GET le vrai cj du bulletin original ************************* */
    
  getCj2(cj , offset ){
    var t = cj - offset ;
    console.log("cj de bn en rotation - offset ", t)
    var cj2= ( parseInt( t).mod(6) )
    //console.log("coucouuuu", cj2) ;
    return cj2 ;}

    calculCVJ(bnn,t,namej) {
  
      var s = t[1] ; 
     var ss = s.toString()
    var BigInteger = require('bigi'); //npm install --save bigi@1.1.0
      var ecurve = require('ecurve') ;//npm install --save ecurve@1.0.0
      var Point = require('ecurve/lib/point.js')
      var EC = require('elliptic').ec;
      var ec = new EC('secp256k1');
      var ecparams = ecurve.getCurveByName('secp256k1');
      var bn = bnn[0] ; 
      var bn2= new Buffer(bn.hexEncode(), 'hex');
      var qbn = ecparams.G.multiply(BigInteger.fromBuffer(bn2));
      var namej2= new Buffer(namej.hexEncode(),'hex');
      var qnamej = ecparams.G.multiply(BigInteger.fromBuffer(namej2));
      var sss = new Buffer(ss.hexEncode(), 'hex');
      var ssss = ecparams.G.multiply(BigInteger.fromBuffer(sss));
      var sssss = ssss.getEncoded(true).toString('hex') ; 
      var s1 = new Buffer (sssss.hexEncode(), 'hex') ; 
      var resu =qbn.multiply(BigInteger.fromBuffer(s1)) ;
      
      var cvj = qnamej.add(resu);
      var cvj2= cvj.getEncoded(true).toString('hex') ; 
      var yourNumber = parseInt(cvj2, 16).toString().replace('.','').substr(0,4);
      
      return yourNumber;
      
      
      
      }










          }
   /************hex encode*************/
   String.prototype.hexEncode = function(){
     var hex, i;
   
     var result = "";
     for (i=0; i<this.length; i++) {
         hex = this.charCodeAt(i).toString(16);
         result += ("000"+hex).slice(-4);
     }
   
     return result
   } 
   Number.prototype.mod = function(n) {
    var m = (( this % n) + n) % n;
    return m < 0 ? m + Math.abs(n) : m;
  };
     /************ FIN hex encode*************/
 
 