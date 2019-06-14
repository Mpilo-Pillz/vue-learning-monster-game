new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            // var maxDamage = 10;
            // var minDamage = 3;

            // var damage = this.calculateDamage(3, 10);
            // this.monsterHealth -= damage;

            this.monsterHealth -= this.calculateDamage(3, 10);

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

            this.playerHealth -= this.calculateDamage(2, 11); 

            this.checkWin();
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

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