document.getElementById("generate-resume").addEventListener("click", function() {
    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value.split(",");
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;

    // Set values in the resume output
    document.getElementById("output-name").innerText = name;
    document.getElementById("output-email").innerText = email;
    document.getElementById("output-phone").innerText = phone;
    
    // Handle skills
    const skillsList = document.getElementById("output-skills");
    skillsList.innerHTML = ""; // Clear existing list items
    skills.forEach(function(skill) {
        const listItem = document.createElement("li");
        listItem.innerText = skill.trim();
        skillsList.appendChild(listItem);
    });

    document.getElementById("output-education").innerText = education;
    document.getElementById("output-experience").innerText = experience;

    // Show the resume output
    document.getElementById("resume-output").classList.remove("hidden");
    document.getElementById("edit-resume").classList.remove("hidden");
    document.getElementById("save-resume").classList.add("hidden");
});
