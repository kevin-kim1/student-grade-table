class App {

  handleGetGradesError(error) {
    console.log(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var total = 0;
    var average = 0;
    for(var i = 0; i < grades.length; i++) {
      total += grades[i].grade;
    }
    average = total / grades.length;
    this.pageHeader.updateAverage(average);
  }

  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
  }

  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "YZqN7r3k" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  start() {
    this.getGrades();
  }
}
