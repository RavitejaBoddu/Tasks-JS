var form = document.getElementById("myform");

function getData(event) {
  event.preventDefault();

  /* ******* using name and getting the value **************  */

  var fname = document.myform.fname.value;
  var lname = document.myform.lname.value;
  var pass1 = document.myform.password1.value;
  var pass2 = document.myform.password2.value;
  var email = document.myform.email.value;
  var gender = document.myform.gender.value;
  var interests = new Array();
  var checkboxes = document.getElementsByName("interests");
  for (var box of checkboxes) {
    if (box.checked) {
      interests.push(box.value);
    }
  }
  var sub = document.myform.subscription.value;
  var msg = document.myform.message.value;

  var data = new Object();

  data.firstname = fname;
  data.lastname = lname;
  data.password1 = pass1;
  data.password2 = pass2;
  data.email = email;
  data.gender = gender;
  data.interests = interests;
  data.subscription = sub;
  data.message = msg;

  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");

  if (fname == null || fname == "") {
    alert("please fill the firstname");
  } else if (lname == null || lname == "") {
    alert("please fill the lastname");
  } else if (pass1 == null || pass1 == "") {
    alert("please fill the password");
  } else if (pass2 == null || pass2 == "") {
    alert("please re-enter the password");
  } else if (pass1.length < 6 || pass2.length < 6) {
    alert("Password must be at least 6 characters long");
  } else if (pass1 !== pass2) {
    alert("Password does not match");
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    alert("Please enter a valid email address");
  } else if (gender == null || gender == "") {
    alert("Please Select a gender");
  } else if (interests.length == 0) {
    alert("Please select atleast (1) Area of interest");
  } else if (msg == null || msg == "") {
    alert("please enter message");
  } else if (true) {
    var success = document.getElementById("success");
    success.innerHTML = "Thank you for Registering with us";
  }

  console.log(data);

  /* 
  
  ******* using elements and getting the value of the form elements ********

  var fname = document.getElementById("myform").elements[0].value;
  var lname = document.getElementById("myform").elements[1].value;
  var pass = document.getElementById("myform").elements[2].value;
  var passr = document.getElementById("myform").elements[3].value;
  var email = document.getElementById("myform").elements[4].value;

  ******* directly getting data using FormData and formentries ********

  const data = new FormData(event.target);

  const value = Object.fromEntries(data.entries());

  value.interests = data.getAll("Interests");

  console.log({ value });   */
}

form.addEventListener("submit", getData);
