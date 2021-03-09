
export interface Ingreso {
    ingresoId : number;
    proveedor: string;
    usuario: string;
    tipo_comprobante: string;
    serie_comprobante: string;
    num_comprobante: number;
    fecha_hora?: string;//TODO -> cambiar a tipo Date
    impuesto: number;
    total: number;
    estado: string;

}