export interface IUser {
    userId: number;
    user: string;
    password: string;
    name: string;
    lastName: string;
    lastNameMother: string;
    birthdate: Date;
    gender: GenderType;
    isActive: boolean;
    temails: IEmails[];
}

export enum GenderType {
    Masculino = "Masculino",
    Femenino = "Femenino"
}

export interface IEmails {
    emailId: number;
    email: string;
    isActive: boolean;
}