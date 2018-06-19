new Vue({
	el:"#app",
	data: {
		playerHp: 100,
		monsterHp: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHp = 100;
			this.monsterHp = 100;
			this.turns = [];
		},
		attk: function() {
			let dmg = this.calculateDmg(3, 10);
			this.monsterHp -= dmg
			this.turns.unshift({
				isPlayer: true,
				text: "Player hits Monster for " + dmg
			});
			if (this.checkWin()) {
				return;
			}
			this.monsterAttk();
		},
		specialAttk: function() {
			let dmg = this.calculateDmg(10, 20);
			this.monsterHp -= dmg;
			this.turns.unshift({
				isPlayer: true,
				text: "Player hits Monster hard for " + dmg
			});
			if (this.checkWin()) {
				return;
			}
			this.monsterAttk();
		},
		heal: function() {
			if (this.playerHp <= 90) {
				this.playerHp += 10;
			} else {
				this.playerHp = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				text: "Player heals for 10"
			});
			this.monsterAttk();
		},
		giveUp: function() {
			this.gameIsRunning = false;
		},
		monsterAttk: function() {
			let dmg = this.calculateDmg(5, 12);
			this.playerHp -= dmg
			this.checkWin();
			this.turns.unshift({
				isPlayer: false,
				text: "Monster hits Player for " + dmg
			});
		},
		calculateDmg: function(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin: function() {
			if (this.monsterHp <= 0) {
				if (confirm("You won! New Game?")) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHp <= 0) {
				if (confirm("You lost! New Game?")) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}
	}
});
