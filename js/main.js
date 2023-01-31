import Worker from "./worker.js";

// массив сотрудников
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
    "Главный инжинер"
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

const $workerList = document.getElementById("workers-list"),
  $workerListTHAll = document.querySelectorAll(".workersTable th");

let column = "fio",
  columnDir = true;
// Функция создает разметку таблицы и добавляет объекты с данными из массива
function newWorkerTR(worker) {
  // создание table row
  const $workerTR = document.createElement("tr");
  //   создание table data (ячейка)
  let $fioTD = document.createElement("td");
  let $birthDateTD = document.createElement("td");
  let $workStartTD = document.createElement("td");
  let $postTD = document.createElement("td");
  // запись текстовой составляющией в новые переменные, которые уже являются основой таблицы
  $fioTD.textContent = worker.fio;
  $birthDateTD.textContent =
    worker.getBirthDateString() + " (" + worker.getAge() + " лет)";
  $workStartTD.textContent =
    worker.workStart + " (" + worker.getPeriodOfWork() + " лет)";
  $postTD.textContent = worker.post;
  // добавление каждой из ячеек в определенном порядке в строку таблицы
  $workerTR.append($fioTD);
  $workerTR.append($birthDateTD);
  $workerTR.append($workStartTD);
  $workerTR.append($postTD);

  return $workerTR;
}
// сортировка массива по параметрам
function getSortWorkers(prop, dir) {
  const workersCopy = [...workers];
  return workersCopy.sort(function (workerA, workerB) {
    if (
      !dir == false
        ? workerA[prop] < workerB[prop]
        : workerA[prop] > workerB[prop]
    )
      return -1;
  });
}
// отрисовка
function render() {
  let workersCopy = [...workers];

  workersCopy = getSortWorkers(column, columnDir);

  $workerList.innerHTML = "";

  for (const worker of workersCopy) {
    $workerList.append(newWorkerTR(worker));
  }
}
// события сортировки
$workerListTHAll.forEach((element) => {
  element.addEventListener("click", function () {
    column = this.dataset.column;
    columnDir = !columnDir;
    render();
  });
});

// Добавление
document
  .getElementById("add-worker")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    workers.push(
      new Worker(
        document.getElementById("input-surname").value,
        document.getElementById("input-name").value,
        document.getElementById("input-lastname").value,
        Number(document.getElementById("input-workStart")),
        new Date(document.getElementById("input-birthDate").value),
        document.getElementById("input-post").value
      )
    );
    render();
  });

render();
