/**
 * @description Interface from the provedor
 */
export interface Proveedor {
    id?: number;
    nombre: string;
    email: string;
}

/**
 * @description Informacion de los proveedores
 */
export let Proveedores: Array<Proveedor> = [
    {
        'id': 1,
        'nombre': 'Empresa de Ricardo',
        'email': 'ricardito@cosmicgo.co'
    },
    {
        'id': 2,
        'nombre': 'Empresa de Kenny',
        'email': 'kenny.vallejo@cosmicgo.co'
    },
    {
        'id': 3,
        'nombre': 'Empresa de Milton',
        'email': 'milton@cosmicgo.co'
    }
]


/**
 * 
 * @param data Data expected as the producto type
 * @description Add a Product to the List
 */
export function addProveedor(data: Proveedor): Proveedor {

    const LastProveedorIndex: number | undefined = Proveedores[Proveedores.length - 1]['id'];

    data['id'] = (LastProveedorIndex || 0) + 1;

    Proveedores.push(data);

    return Proveedores[Proveedores.length - 1];
}

/**
 * 
 * @param id Producto Id 
 * @param data Data expected as the producto type
 * @description Update a Product from the list
 */
export function updateProveedor(id: number, data: Proveedor): Proveedor | null {

    const ProveedorIndex: number = Proveedores.findIndex((value) => value.id === id);

    // If the Proveedor does not exists, return an empty Object
    if (ProveedorIndex === -1) return null;

    Proveedores[ProveedorIndex] = {...Proveedores[ProveedorIndex], ...data };

    return Proveedores[ProveedorIndex];
}

/**
 * 
 * @param id Producto Id
 * @description Delete a Product From The List
 */
export function deleteProveedor(id: number): boolean {

    const ProveedorIndex: number = Proveedores.findIndex((value) => value.id === id);

    // If the Producto does not exists, return an empty Object
    if (ProveedorIndex === -1) return false;

    Proveedores = Proveedores.splice(ProveedorIndex, 1);

    return true;
}

/**
 * @description Interface from the Producto
 */
export interface Producto {
    id?: number;
    nombre: string;
    unidades: number;
    precio: number;
    proveedorId: number;
}

/**
 * @description Informacion de los Productos
 */
export let Productos: Array<Producto> = [
    {
        'id': 1,
        'nombre': 'Producto de ID 1',
        'unidades': 5,
        'precio': 30.5,
        'proveedorId': 1
    },
    {
        'id': 2,
        'nombre': 'Producto de ID 2',
        'unidades': 3,
        'precio': 15,
        'proveedorId': 1
    },
    {
        'id': 3,
        'nombre': 'Producto de ID 3',
        'unidades': 2,
        'precio': 20,
        'proveedorId': 2
    },
    {
        'id': 4,
        'nombre': 'Producto de ID 4',
        'unidades': 6,
        'precio': 14,
        'proveedorId': 3
    }
]

/**
 * 
 * @param data Data expected as the producto type
 * @description Add a Product to the List
 */
export function addProducto(data: Producto): Producto {

    const LastProductIndex: number | undefined = Productos[Productos.length - 1]['id'];

    data['id'] = (LastProductIndex || 0) + 1;

    Productos.push(data);

    return Productos[Productos.length - 1];
}

/**
 * 
 * @param id Producto Id 
 * @param data Data expected as the producto type
 * @description Update a Product from the list
 */
export function updateProducto(id: number, data: Producto): Producto | null {

    const ProductoIndex: number = Productos.findIndex((value) => value.id === id);

    // If the Producto does not exists, return an empty Object
    if (ProductoIndex === -1) return null;

    Productos[ProductoIndex] = {...Productos[ProductoIndex], ...data };

    return Productos[ProductoIndex];
}

/**
 * 
 * @param id Producto Id
 * @description Delete a Product From The List
 */
export function deleteProducto(id: number): boolean {

    const ProductoIndex: number = Productos.findIndex((value) => value.id === id);

    // If the Producto does not exists, return an empty Object
    if (ProductoIndex === -1) return false;

    Productos = Productos.splice(ProductoIndex, 1);

    return true;
}