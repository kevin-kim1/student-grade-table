class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    var gradeAverage = document.getElementById("grade-average");
    gradeAverage.textContent = newAverage;
  }
}
