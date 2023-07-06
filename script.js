alert("Hi there!\nTotally not a scam website :)")


function Submit() {
  alert("Thanks for ordering!")
  alert("Meanwhile we will not pack your order, instead give you something trash instead.")
  alert("Oh, and we not only scammed you, now we have valid credentials for your credit card! We will drain it!")
  alert("Using only HTML, CSS, and Javascript, we managed to fool you :)")
}

function orderButton(productNum) {
  var captcha = document.getElementById("captcha").checked;
  var emailAcc = document.getElementById("emailAcc").value;
  var homeAddr = document.getElementById("homeAddr").value;
  var credCardNum = document.getElementById("credCardNum").value;

  if (captcha !== true) {
    alert("Please check CAPTCHA")
    return;
  }

  if (emailAcc === '' ||
      homeAddr === '' ||
      credCardNum === '') {
    alert("One or more fields is missing. Please input the required parameters.")
    return;
  }
  
  alert("Thank you for ordering!");
  alert(`Order number: # ${Math.floor(Math.random() * (65535 - 1 + 1)) + 1}`);
  alert("Packing up rocks...")

  return;
}
