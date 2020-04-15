import { 
    Productos, 
    Producto, 
    Proveedores,
    addProducto as agregarProducto, 
    updateProducto as actualizarProducto,
    deleteProducto as eliminarProducto,
    Proveedor
} from './../../db/index'
import { ApolloError } from 'apollo-server'
/**
 * @description Interface created to receive the information from the query `productos`
 */
interface ProductosQuery {
    id?: number;
}



/**
 * 
 * @param parent Parent information as (fields requested, etc)
 * @param args Information received as parameters
 */
export function productos(parent: object, args: ProductosQuery): Array<Producto> {


    const ProductoId: number | undefined = args.id;

    if (ProductoId) return Productos.filter((value) => value.id === ProductoId);
    else return Productos;
} 

/**
 * 
 * @param parent Parent information as (fields requested, etc)
 * @param args Information received as parameters
 */
export function findProveedor(parent: Producto): Proveedor | null {

    return Proveedores.find((value) => value.id === parent.proveedorId) || null;    
} 

/**
 * @description Interface created to receive the information from the query `productos`
 */
interface ProductoInterface {
    nombre: string;
    precio: number;
    unidades: number;
    proveedorId: number;
}

interface ProductoAddData {
    data: ProductoInterface;
}

/**
 * 
 * @param parent Parent information as (fields requested, etc)
 * @param args Information received as parameters
 * @description Create a New Product
 */
export function addProducto(parent: object, args: ProductoAddData): Producto {

    const ProductoCreado: Producto = agregarProducto(args.data);
    
    console.log(ProductoCreado)

    return ProductoCreado;
} 


interface ProductoUpdateInterface {
    id: number;
    data: ProductoInterface;
}

/**
 * 
 * @param parent Parent information as (fields requested, etc)
 * @param args Information received as parameters
 * @description Update a Product Information
 */
export function updateProducto(parent: object, args: ProductoUpdateInterface): Producto {

    const ProductoActualizado: Producto | null = actualizarProducto(args.id, args.data);

    // If is null, the producto does not exists
    if (ProductoActualizado === null) throw new ApolloError('Product does not exists', 'PRODUCT_NOT_FOUND');

    return ProductoActualizado;
} 

interface ProductoDeleteInterface {
    id: number;
}

/**
 * 
 * @param parent Parent information as (fields requested, etc)
 * @param args Information received as parameters
 * @description Delete a Product
 */
export function deleteProducto(parent: object, args: ProductoDeleteInterface): string {

    const ProductoEliminado: boolean = eliminarProducto(args.id);

    if (ProductoEliminado === false) throw new ApolloError('Product does not exists', 'PRODUCT_NOT_FOUND');

    return 'Product deleted successfully'
} 