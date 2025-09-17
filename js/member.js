function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// On Page Load → Load Member Data
auth.onAuthStateChanged(user => {
  if (user) {
    const userRef = db.collection("users").doc(user.uid);
    userRef.get().then(doc => {
      if (doc.exists) {
        document.getElementById("member-name").textContent = doc.data().name;
        document.getElementById("member-email").textContent = doc.data().email;
      }
    });

    // Load Bills
    db.collection("bills").where("memberEmail", "==", user.email)
      .onSnapshot(snapshot => {
        const billsList = document.getElementById("member-bills");
        billsList.innerHTML = "";
        snapshot.forEach(doc => {
          const bill = doc.data();
          billsList.innerHTML += `<li>💰 ₹${bill.amount} (Date: ${bill.date.toDate().toLocaleDateString()})</li>`;
        });
      });

    // Load Diets
    db.collection("diets").where("memberEmail", "==", user.email)
      .onSnapshot(snapshot => {
        const dietList = document.getElementById("member-diets");
        dietList.innerHTML = "";
        snapshot.forEach(doc => {
          const diet = doc.data();
          dietList.innerHTML += `<li>🥗 ${diet.plan}</li>`;
        });
      });

    // Load Products
    db.collection("products")
      .onSnapshot(snapshot => {
        const productList = document.getElementById("member-products");
        productList.innerHTML = "";
        snapshot.forEach(doc => {
          const product = doc.data();
          productList.innerHTML += `<li>🛒 ${product.name} - ₹${product.price}</li>`;
        });
      });

  } else {
    window.location.href = "index.html"; 
  }
});
