
// Скопировано в interview-2025/js/tasks.js
const obj = {
  async func() {
    console.log('1');

    setTimeout(() => {
      console.log('2');
    }, 0);

    Promise.resolve().then(() => {
      console.log('3');
    });

    (function () {
      console.log('4');
      const self = this;
      console.log('5', self);
    })();

    await null;

    console.log('6');
  }
};

obj.func();
console.log('7');