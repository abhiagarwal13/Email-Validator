<!DOCTYPE html>
<html>
<head>
  <title>Email Validator</title>
  <style>
    #resultCont {
      margin-top: 20px;
      font-weight: bold;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h2>Email Validator</h2>
  <input type="text" id="username" placeholder="Enter email" />
  <button id="submitBtn">Validate</button>
  <div id="resultCont"></div>

  <script>
    const submitBtn = document.getElementById("submitBtn");
    const resultCont = document.getElementById("resultCont");

    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = document.getElementById("username").value;

      // Simple email format validation using RegEx
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (regex.test(email)) {
        resultCont.innerHTML = `<span style="color: green;">✅ Valid Email Format</span>`;
      } else {
        resultCont.innerHTML = `<span style="color: red;">❌ Invalid Email Format</span>`;
      }
    });
  </script>
</body>
</html>





