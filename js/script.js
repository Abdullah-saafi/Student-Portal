// let uName = document.querySelector('.u-name');
// let pwd = document.querySelector('.password')
// let wrngEmail = document.querySelector('.wrng-email')
// let wrngPwd = document.querySelector('.wrng-pwd')
// let pwdPtrn = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

// let logIn = document.querySelector('.login-btn');

// logIn.addEventListener("click", function (e) {
//     e.preventDefault();

    
// })

  

// /* Registration Form Js */

// // console.log('hy');


  const form = document.querySelector("form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // prevent form reload

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    let valid = true;

    if (!emailPattern.test(email)) {
      emailError.style.display = "block";
      valid = false;
    } else {
      emailError.style.display = "none";
    }

    if (!passwordPattern.test(password)) {
      passwordError.style.display = "block";
      valid = false;
    } else {
      passwordError.style.display = "none";
    }

    if (!valid) return;

    // Send login data to backend
    try {
      const response = await fetch("http://localhost:8001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        window.location.href = "home.html";
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error");
    }
  });
