import Web3 from 'web3';
export default class Client  {


  
 constructor(ID){
    this.ID=ID
    this.r=Math.floor((Math.random() * 1000) + 1).toString();
    this.rhexa=this.r.hexEncode(); 
  
    }

/******************PUBlic KEY CLIENT (Point)******************************** */
publicKey () {
  console.log(this.r + "hellooo it r ")
  var ecurve = require('ecurve') ;
  var BigInteger = require('bigi'); //npm install --save bigi@1.1.0
 //npm install --save ecurve@1.0.0
  var Point = require('ecurve/lib/point.js')
  var AES = require("crypto-js/aes");
  var SHA256 = require("crypto-js/sha256");
 
  
  var EC = require('elliptic').ec;
  var ec = new EC('secp256k1');

  var privateKey = new Buffer(this.ID.hexEncode(), 'hex');
  var ecparams = ecurve.getCurveByName('secp256k1');
  var curvePt = ecparams.G.multiply(BigInteger.fromBuffer(privateKey));// yehseb publicKey bi formule G*privateKey
  
  
  return curvePt 
}
 

   
/****************************Calculate H1(ID)*r ************************************* */
password ()
{
 var BigInteger = require('bigi'); //npm install --save bigi@1.1.0
 var ecurve = require('ecurve') ;//npm install --save ecurve@1.0.0
 var Point = require('ecurve/lib/point.js')
 var AES = require('crypto-js/aes');
 var SHA256 = require('crypto-js/sha256');
 var CryptoJS = require('crypto-js');
 
 var EC = require('elliptic').ec;
 var ec = new EC('secp256k1');


 var curvePt=this.publicKey();
 var resu =curvePt.multiply(BigInteger.fromBuffer(this.r.hexEncode())) ;
 var ResulFinal = resu.getEncoded(true);
return  ResulFinal.toString('hex') ;
}
    
  

 

 
   /*************************get s*id and divide it by r ************************************* */
   passwordBlock  (sid) {
    var AES = require("crypto-js/aes");
    var SHA256 = require("crypto-js/sha256");
    var CryptoJS = require("crypto-js");
  
   
   var sid_dec=parseInt(sid, 16);
   var r_dec=parseInt(this.rhexa, 16);
   var password=sid_dec/r_dec;
   var encryptedpass = CryptoJS.AES.encrypt( password.toString(16),this.rhexa);
  return encryptedpass;
  }
  
 /*******************Create account with pass ********************************* */
 CreateAccountBlock  (pass) {
  var AES = require("crypto-js/aes");
  var SHA256 = require("crypto-js/sha256");
  var CryptoJS = require("crypto-js");
  
  var decryptedpass = CryptoJS.AES.decrypt(pass,this.rhexa); 
  var passwordblockchain=decryptedpass.toString(CryptoJS.enc.Utf8);

  if (typeof web3 !== 'undefined') {
   var web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
var newaccount=web3.personal.newAccount(passwordblockchain);

web3.personal.unlockAccount(newaccount,passwordblockchain , 10);
var testrpcaccount=web3.eth.accounts[0];

web3.eth.sendTransaction({to:newaccount, from:testrpcaccount, value:web3.toWei("0.5", "ether")})
web3.eth.defaultAccount =newaccount ;
return newaccount ;

}

/*********************Encrypt Cj ******************************* */
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
  
/**********************Encrypt BN with Qcj in IBE**************************** */
  
calculBNChiffré( bn,Qcj){
    var CryptoJS = require("crypto-js");
    var AES = require("crypto-js/aes");
    var encrypted = CryptoJS.AES.encrypt(bn.toString(),Qcj);
    
  return encrypted;
}

calculCVJ(bn,qcj,namej) {
  
  
var BigInteger = require('bigi'); //npm install --save bigi@1.1.0
  var ecurve = require('ecurve') ;//npm install --save ecurve@1.0.0
  var Point = require('ecurve/lib/point.js')
  var EC = require('elliptic').ec;
  var ec = new EC('secp256k1');
  var ecparams = ecurve.getCurveByName('secp256k1');
 
  var bn2= new Buffer((bn.toString()).hexEncode(), 'hex');
  var qbn = ecparams.G.multiply(BigInteger.fromBuffer(bn2));

  var namej2= new Buffer(namej.hexEncode(),'hex');
  var qnamej = ecparams.G.multiply(BigInteger.fromBuffer(namej2));

  
  
  var s1 = new Buffer (qcj.hexEncode(), 'hex') ; 
  var resu =qbn.multiply(BigInteger.fromBuffer(s1)) ;
  
  var cvj = qnamej.add(resu);
  var cvj2= cvj.getEncoded(true).toString('hex') ; 
  var yourNumber = parseInt(cvj2, 16);
  //var b36 = parseInt(cvj2,16).toString(36);
  //console.log("cvvvvj est ",b36)
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
/******************fin hex encode***************************/

 
   
  

 
  
  
  

  
  
  
  
    
  
  
  
  
  
  
  
  