function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    return this.marks ? this.marks.push(...marks) : 'студент отчислен';
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || this.marks.length === 0) {
      return 0;
    }
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  };
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  };

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage());
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); 
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);