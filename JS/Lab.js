// // Create a Login Form and Open Window
// function openWindow() {
//   winiOpen = window.open(
//     "/Html/Thanks.html",
//     "_blank",
//     "width=300,height=300,screenX=500,screenY=300"
//   );
//   NameValue = document.getElementById("Txt Name").value.bold();
//   winiOpen.document.write(
//     ` <h2> Thank you, ${NameValue} for registering in our website </h2> `
//   );
//   winiOpen.document.body.style.h2 = "font-size: 50px;";
//   winiOpen.document.body.style.h3 = "font-size: 50px;";
// }

// ADD to format
function ChangeBorder(element) {
  element.style.border = "none";
  element.style.outline = "none";
  element.style.border = "solid 1px blue";
}

// Check Full Name
function blurBorder(element) {
  element.style.border = "none";
  element.style.outline = "auto";
  if (element.value.length < 3) {
    document.querySelector("#NOT_Valed").innerHTML = "Not Valed!";
    document.querySelector("#notValed").style = "block";
    element.style.backgroundColor = "gray";
    element.focus();
    element.select();
  } else {
    document.querySelector("#notValed").style.display = "none";
    document.querySelector("#valed").style = "block";
    document.querySelector("#NOT_Valed").innerHTML = "";
    element.style.backgroundColor = "white";
  }
}

// Check Passowrd
function Passowrd(element) {
  var Passowrd1 = document.querySelector("#Passowrd1").value;
  var Passowrd2 = document.querySelector("#Passowrd2").value;
  if (Passowrd1 != Passowrd2) {
    document.querySelector("#notValed2").style = "block";

    document.querySelector("#NOT_Valed2").innerHTML =
      "password and repeat password should be the same";
    element.style.backgroundColor = "gray";
    element.focus();
    element.select();
  } else {
    document.querySelector("#notValed2").style.display = "none";
    document.querySelector("#Valed2").style = "block";
    document.querySelector("#NOT_Valed2").innerHTML = "";
    element.style.backgroundColor = "white";
  }
}

// Validat Submit
function validat_Submit(event) {
  if (
    document.querySelector("#Txt").value.length > 3 &&
    document.querySelector("#Passowrd1").value.length > 3 &&
    document.querySelector("#Passowrd2").value.length > 3
  ) {
    document.getElementById(
      "notValed"
    ).innerHTML = `<img src="/images/valid.png" >`;
    event.target.submit();
  } else {
    event.preventDefault();
    document.getElementById("#Txt").focus();
  }
}
