#! /usr/bin/env node
class School{
    name: string;
    students: Student[] =[];
    teachers: Teacher[] = [];

    addStudent(stdObj:Student){
        this.students.push(stdObj)
    }
    addTeacher(teObj:Teacher){
        this.teachers.push(teObj)
    }
    constructor(name:String){

    }
}
class Student {
    name: string;
    rollNumber : number;
    SchoolName: string;

    constructor(name:string,rollNumber:number, schoolName:string){
        this.name=name;
        this.rollNumber=rollNumber;
        this.SchoolName=schoolName;
    }
}
class Teacher extends Student{}

// school nanme
let school1 = new School("CMS")
let school2 = new School("Agha Khan")
let school3 = new School("St Patrick")

//student name
let s1 = new Student("Hania",24001,school1.name)
let s2 = new Student("Amna",24001,school1.name)
let s3 = new Student("Maryam",24001,school1.name)

/// teacher name
let t1 = new Teacher("Haseeb",30,school1.name)
let t2 = new Teacher("Faiza",26,school1.name)
let t3 = new Teacher("Waqar",28,school1.name)

///student
school1.addStudent(s1)
school2.addStudent(s2)
school3.addStudent(s3)

///teacher
school1.addTeacher(t1)
school2.addTeacher(t2)
school3.addTeacher(t3)

console.log(t1)
console.log(t2)
console.log(t3)

console.log(school1)
console.log(school2)
console.log(school3)