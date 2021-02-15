export interface User {
    userId: number;
    user: string;
    password: string;
    name: string;
    lastName: string;
    lastNameMother: string;
    birthdate: string;
    gender: GenderType;
    isActive: boolean;
}

export enum GenderType {
    Masculino = "Masculino",
    Femenino = "Femenino"
}