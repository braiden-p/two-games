const choices = ["heads", "tails"];
const images = ["img/heads.jpg", "img/tails.jpg"];
let winLoss = [0, 0];

flips.addEventListener("click", e => {
    if (e.target.tagName == "BUTTON") {
        let coreToss = Math.floor(Math.random() * 2);
        const coin = document.querySelector("#coin");
        const id = e.target.getAttribute("id");

        let result = `
            <img src="img/${id}.jpg" width="200" height="200" alt="${id}">
            <p>
                <br>You chose ${id}
                <br>The toss is ${choices[coreToss]}
        `;

        if (id == choices[coreToss]) {
            winLoss[0] += 1;
            result += `
                <br>You chose wisely!
            `;
        } else {
            winLoss[1] += 1;
            result += `
                <br>Sorry, wrong choice
            `;
        }

        result += `
            </p>
            <p>Wins = ${winLoss[0]}   Losses = ${winLoss[1]}</p>
        `

        console.log(coreToss);
        coin.innerHTML = result;
    }
});