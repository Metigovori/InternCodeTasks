document.addEventListener("DOMContentLoaded", function () {
    const checkboxForm = document.getElementById("checkboxForm");
    const shuffleBtn = document.getElementById("shuffleBtn");
    const changeBtn = document.getElementById("changeBtn");
    const showSelectedBtn = document.getElementById("showSelectedBtn");
    const resultDiv = document.getElementById("result");
    const divs = Array.from(document.querySelectorAll("#checkboxForm > div"));

    shuffleBtn.addEventListener("click", () => {
        const shuffledDivs = shuffleArray(divs);

        shuffledDivs.forEach((div) => {
            checkboxForm.appendChild(div);
        });
    });

    changeBtn.addEventListener("click", () => {
        const newValues = ["Javascript", "PHP", "ReactJs", "NextJs"];
        divs.forEach((div, index) => {
            const checkbox = div.querySelector("input[type='checkbox']");
            checkbox.value = newValues[index];
            const label = div.querySelector("label");
            label.textContent = newValues[index];
        });
    });

    showSelectedBtn.addEventListener("click", () => {
        const selectedCheckboxes = divs.filter((div) => {
            const checkbox = div.querySelector("input[type='checkbox']");
            return checkbox.checked;
        });
        const selectedValues = selectedCheckboxes.map((div) => {
            const label = div.querySelector("label");
            return label.textContent;
        });
        resultDiv.textContent = "Selected Values: " + selectedValues.join(", ");
    });

    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
});
