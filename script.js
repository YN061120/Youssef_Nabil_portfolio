const images = ["images/IMG-20250812-WA0026.jpg", "images/IMG-20250812-WA0027.jpg", "images/IMG-20250812-WA0028.jpg"]
let current_index = 0;

const slide = document.getElementById("slide");
const previousbtn = document.getElementById("previous");
const nextbtn = document.getElementById("next");

function showImage(index) {
  slide.src = images[index]; // change the source of the image 
}

previousbtn.addEventListener("click", () => {
  current_index = (current_index - 1 + images.length) % images.length;
  showImage(current_index);
});



nextbtn.addEventListener("click", () => {
  current_index = (current_index + 1) % images.length;
  showImage(current_index);
});


// successfull sumbition when sumbmit the message

// make a new paragraph that has specific features and disappears after some time like 3 or 5 seconds

document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault(); // to avoid refreshing the page when submit
  let msg = document.createElement("p");

  // adding text to the paragraph just created

  msg.textContent = "Your message Has Been Submitted Successfully";
  console.log(msg.textContent); // check point and show that the action has been taken

  // styling section
  msg.style.color = "red";
  msg.style.fontWeight = "bold";
  msg.style.marginTop = "25px";
  msg.style.marginLeft = "35%";

  this.appendChild(msg); // this referes to my form the event listener is attached to it
  // appendChild adds the paragraph as a child node to the form at the end after the submit button

  let info = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("Message").value
  }

  console.log(info);
  setTimeout(() => {
    msg.remove();
    alert("Thank You " + info.name + ".\nYour Message Has Been Submitted Successfully. \nOur customer services will call you back if needed.");
  }, 3000); // remove message, then show alert
})

// output what have been submitted to the console
// we need to get the name of the user

// we need to get the massage of the user and put them togither in object in array of objects

// and alert Thank you + name(input.value)


// make another website page to make the calculator app


// in the calculator website i can do a history using array properitys push unshift
// we can make a clear all botton which refreshes the whole web and clear history and every thing
