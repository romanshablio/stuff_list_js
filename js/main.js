import Worker from "./worker.js";

const workers = [
  new Worker(
    "Игорь",
    "Фролов",
    "Сергеевич",
    2011,
    new Date(1992, 2, 21),
    "Системный администратор"
  ),
  new Worker(
    "Алена",
    "Белова",
    "Сергеевич",
    2008,
    new Date(1990, 2, 21),
    "главный инжинер"
  ),
  new Worker(
    "Иван",
    "Иванов",
    "Сергеевич",
    2018,
    new Date(1987, 2, 21),
    "Технический писатель"
  ),
];

const $workerList = document.getElementById("workers-list");

function newWorkerTR(worker) {
  const $workerTR = document.createElement("tr");
  $fioTD = document.createElement("td");
  $birthDateTD = document.createElement("td");
  $workStartTD = document.createElement("td");
  $postTD = document.createElement("td");

  $workerTR.append($fioTD);
  $workerTR.append($birthDateTD);
  $workerTR.append($workStartTD);
  $workerTR.append($postTD);

  return $workerTR;
}

function render() {
  const workersCopy = [...workers];

  for (const worker of workers) {
    $workerList.append(newWorkerTR(worker));
  }
}

render();
