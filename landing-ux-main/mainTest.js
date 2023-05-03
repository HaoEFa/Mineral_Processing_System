// 注册登录
(function () {
  const singUpBtn = document.querySelector('#sign-up-btn')
  const singInBtn = document.querySelector('#sign-in-btn')
  const container = document.querySelector('.container')
  const submitBtn = document.querySelector(".submit-btn")
  const submitBtnRegister = document.querySelector('.submit-btn-register');
  // const signVfImgForm = document.querySelector(".sign-vfImg-form");
  const signInForm = document.querySelector(".sign-in-form");
  const signUpForm = document.querySelector(".sign-up-form");
  const inputVfCode = document.querySelector("#inputVfCode");
  var cipher;
  singUpBtn.addEventListener('click', () => {
     container.classList.add('sign-up-mode');
     signUpForm.children[1].value = "";
     signUpForm.children[2].value = "";
  })
  singInBtn.addEventListener('click', () => {
     container.classList.remove('sign-up-mode');
  });
//    
   function registerToLogin() {
      submitBtnRegister.addEventListener('click', () => {
      signInForm.children[1].value = signUpForm.children[1].value;
      cipher = signUpForm.children[2].value;
       console.log(cipher);
      // 清除注册后登录页面密码
      signInForm.children[2].value = "";
      container.classList.remove('sign-up-mode');
      alert("注册成功！欢迎您使用矿物加工系统！点击确定继续");
  });
  } 
//   判断密码是否正确
  function LoginNow() {
    submitBtn.addEventListener('click', function() {
      console.log(signInForm.children[2].value);
        if(signInForm.children[2].value == cipher) {
        alert("密码正确！");
        location.href = '../main-interface.html';
       }   else  {
        alert("密码错误！");
       } 
    });
  }
   // registerToLogin();
  //   判断密码是否正确
   // LoginNow();
  // 判断验证码
   function judgeRegister() {
    var sum = 1;
    signVfImgForm.addEventListener("click", function () {
      
          if(sum >= 1 && sum < 2) {
             sum++;   
             signVfImgForm.children[0].src = './img/' + sum +'.jpeg';
          }  
          else if(sum >= 2) {
            sum = 1;
            signVfImgForm.children[0].src = './img/' + sum + '.jpeg';
         } 
         console.log("我是judgeRegister中的" + sum);
          // registerToLogin(sum);
    });
  } 
  // judgeRegister();
  // registerToLogin();
   (function () {
    const signVfImgForm = document.querySelector(".sign-vfImg-form");
    var sum = 1;
    signVfImgForm.addEventListener("click", function () {
          if(sum >= 1 && sum <2) {
             sum++;   
             signVfImgForm.children[0].src = './img/' + sum +'.jpeg';
          }
          else if(sum >= 2 ) {
            sum = 1;
            signVfImgForm.children[0].src = './img/' + sum +'.jpeg';
         } 
    });
    signVfImgForm.children[0]
})(); 
})();




