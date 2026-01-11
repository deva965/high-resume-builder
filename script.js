function createResume() {
  document.getElementById("r-name").innerText =
    document.getElementById("name").value;

  document.getElementById("r-contact").innerText =
    document.getElementById("email").value + " | " +
    document.getElementById("phone").value;

  document.getElementById("r-skills").innerText =
    document.getElementById("skills").value;

  document.getElementById("r-education").innerText =
    document.getElementById("education").value;

  document.getElementById("r-experience").innerText =
    document.getElementById("experience").value;

  let template = document.getElementById("template").value;
  let resume = document.getElementById("resume");

  resume.className = "resume-card " + template;
}

function resetForm() {
  document.querySelectorAll("input, textarea").forEach(e => e.value = "");
  document.getElementById("r-name").innerText = "Your Name";
  document.getElementById("r-contact").innerText = "Email | Phone";
  document.getElementById("r-skills").innerText = "";
  document.getElementById("r-education").innerText = "";
  document.getElementById("r-experience").innerText = "";
}

function downloadResume() {
  window.print();
}
