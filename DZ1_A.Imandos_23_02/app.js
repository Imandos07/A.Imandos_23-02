function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  function showConfirmPassword() {
    var x = document.getElementById("confirm_password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var confirmInput = document.getElementById("confirm-password");
  
  submitButton.addEventListener("click", function(event){
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;
    var confirmValue = confirmInput.value;
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
    if (!emailRegex.test(emailValue)) {
      event.preventDefault();
      alert("Введите корректный адрес электронной почты");
      return;
    }
  
    if (!passwordRegex.test(passwordValue)) {
      event.preventDefault();
      alert("Пароль должен содержать как минимум 8 символов, включая буквы большие и маленькие, и цифры");
      return;
    }
  
    if (passwordValue !== confirmValue) {
      event.preventDefault();
      alert("Пароли не совпадают");
      return;
    }
  });


// //------------------Task-2-------------------------
// const movingBlock = document.getElementById("moving-block");
// let xPosition = 0;

// function moveBlock() {
//   xPosition += 30;
//   movingBlock.style.left = xPosition + "px";

//   if (xPosition < window.innerWidth - 250) {
//     requestAnimationFrame(moveBlock);
//   }
// }

// moveBlock();




  
  