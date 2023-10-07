export class User {
    
    private userId : number;
    private userName : string;
    private emailId : string;
    private password : string;
    private roles : string;

    constructor(userId : number, userName : string, emailId : string, password : string, userRole : string) {
        this.userId = userId;
        this.userName = userName;
        this.emailId = emailId;
        this.password = password;
        this.roles = userRole;
    }
}