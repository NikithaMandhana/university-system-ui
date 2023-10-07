export class Admin {
    
    private userId : number;
    private userName : string;
    private emailId : string;
    private password : string;

    constructor(userId : number, userName : string, emailId : string, password : string) {
        this.userId = userId;
        this.userName = userName;
        this.emailId = emailId;
        this.password = password;
    }
}