let elementToObserve;
let newRoot;
const elToChange1 = document.querySelector('.el-change-1')
const elToChange2 = document.querySelector('.el-change-2')
const elToChange3 = document.querySelector('.el-change-3')
const elToChange4 = document.querySelector('.el-change-4')

const eventsToListen = ['load', 'resize']

eventsToListen.forEach(event => {
  window.addEventListener(event, () => {
    elementToObserve = document.querySelector('.element-to-observe');
    newRoot = document.querySelector('.ancestor-observer')
    createObserver()
  }, false)

})



function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      elToChange1.animate([{ width: 0 }, { width: '80%' }], { duration: 2000, fill: 'forwards' })
      elToChange2.animate([{ width: 0 }, { width: '70%' }], { duration: 2000, fill: 'forwards' })
      elToChange3.animate([{ width: 0 }, { width: '60%' }], { duration: 2000, fill: 'forwards' })
      elToChange4.animate([{ width: 0 }, { width: '40%' }], { duration: 2000, fill: 'forwards' })
    }
  });
}

function createObserver() {
  let observer;
  console.log(newRoot);
  let options = {
    root: newRoot,
    rootMargin: "0px",
    threshold: .8
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(elementToObserve);
}