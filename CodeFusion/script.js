document.addEventListener("DOMContentLoaded", function () {
    const englishBtn = document.getElementById("english-btn");
    const nepaliBtn = document.getElementById("nepali-btn");
    const englishContainer = document.getElementById("english-container");
    const nepaliContainer = document.getElementById("nepali-container");

    function showEnglish() {
        englishContainer.style.display = "block";
        nepaliContainer.style.display = "none";
        englishBtn.classList.add("active");
        nepaliBtn.classList.remove("active");
    }

    function showNepali() {
        englishContainer.style.display = "none";
        nepaliContainer.style.display = "block";
        nepaliBtn.classList.add("active");
        englishBtn.classList.remove("active");
    }

    showEnglish();

    englishBtn.addEventListener("click", showEnglish);
    nepaliBtn.addEventListener("click", showNepali);
});