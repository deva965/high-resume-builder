function createResume() {
  r("r-name").innerText = v("name");
  r("r-contact").innerHTML =
    `<i class="fa-solid fa-envelope"></i> ${v("email")} |
     <i class="fa-solid fa-phone"></i> ${v("phone")}`;

  r("r-education").innerText = v("education");
  r("r-experience").innerText = v("experience");

  createIcons("skills", "r-skills", "fa-solid fa-star");
  createIcons("hobbies", "r-hobbies", "fa-solid fa-heart");

  let resume = r("resume");
  resume.className = "resume-card " + v("template");

  let file = document.getElementById("photo").files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = () => r("r-photo").src = reader.result;
    reader.readAsDataURL(file);
  }
}

function createIcons(inputId, outputId, icon) {
  let items = v(inputId).split(",");
  let box = r(outputId);
  box.innerHTML = "";
  items.forEach(i => {
    if (i.trim())
      box.innerHTML += `<span><i class="${icon}"></i> ${i.trim()}</span>`;
  });
}

function resetForm() {
  document.querySelectorAll("input, textarea").forEach(e => e.value = "");
  r("r-photo").src = "";
  r("r-skills").innerHTML = "";
  r("r-hobbies").innerHTML = "";
}

function downloadResume() {
  window.print();
}

function r(id) { return document.getElementById(id); }
function v(id) { return document.getElementById(id).value; }
