class App {

  constructor() {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess(this);
  }
  handleGetGradesError(error) {
    console.log("error");
  }
  handleGetGradesSuccess(success) {
    console.log("success");
  }
  getGrades() {
    $.jax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }
}
