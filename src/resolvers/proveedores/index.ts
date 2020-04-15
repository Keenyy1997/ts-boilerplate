import { 
    Proveedores, 
    Proveedor,
    addProveedor as agregarProveedor,
    updateProveedor as actualizarProveedor,
    deleteProveedor as eliminarProveedor,
    Producto,
    Productos
 } from './../../db/index'

import { ApolloError } from 'apollo-server'

/**
 * @description Interface created to receive the information from the query `proveedores`
 */
interface ProveedoresQuery {
    id?: number;
}



/**
 * 
 * @param parent Parent information as (fields requested, etc)
 * @param args Information received as parameters
 */
export function proveedores(parent: object, args: ProveedoresQuery): Array<Proveedor> {


    const ProveedorId: number | undefined = args.id;

    if (ProveedorId) return Proveedores.filter((value) => value.id === ProveedorId);
    else return Proveedores;
} 

/**
 * 
 * @param parent Parent information as (fields requested, etc)
 * @param args Information received as parameters
 */
export function findProductos(parent: Proveedor): Array<Producto> {

    return Productos.filter((value) => value.proveedorId === parent.id);
} 

/**
 * @description Interface created to receive the information from the query `productos`
 */
interface ProveedorInterface {
    nombre: string;
    email: string;
}

interface ProveedorAddData {
    data: ProveedorInterface;
}

/**
 * 
 * @param parent Parent information as (fields requested, etc)
 * @param args Information received as parameters
 * @description Create a New Providor
 */
export function addProveedor(parent: object, args: ProveedorAddData): Proveedor {

    const ProveedorCreado: Proveedor = agregarProveedor(args.data);
    
    return ProveedorCreado;
} 


interface ProveedorUpdateInterface {
    id: number;
    data: ProveedorInterface;
}

/**
 * 
 * @param parent Parent information as (fields requested, etc)
 * @param args Information received as parameters
 * @description Update a Providor Information
 */
export function updateProveedor(parent: object, args: ProveedorUpdateInterface): Proveedor {

    const ProveedorActualizado: Proveedor | null = actualizarProveedor(args.id, args.data);

    // If is null, the Proveedor does not exists
    if (ProveedorActualizado === null) throw new ApolloError('Product does not exists', 'PROVIDOR_NOT_FOUND');

    return ProveedorActualizado;
} 

interface ProveedorDeleteInterface {
    id: number;
}

/**
 * 
 * @param parent Parent information as (fields requested, etc)
 * @param args Information received as parameters
 * @description Delete a Providor
 */
export function deleteProveedor(parent: object, args: ProveedorDeleteInterface): string {

    const ProveedorEliminado: boolean = eliminarProveedor(args.id);

    if (ProveedorEliminado === false) throw new ApolloError('Providor does not exists', 'PROVIDOR_NOT_FOUND');

    return 'Providor deleted successfully'
} 