new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            // var maxDamage = 10;
            // var minDamage = 3;

           
            // this.monsterHealth -= damage;
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage + ' health points'
            });

            if(this.checkWin()) {
                return;
            }

            if(this.monsterHealth <= 0){
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }

            // maxDamage = 11;
            // minDamage = 2;
            // damage = Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
            // this.playerHealth -= damage;

            // damage = this.calculateDamage(2, 11);
            // this.playerHealth -= damage;

            // this.playerHealth -= this.calculateDamage(2, 11); 
            this.monsterAttacks();

            this.checkWin();
        },
        specialAttack: function() {
            damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for with SPECIAL ATTACK!' + damage + ' health points!'
            });

            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
            
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player Heals but Monster hits player for' + damage + ' health points!'
            });
            this.monsterAttacks();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(2, 11);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage + ' health points'
            });
        },
        calculateDamage: function(minDamage, maxDamage) {
           return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if(confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else {
                if(this.playerHealth <= 0) {
                    if(confirm('you LOST! New Game')) {
                        this.startGame();
                    } else {
                        this.gameIsRunning = false;
                    }
                    return true;
                }
                return false;
            }
        }
    }
});