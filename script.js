function myFunction() {
    if (confirm("This page contains age-restricted materials including horror and explicit depictions of sexual activity.\n\nBy entering, you affirm that your are at least 18 years of a ge or the age of majority in the jurisdiction you are accessing the website from and you consent to viewing horror and sexually explicit content.\nDO YOU WISH TO CONTINUE?") == true) {
        window.location.href = "ratedR.html";
    } else {
        // window.location.href = "ratedG.html";
        return false;
    }
}
