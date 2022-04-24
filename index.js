const idContainer = document.getElementById("id-container");
const adviceContainer = document.getElementById("advice-container");
const nextAdviceBtn = document.getElementById("next-advice");
let id = 1;

function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = function () {
      resolve(JSON.parse(this.response).slip);
    };
    request.send();
  });
  return promise;
}

function displayAdvice() {
  sendHttpRequest("GET", `https://api.adviceslip.com/advice/${id}`).then(
    (response) => {
      idContainer.innerHTML = `#${response.id}`;
      adviceContainer.innerHTML = response.advice;
    }
  );
  id += 1;
}
displayAdvice();

nextAdviceBtn.addEventListener("click", () => {
  displayAdvice();
});
