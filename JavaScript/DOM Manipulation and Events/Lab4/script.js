const teamName = document.getElementById("team");
const worldCupYear = document.getElementById("year");
const headCoachSpan = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false
    },
     {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      isCaptain: false
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Oscar Garré",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      isCaptain: false
    },
  ],
};

const { team, year, players,headCoach } = footballTeam;

teamName.textContent = team;
worldCupYear.textContent = year;
headCoachSpan.textContent = headCoach;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, isCaptain }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
        </div>
      ` }
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "all":
       setPlayerCards(players);
       break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;



  }
});
