function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");

    if (skills.checked == true) {
        memberSkills.style.display = "block";
    } else {
        memberSkills.style.display = "none";
    }
}