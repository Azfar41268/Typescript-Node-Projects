class human {
    getDetails() {
        console.log(this.name, this.age);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class course {
    constructor(name, id) {
        this.name = name;
        this.students = [];
        this.teachers = [];
        this.id = id;
    }
    addStudent(student) {
        this.students.push(student);
    }
    setTeacher(teach) {
        this.teachers.push(teach);
    }
}
class student extends human {
    constructor(name, age, roll) {
        super(name, age);
        this.rollNumber = roll;
        this.courses = [];
    }
    enroll(course) {
        this.courses.push(course);
    }
}
class teacher extends human {
    constructor(name, age, id, sal) {
        super(name, age);
        this.id = id;
        this.salary = sal;
    }
    assignCourse(course) {
        this.courses = course;
    }
}
class department {
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
let a1 = new course("Metaverse", 1);
let a2 = new course("Artificial Intelligence", 2);
let a = new student("Azfar", 14, 1);
let a3 = new student("Urooj", 10, 2);
a3.enroll(a2);
a.enroll(a1);
a1.addStudent(a);
a2.addStudent(a3);
let b = new teacher("Ashar", 12, 2, 456000);
let b1 = new teacher("Sikander", 55, 3, 900000);
b.assignCourse(a1);
b1.assignCourse(a2);
a1.setTeacher(b);
a2.setTeacher(b1);
let c = new department("Computer science");
c.addCourse(a1);
c.addCourse(a2);
export {};
// console.log(a1)
// console.log(a2);
// console.log(a);
// console.log(a3);
// console.log(b);
// console.log(b1);
// console.log(c);
