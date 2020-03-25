class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }

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
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }

  createGrade(name, course, grade) {
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "YZqN7r3k" },
      data: {
              "name": name,
              "course": course,
              "grade": grade
            },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    });
  }

  handleCreateGradeError(error) {
    console.error("Request Not Working");
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  deleteGrade(id) {
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      headers: { "X-Access-Token": "YZqN7r3k" },
      success: this.handleGetGradesSuccess,
      error: this.handleCreateGradeError
    });
  }

  handleDeleteGradeError(error) {
    console.error(error);
  }

  handleDeleteGradeSuccess() {
    this.getGrades();
  }


}
