(function(){
   console.log("kquery...");

   window.zzz = function () {
       console.log("zzz");
   }

   window.$ = function (str) {
       return document.querySelector(str);
   }

})(); //즉시 실행함수