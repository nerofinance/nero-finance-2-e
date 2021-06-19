var allClasses = [];

var classAPR      = Array();
var classVoteDown =  Array();
var classVoteUp   =  Array();
var classAlloc    = Array();
var classPendingReward = Array();
var classGetHarvest = Array();
var classGetHarvestS = Array();
var classYourLP      = Array();
var classWdLiq      = Array();
var classDpLiq      = Array();
var classApprove      = Array();
var classTotalLiq      = Array();
var classApproveDeposit = Array();
var classApproveWithdraw = Array();
var classApproveDepositS = Array();
var classApproveWithdrawS = Array();
var classRodaDeposit = Array();
var classRodaWithdraw = Array();
var classApproveStaking=Array();

var HANDLE_THIS = function(){

  allClasses = [];

  classAPR      = Array();
  classVoteDown =  Array();
  classVoteUp   =  Array();
  classAlloc    = Array();
  classPendingReward = Array();
  classGetHarvest = Array();
  classGetHarvestS = Array();
  classYourLP      = Array();
  classWdLiq      = Array();
  classDpLiq      = Array();
  classApprove      = Array();
  classTotalLiq      = Array();
  classApproveDeposit = Array();
  classApproveWithdraw = Array();
    classRodaDeposit = Array();
    classRodaWithdraw = Array();
    classApproveStaking=Array();

    classRodaDepositS = Array();
    classRodaWithdrawS = Array();
  

var allElements = document.querySelectorAll('*');

for (var i = 0; i < allElements.length; i++) {
  var classes = allElements[i].className.toString().split(/\s+/);
  for (var j = 0; j < classes.length; j++) {
    var cls = classes[j];
    if (cls && allClasses.indexOf(cls) === -1)
    if (cls.indexOf("-pid-") > 0) {
      allClasses.push(cls);
      if (cls.indexOf("apr-pid") >= 0)classAPR.push(cls);
      if (cls.indexOf("vote-down-pid") >= 0)classVoteDown.push(cls);
      if (cls.indexOf("vote-up-pid") >= 0)classVoteUp.push(cls);
      if (cls.indexOf("alloc-pid") >= 0)classAlloc.push(cls);
      if (cls.indexOf("pending-reward-pid") >= 0)classPendingReward.push(cls);
      if (cls.indexOf("your-lp-pid") >= 0)classYourLP.push(cls);
      if (cls.indexOf("get-harvest-pid") >= 0)classGetHarvest.push(cls);
      if (cls.indexOf("get-harvest-staking-pid") >= 0)classGetHarvestS.push(cls);
      if (cls.indexOf("wd-liq-pid") >= 0)classWdLiq.push(cls);
      if (cls.indexOf("dp-liq-pid") >= 0)classDpLiq.push(cls);
      if (cls.indexOf("get-approve-pid") >= 0)classApprove.push(cls);
       
      if (cls.indexOf("total-liq-pid") >= 0)classTotalLiq.push(cls);

      if (cls.indexOf("approve-deposit-lp-pid") >= 0)classApproveDeposit.push(cls);
      if (cls.indexOf("approve-withdraw-lp-pid") >= 0)classApproveWithdraw.push(cls);

     
      if (cls.indexOf("roda-wd") >= 0)classRodaWithdraw.push(cls);
      if (cls.indexOf("roda-dp") >= 0)classRodaDeposit.push(cls);
    }
  }
}
/*
console.log(allClasses);
console.log(classAPR);
console.log(classVoteDown);
console.log(classVoteUp);
console.log(classAlloc);
console.log(classPendingReward);
console.log(classYourLP);
console.log(classGetHarvest);
console.log(classWdLiq);
console.log(classDpLiq);
console.log(classApprove);
console.log(classTotalLiq);
*/

$('#add-contract').on('click',function(){
  let token = $('#data-contract').val();
  showLoader();
WALLET.addContract(token);
});

var walletConnector = document.querySelectorAll('.connect-to-wallet');
  for(var i =0;i<walletConnector.length;i++)
    walletConnector[i].addEventListener('click', function(event) {
        //loading(event.target);
        
        WALLET.getAccount();
      });

 document.querySelectorAll('.logout')[0].addEventListener('click', function(event) {
    loading(event.target);
        WALLET.logout();
      });

 


//approve
classApprove.forEach(function(a){
    

    document.querySelectorAll("."+a)[0].addEventListener('click', function(event) {
        loading(event.target);
        
        WALLET.reqApprove(a.replace("get-approve-pid-","")*1);
      });
})

//console.log(classRodaWithdraw);

//approve
classRodaWithdraw.forEach(function(a){
  //console.log(a);
  document.querySelectorAll("."+a)[0].addEventListener('onchange', function(event) {
     // console.log(document.getElementsByClassName(a).value);
      HANDLE.rodawd(a.replace("roda-wd-","")*1);

    });
})




//approve
classGetHarvest.forEach(function(a){
  
  document.querySelectorAll("."+a)[0].addEventListener('click', function(event) {
      loading(event.target);
      showLoader();
      WALLET.reqDeposit(a.replace("get-harvest-pid-","")*1,0);
    });
})

 


classApproveDeposit.forEach(function(a){
  
  document.querySelectorAll("."+a)[0].addEventListener('click', function(event) {
      loading(event.target);
      showLoader();
      var dp = document.querySelectorAll(".amount-deposit-lp-pid-"+(a.replace("approve-deposit-lp-pid-","")*1))[0].value ;

       
    WALLET.reqDeposit(a.replace("approve-deposit-lp-pid-","")*1,dp);
    });
})

 


classApproveWithdraw.forEach(function(a){
  
  document.querySelectorAll("."+a)[0].addEventListener('click', function(event) {
      loading(event.target);
      showLoader();
      var dp = document.querySelectorAll(".amount-withdraw-lp-pid-"+(a.replace("approve-withdraw-lp-pid-","")*1))[0].value ;
      WALLET.reqWitdraw(a.replace("approve-withdraw-lp-pid-","")*1,dp);
    });
})


 
  
}

HANDLE_THIS();