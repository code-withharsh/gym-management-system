function showRegister() {
  document.getElementById("login-form").classList.remove("active");
  document.getElementById("register-form").classList.add("active");
}
function showLogin() {
  document.getElementById("register-form").classList.remove("active");
  document.getElementById("login-form").classList.add("active");
}

function register() {
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const role = document.getElementById("register-role").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCred => {
      const user = userCred.user;
      return db.collection("users").doc(user.uid).set({
        name, email, role
      });
    })
    .then(() => {
      alert("Registration successful!");
      showLogin();
    })
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCred => {
      const uid = userCred.user.uid;
      return db.collection("users").doc(uid).get();
    })
    .then(doc => {
      if (doc.exists) {
        const role = doc.data().role;
        if (role === "admin") {
          window.location.href = "dashboard-admin.html";
        } else {
          window.location.href = "dashboard-member.html";
        }
      }
    })
    .catch(err => alert(err.message));
}
