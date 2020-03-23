class GradeForm {

  onSumbit(createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event);
    var name = formData.get("name");
    var course = formData.get("course");
    var grade = formData.get("grade");
    this.name.createGrade(name);
    this.course.createGrade(course);
    this.grade.createGrade(grade);

  }

  constructor(formElement) {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement = formElement;
  }
}
