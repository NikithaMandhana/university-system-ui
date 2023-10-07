export class Department {
    departmentId : number;
    departmentName : string;
    location : string;

    constructor(departmentId : number, departmentName : string, location : string) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
        this.location = location;
    }
}