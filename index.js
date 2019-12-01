// console.log(123);

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer Started Bozo');
  },

  onTick() {
    console.log('Timer just ticked down Bozo');
  },

  onComplete() {
    console.log('Timer just completed Bozo');
  }
});
