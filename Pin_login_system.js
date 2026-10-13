<!DOCTYPE html>
<html>
<body>
  <h2>Secure PIN Login</h2>

  <input id="pin" type="password" maxlength="4" placeholder="Enter 4-digit PIN">
  <button onclick="login()">Login</button>
  <p id="message"></p>

  <script>
    const correctPin = "4827";
    let attempts = 3;

    function login() {
      const pin = document.getElementById("pin").value;
      const message = document.getElementById("message");

      if (pin === correctPin) {
        message.textContent = "Login successful ✅";
        attempts = 3;
      } else {
        attempts--;
        message.textContent = `Wrong PIN. Attempts left: ${attempts}`;

        if (attempts === 0) {
          message.textContent = "Account locked 🔒";
        }
      }
    }
  </script>
</body>
</html>
