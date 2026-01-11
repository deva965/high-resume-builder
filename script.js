function createResume() {
  let r = id => document.getElementById(id);
  let v = id => document.getElementById(id).value;

  r("r-name").innerText = v("name");

  r("r-contact").innerHTML =
    `<i class="fa-solid fa-envelope"></i> ${v("email")} |
     <i class="fa-solid fa-phone"></i> ${v("phone")}`;

  r("r-skills").innerText = v("skills");
  r("r-education").innerText = v("education");
  r("r-experience").innerText = v("experience");
  r("r-hobbies").innerText = v("hobbies");

  // Template switch
  r("resume").className = "resume-card " + v("template");

  // Photo upload preview
  let file = document.getElementById("photo").files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = () => r("r-photo").src = reader.result;
    reader.readAsDataURL(file);
  }
}

function resetForm() {
  document.querySelectorAll("input, textarea").forEach(e => e.value = "");
  document.getElementById("r-photo").src = "";
  document.getElementById("r-skills").innerText = "";
  document.getElementById("r-education").innerText = "";
  document.getElementById("r-experience").innerText = "";
  document.getElementById("r-hobbies").innerText = "";
}

function downloadResume() {
  window.print();
}
