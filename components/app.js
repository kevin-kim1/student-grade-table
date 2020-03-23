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

  createGrades(name, course, grade) {
    console.log(name);
    console.log(course);
    console.log(grade);
  }
  handleCreateGradeError(error) {
    console.log(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }

  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrades = this.createGrades.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
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
