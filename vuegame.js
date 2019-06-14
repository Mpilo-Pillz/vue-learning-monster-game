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
            var maxDamage = 10;
            var minDamage = 3;
            var damage = Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
            this.monsterHealth -= damage;

            if(this.monsterHealth <= 0){
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }

            maxDamage = 11;
            minDamage = 2;
            damage = Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
            this.playerHealth -= damage;

            if(this.playerHealth <= 0){
                alert('You Lost!');
                this.gameIsRunning = false;
                return;
            }
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        }
    },
});