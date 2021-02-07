new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsStart: false,
        turns: [],
    },
    methods: {
        startNewGame: function () {
            this.gameIsStart = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            //Check
            if (this.checkPlayerOptions()) {
                return;
            }

            //Monster
            let health = this.inputDamage(4, 10);
            this.playerHealth -= health;
            this.turns.unshift({
                isPlayer: false,
                textLog: `Bạn đã mất ${health}`,
            });

            //Player
            let damage = this.inputDamage(5, 12);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                textLog: `Monster đã mất ${damage}`,
            });
        },
        specialAttack: function () {
            if (this.checkPlayerOptions()) {
                return;
            }

            //Monster

            this.playerHealth -= this.inputDamage(4, 10);
            this.turns.unshift({
                isPlayer: false,
                textLog: `Bạn đã mất ${health}`,
            });

            //Player

            this.monsterHealth -= this.inputDamage(10, 20);
            this.turns.unshift({
                isPlayer: true,
                textLog: `Monster đã mất ${damage}`,
            });
        },
        heal: function () {
            if (this.playerHealth < 50) {
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: true,
                    textLog: `Bạn đã hồi 10 máu`,
                });
            }
        },
        giveUp: function () {
            this.gameIsStart = false;
            this.turns = [];
            this.playerHealth = 100;
            this.monsterHealth = 100;
            alert('Bạn đã thua');
        },
        inputDamage: function (minDamage, maxDamage) {
            return Math.max(Math.floor(Math.random() * (maxDamage + 1), minDamage));
        },
        checkPlayerOptions: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('Chúc mừng, bạn đã chiến thắng, chơi thêm ván mới chứ')) {
                    this.startNewGame();
                } else {
                    this.gameIsStart = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('Bạn đã thua, phục thù chứ')) {
                    this.startNewGame();
                } else {
                    this.gameIsStart = false;
                }
                return true;
            }
            return;
        },
    },
});
