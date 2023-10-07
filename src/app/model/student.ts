import { Department } from "./department";

export class Student {
    studentId : number;
    studentName : string;
    fatherName : string;
    age : number;
    gender : string;
    mobileNumber : number;
    enrollmentYear : number;
    department : Department;

    constructor(studentId : number, studentName : string, fatherName : string, age : number, gender : string, mobileNumber : number, enrollmentYear : number, department : Department) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.fatherName = fatherName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.enrollmentYear = enrollmentYear;
        this.department = department;
    }
}