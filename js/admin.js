function addMember() {
  const name = document.getElementById("member-name").value;
  const email = document.getElementById("member-email").value;

  db.collection("members").add({ name, email })
    .then(() => {
      alert("Member added!");
      document.getElementById("member-name").value = "";
      document.getElementById("member-email").value = "";
    })
    .catch(err => alert(err.message));
}

// Add Bill
function addBill() {
  const memberEmail = document.getElementById("bill-member").value;
  const amount = parseFloat(document.getElementById("bill-amount").value);

  db.collection("bills").add({
    memberEmail,
    amount,
    date: new Date()
  })
    .then(() => {
      alert("Bill added!");
      document.getElementById("bill-member").value = "";
      document.getElementById("bill-amount").value = "";
    })
    .catch(err => alert(err.message));
}

// Add Product
function addProduct() {
  const name = document.getElementById("product-name").value;
  const price = parseFloat(document.getElementById("product-price").value);

  db.collection("products").add({ name, price })
    .then(() => {
      alert("Product added!");
      document.getElementById("product-name").value = "";
      document.getElementById("product-price").value = "";
    })
    .catch(err => alert(err.message));
}

// Add Diet
function addDiet() {
  const memberEmail = document.getElementById("diet-member").value;
  const plan = document.getElementById("diet-plan").value;

  db.collection("diets").add({ memberEmail, plan })
    .then(() => {
      alert("Diet plan added!");
      document.getElementById("diet-member").value = "";
      document.getElementById("diet-plan").value = "";
    })
    .catch(err => alert(err.message));
}

// Show Members
db.collection("members").onSnapshot(snapshot => {
  const list = document.getElementById("members-list");
  list.innerHTML = "";
  snapshot.forEach(doc => {
    const m = doc.data();
    list.innerHTML += `<li>${m.name} - ${m.email}</li>`;
  });
});

// Show Bills
db.collection("bills").onSnapshot(snapshot => {
  const list = document.getElementById("bills-list");
  list.innerHTML = "";
  snapshot.forEach(doc => {
    const b = doc.data();
    list.innerHTML += `<li>${b.memberEmail} - ₹${b.amount} - ${b.date.toDate().toLocaleDateString()}</li>`;
  });
});

// Show Products
db.collection("products").onSnapshot(snapshot => {
  const list = document.getElementById("products-list");
  list.innerHTML = "";
  snapshot.forEach(doc => {
    const p = doc.data();
    list.innerHTML += `<li>${p.name} - ₹${p.price}</li>`;
  });
});

// Show Diets
db.collection("diets").onSnapshot(snapshot => {
  const list = document.getElementById("diets-list");
  list.innerHTML = "";
  snapshot.forEach(doc => {
    const d = doc.data();
    list.innerHTML += `<li>${d.memberEmail} - ${d.plan}</li>`;
  });
});

// Logout
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}
