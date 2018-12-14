import { Injectable } from '@angular/core';
import { CandidatsService } from './candidats.service';
import {IResult} from '../app/resultat/result'
import {ICandidat} from '../app/ballot/candidat'
import {IVotant} from '../app/form/votant'

@Injectable()
export class SmartcontractService {
addresse:string ="";
adresserc:string="";
voting:any;
check:string="0";

accountAddressG:string="";
web3:any;
votingContract:any;
result : IResult[]=[];
totalofall:number=0;

  constructor(private cd :CandidatsService) { }

resultat(){
this.result=[];
  var Web3= require("web3");
  console.log("IN RSLTTTTTTTTTTTTTTT");
  console.log(this.adresserc);
  if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

  web3.eth.defaultAccount = web3.eth.accounts[0];
  
          var CoursetroContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"candidate11","type":"string"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate11","type":"string"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate1","type":"string"},{"name":"candidate2","type":"string"},{"name":"candidate3","type":"string"},{"name":"candidate4","type":"string"},{"name":"candidate5","type":"string"},{"name":"candidate6","type":"string"}],"name":"setInstructor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate11","type":"string"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
  
          var vote=CoursetroContract.at(this.adresserc);
       let a :ICandidat[]=this.cd.getCandidates();;
     
       for (let element of a)
       { 
         let a=vote.totalVotesFor(element.nom);
         console.log(a ,'total votes')
this.result.push({'nom':element.nom,'vote':a,'img':element.image,'prc':0})


       }   

      
       for (let element of this.result)
       {console.log(element.nom);}
     
}


  
newSC(accountAddress){
var Web3=require("web3");
  if (typeof this.web3 !== 'undefined') {
      this.web3 = new Web3(this.web3.currentProvider);
   } else {
       // set the provider you want from Web3.providers
       this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
   }
   this.accountAddressG=accountAddress;
 console.log(this.accountAddressG)
 console.log(this.web3.eth.getBalance(this.accountAddressG))
 //this.newaccount ;

this.check="1"

this.votingContract = this.web3.eth.contract([{"constant":true,"inputs":[{"name":"candidate11","type":"string"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate11","type":"string"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate1","type":"string"},{"name":"candidate2","type":"string"},{"name":"candidate3","type":"string"},{"name":"candidate4","type":"string"},{"name":"candidate5","type":"string"},{"name":"candidate6","type":"string"}],"name":"setInstructor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate11","type":"string"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
this.voting = this.votingContract.new(
   {
     from: this.accountAddressG, 
     data: '0x6060604052341561000f57600080fd5b6107a88061001e6000396000f300606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634a3bf37714610088578063538c91b2146100ff5780637021939f146101745780637b707485146101b5578063b13c744b14610361578063cfb51928146103a0578063e89927ef14610419575b600080fd5b341561009357600080fd5b6100e3600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610476565b604051808260ff1660ff16815260200191505060405180910390f35b341561010a57600080fd5b61015a600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506104c8565b604051808215151515815260200191505060405180910390f35b341561017f57600080fd5b610199600480803560001916906020019091905050610536565b604051808260ff1660ff16815260200191505060405180910390f35b34156101c057600080fd5b61035f600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610556565b005b341561036c57600080fd5b6103826004808035906020019091905050610630565b60405180826000191660001916815260200191505060405180910390f35b34156103ab57600080fd5b6103fb600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610654565b60405180826000191660001916815260200191505060405180910390f35b341561042457600080fd5b610474600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610685565b005b60008061048283610654565b905061048d836104c8565b151561049857600080fd5b600080826000191660001916815260200190815260200160002060009054906101000a900460ff16915050919050565b60008060006104d684610654565b9150600090505b60078054905081101561052a5781600019166007828154811015156104fe57fe5b90600052602060002090015460001916141561051d576001925061052f565b80806001019150506104dd565b600092505b5050919050565b60006020528060005260406000206000915054906101000a900460ff1681565b6000806000806000808b9b508a9a5089995088985087975086965061057a8c610654565b95506105858b610654565b94506105908a610654565b935061059b89610654565b92506105a688610654565b91506105b187610654565b905060c0604051908101604052808760001916600019168152602001866000191660001916815260200185600019166000191681526020018460001916600019168152602001836000191660001916815260200182600019166000191681525060079060066106219291906106f0565b50505050505050505050505050565b60078181548110151561063f57fe5b90600052602060002090016000915090505481565b600061065e610743565b829050600081511415610677576000600102915061067f565b602083015191505b50919050565b600061069082610654565b905061069b826104c8565b15156106a657600080fd5b6001600080836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff1602179055505050565b828054828255906000526020600020908101928215610732579160200282015b82811115610731578251829060001916905591602001919060010190610710565b5b50905061073f9190610757565b5090565b602060405190810160405280600081525090565b61077991905b8082111561077557600081600090555060010161075d565b5090565b905600a165627a7a72305820d33f7632d95c1f6df901d40cf6145d70656e4416f6231aa6c7edf99083e4b9570029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })

  
  console.log(this.voting)
  console.log(this.voting.address)
  console.log(this.voting.getTransaction)
}



getSC(accountAddress){
  this.accountAddressG=accountAddress;
  this.web3.eth.defaultAccount =this.accountAddressG;
  
          var CoursetroContract = this.web3.eth.contract([{"constant":true,"inputs":[{"name":"candidate11","type":"string"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate11","type":"string"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate1","type":"string"},{"name":"candidate2","type":"string"},{"name":"candidate3","type":"string"},{"name":"candidate4","type":"string"},{"name":"candidate5","type":"string"},{"name":"candidate6","type":"string"}],"name":"setInstructor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate11","type":"string"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
  console.log("in get SC this is SC address",this.adresserc)
          var vote=CoursetroContract.at(this.adresserc);


}


votefor(candidatename){
	this.adresserc=this.voting.address;
  console.log(this.adresserc);
  console.log(this.accountAddressG);
	console.log("IN VOTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
	this.voting.setInstructor("Ahmed Andolsi","Skander Mellouli","Yesmine ben Ahmed","Asma Sellami","Asma Azizi","Mariem Hadhri",{from: this.accountAddressG, gas:3000000} );
	console.log(this.accountAddressG)
     

	console.log(this.voting.validCandidate(candidatename));
	var hash = this.voting.voteForCandidate(candidatename,{from: this.accountAddressG, gas:3000000} );
	
	var trans =this.web3.eth.getTransaction(hash)
	console.log("vote hash :   " , trans )
  this.resultat()

}



}