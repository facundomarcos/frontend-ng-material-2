import { Persona } from "src/app/Personas/persona.model";

export interface Proveedor extends Persona{
    //personaId : number;
    //tipo_persona: string;
    //nombres: string;
    //apellidos: string;
    razon_social: string;
    //tipo_documento: string;
    //num_documento:string;
    //direccion: string;
    //telefono: string;
    //email: string;
    //estado: string;
    contacto?: string;
}