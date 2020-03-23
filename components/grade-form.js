class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var nameContent = formData.get("name");
    var courseContent = formData.get("course");
    var gradeContent = formData.get("grade");
    gradeContent = parseInt(gradeContent);
    console.log(nameContent);
    console.log(courseContent);
    console.log(gradeContent);
    this.createGrade(nameContent, courseContent, gradeContent);
    event.target.reset();
  }
}
