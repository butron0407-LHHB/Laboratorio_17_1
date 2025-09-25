const formEl = document.querySelector("form");
formEl.addEventListener("submit",(event)=>{ 
  event.preventDefault();
  const firstName = formEl.fname.value;
  const lastName = formEl.lname.value;
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log(firstName + " " + lastName);
});
