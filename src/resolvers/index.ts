import { IResolvers  } from 'apollo-server';
/* IMPORTAMOS LOS RESOLVERS */
import { productos, findProveedor, addProducto, updateProducto, deleteProducto } from './productos'
import { proveedores, findProductos, addProveedor, updateProveedor, deleteProveedor } from './proveedores'

// Our resolver(general) needs to be an object

/**
 * @description Function to load all resolvers. From Mutations to Queries
 */
export function loadResolvers(): IResolvers {

  return {
    Query: {
      productos,
      proveedores
    },
    Mutation: {
      // PRODUCTOS
      addProducto,
      updateProducto,
      deleteProducto,
      // PROVEEDORES
      addProveedor,
      updateProveedor,
      deleteProveedor
    },
    // Resolvers en base a types
    Producto: {
      proveedor: findProveedor
    },
    Proveedor: {
      productos: findProductos
    }
  }
}