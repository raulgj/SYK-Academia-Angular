import * as moment from "moment";
import { Global } from "../common/global";
import { IEmails, GenderType, IUser } from "./iUser";

export class User implements IUser{
    userId: number = -1;
    user: string = "";
    password: string = "";
    name: string = "";
    lastName: string = "";
    lastNameMother: string = "";
    birthdate: Date = new Date;
    gender: GenderType = GenderType.Masculino;
    isActive: boolean = true;
    temails: IEmails[] = [];

    getUserToJS(usr : IUser){
        var vEmails = usr.temails; 

        if (usr.temails.length <= 0){
            vEmails.push(new Emails);
        }

        return {
            userId : usr.userId,
            user : usr.user, 
            password : usr.password, 
            name : usr.name, 
            lastName : usr.lastName, 
            lastNameMother : usr.lastNameMother, 
            birthdate : moment.utc(usr.birthdate.toString(), Global.dateFormat, true).toDate(), 
            gender : usr.gender, 
            isActive : usr.isActive, 
            temails : vEmails
        }
    }

    getUserToDB(usr : IUser){
        return {
            userId : usr.userId,
            user : usr.user, 
            password : usr.password, 
            name : usr.name, 
            lastName : usr.lastName, 
            lastNameMother : usr.lastNameMother, 
            birthdate : moment(usr.birthdate).format(Global.dateFormat), 
            gender : usr.gender, 
            isActive : (usr.isActive) ? 1 : 0, 
            temails : usr.temails
        }
    }
}


export class Emails implements IEmails{
    emailId: number = -1;
    email: string = "";
    isActive: boolean = true;
}