//Popup Window
// Get the modal
var modal = document.getElementById('myModal');

var btn = document.getElementById("btnAppt");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}


// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Appointment Request";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "First Name"; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var lastlabel = document.createElement('label'); // Create Label for Last Name Field
lastlabel.innerHTML = "Last Name"; // Set Field Labels
createform.appendChild(lastlabel);

var inputelement = document.createElement('input'); // Create Input Field for Last Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "ename");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var phonelabel = document.createElement('label'); // Create Label for Phone#
phonelabel.innerHTML = "Phone"; // Set Field Labels
createform.appendChild(phonelabel);

var inputelement = document.createElement('input'); // Create Input Field for Phone#
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dphone");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Email";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var datelabel = document.createElement('label'); // Create Label for Appt date
datelabel.innerHTML = "Date";
createform.appendChild(datelabel);

var datelement = document.createElement('input'); // Create Input Field for Appt Date
datelement.setAttribute("type", "text");
datelement.setAttribute("name", "dappt");
createform.appendChild(datelement);

var datebreak = document.createElement('br');
createform.appendChild(datebreak);

var timelabel = document.createElement('label'); // Create Label for Appt Time
timelabel.innerHTML = "Time";
createform.appendChild(timelabel);

var timelement = document.createElement('input'); // Create Input Field for Appt Time
timelement.setAttribute("type", "text");
timelement.setAttribute("name", "dtime");
createform.appendChild(timelement);

var timebreak = document.createElement('br');
createform.appendChild(timebreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Additional Info";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);
