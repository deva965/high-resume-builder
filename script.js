function createResume() {
  document.getElementById("r-name").innerText =
    document.getElementById("name").value;

  document.getElementById("r-contact").innerText =
    document.getElementById("email").value + " | " +
    document.getElementById("phone").value;

  document.getElementById("r-education").innerText =
    document.getElementById("education").value;

  document.getElementById("r-experience").innerText =
    document.getElementById("experience").value;

  // SKILLS COLUMN STYLE
  let skills = document.getElementById("skills").value.split(",");
  let skillsBox = document.getElementById("r-skills");
  skillsBox.innerHTML = "";

  skills.forEach(skill => {
    if (skill.trim()) {
      let div = document.createElement("div");
      div.className = "skill-box";
      div.innerText = skill.trim();
      skillsBox.appendChild(div);
    }
  });
}

