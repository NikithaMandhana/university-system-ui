import { Department } from "./department";

export class Faculty {
    facultyId : number;
    facultyName : string;
    specialization : string;
    age : number;
    gender : string;
    mobileNumber : number;
    designation : string;
    department : Department;

    constructor(facultyId : number, facultyName : string, specialization : string, age : number, gender : string, mobileNumber : number, designation : string, department : Department)
    {
        this.facultyId = facultyId;
        this.facultyName = facultyName;
        this.specialization = specialization;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.designation = designation;
        this.department = department;
    }
}