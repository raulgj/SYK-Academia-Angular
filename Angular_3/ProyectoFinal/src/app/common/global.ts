import * as moment from "moment";
import { GenderType } from "../services/iUser";

export class Global {
    public static dateFormat: string = "YYYY-M-DD";

    public static genderTypes : Array<any> = [
        {name : GenderType.Femenino, value : GenderType.Femenino},
        {name : GenderType.Masculino, value : GenderType.Masculino}
      ];
}

export function myFunction(){
    // Do something
}