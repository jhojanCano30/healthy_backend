
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Favorito
 * 
 */
export type Favorito = $Result.DefaultSelection<Prisma.$FavoritoPayload>
/**
 * Model ItemCarrito
 * 
 */
export type ItemCarrito = $Result.DefaultSelection<Prisma.$ItemCarritoPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model ItemPedido
 * 
 */
export type ItemPedido = $Result.DefaultSelection<Prisma.$ItemPedidoPayload>
/**
 * Model MateriaPrima
 * 
 */
export type MateriaPrima = $Result.DefaultSelection<Prisma.$MateriaPrimaPayload>
/**
 * Model MovimientoStock
 * 
 */
export type MovimientoStock = $Result.DefaultSelection<Prisma.$MovimientoStockPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  ADMIN: 'ADMIN',
  CLIENTE: 'CLIENTE'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const Categoria: {
  PERRO: 'PERRO',
  GATO: 'GATO'
};

export type Categoria = (typeof Categoria)[keyof typeof Categoria]


export const Subcategoria: {
  COMIDA_CRUDA: 'COMIDA_CRUDA',
  SNACK: 'SNACK'
};

export type Subcategoria = (typeof Subcategoria)[keyof typeof Subcategoria]


export const EstadoPedido: {
  PENDIENTE: 'PENDIENTE',
  PAGADO: 'PAGADO',
  ENVIADO: 'ENVIADO',
  ENTREGADO: 'ENTREGADO',
  CANCELADO: 'CANCELADO'
};

export type EstadoPedido = (typeof EstadoPedido)[keyof typeof EstadoPedido]


export const TipoMovimiento: {
  ENTRADA: 'ENTRADA',
  SALIDA: 'SALIDA'
};

export type TipoMovimiento = (typeof TipoMovimiento)[keyof typeof TipoMovimiento]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type Categoria = $Enums.Categoria

export const Categoria: typeof $Enums.Categoria

export type Subcategoria = $Enums.Subcategoria

export const Subcategoria: typeof $Enums.Subcategoria

export type EstadoPedido = $Enums.EstadoPedido

export const EstadoPedido: typeof $Enums.EstadoPedido

export type TipoMovimiento = $Enums.TipoMovimiento

export const TipoMovimiento: typeof $Enums.TipoMovimiento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **Favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.FavoritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemCarrito`: Exposes CRUD operations for the **ItemCarrito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemCarritos
    * const itemCarritos = await prisma.itemCarrito.findMany()
    * ```
    */
  get itemCarrito(): Prisma.ItemCarritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPedido`: Exposes CRUD operations for the **ItemPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPedidos
    * const itemPedidos = await prisma.itemPedido.findMany()
    * ```
    */
  get itemPedido(): Prisma.ItemPedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materiaPrima`: Exposes CRUD operations for the **MateriaPrima** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MateriaPrimas
    * const materiaPrimas = await prisma.materiaPrima.findMany()
    * ```
    */
  get materiaPrima(): Prisma.MateriaPrimaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimientoStock`: Exposes CRUD operations for the **MovimientoStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimientoStocks
    * const movimientoStocks = await prisma.movimientoStock.findMany()
    * ```
    */
  get movimientoStock(): Prisma.MovimientoStockDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Producto: 'Producto',
    Favorito: 'Favorito',
    ItemCarrito: 'ItemCarrito',
    Pedido: 'Pedido',
    ItemPedido: 'ItemPedido',
    MateriaPrima: 'MateriaPrima',
    MovimientoStock: 'MovimientoStock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "producto" | "favorito" | "itemCarrito" | "pedido" | "itemPedido" | "materiaPrima" | "movimientoStock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Favorito: {
        payload: Prisma.$FavoritoPayload<ExtArgs>
        fields: Prisma.FavoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findFirst: {
            args: Prisma.FavoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findMany: {
            args: Prisma.FavoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          create: {
            args: Prisma.FavoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          createMany: {
            args: Prisma.FavoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          update: {
            args: Prisma.FavoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          deleteMany: {
            args: Prisma.FavoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.FavoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      ItemCarrito: {
        payload: Prisma.$ItemCarritoPayload<ExtArgs>
        fields: Prisma.ItemCarritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemCarritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemCarritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarritoPayload>
          }
          findFirst: {
            args: Prisma.ItemCarritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemCarritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarritoPayload>
          }
          findMany: {
            args: Prisma.ItemCarritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarritoPayload>[]
          }
          create: {
            args: Prisma.ItemCarritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarritoPayload>
          }
          createMany: {
            args: Prisma.ItemCarritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemCarritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarritoPayload>
          }
          update: {
            args: Prisma.ItemCarritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarritoPayload>
          }
          deleteMany: {
            args: Prisma.ItemCarritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemCarritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemCarritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCarritoPayload>
          }
          aggregate: {
            args: Prisma.ItemCarritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemCarrito>
          }
          groupBy: {
            args: Prisma.ItemCarritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemCarritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCarritoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCarritoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      ItemPedido: {
        payload: Prisma.$ItemPedidoPayload<ExtArgs>
        fields: Prisma.ItemPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findFirst: {
            args: Prisma.ItemPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findMany: {
            args: Prisma.ItemPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          create: {
            args: Prisma.ItemPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          createMany: {
            args: Prisma.ItemPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          update: {
            args: Prisma.ItemPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          aggregate: {
            args: Prisma.ItemPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPedido>
          }
          groupBy: {
            args: Prisma.ItemPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoCountAggregateOutputType> | number
          }
        }
      }
      MateriaPrima: {
        payload: Prisma.$MateriaPrimaPayload<ExtArgs>
        fields: Prisma.MateriaPrimaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaPrimaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPrimaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaPrimaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPrimaPayload>
          }
          findFirst: {
            args: Prisma.MateriaPrimaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPrimaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaPrimaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPrimaPayload>
          }
          findMany: {
            args: Prisma.MateriaPrimaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPrimaPayload>[]
          }
          create: {
            args: Prisma.MateriaPrimaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPrimaPayload>
          }
          createMany: {
            args: Prisma.MateriaPrimaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MateriaPrimaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPrimaPayload>
          }
          update: {
            args: Prisma.MateriaPrimaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPrimaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaPrimaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaPrimaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MateriaPrimaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPrimaPayload>
          }
          aggregate: {
            args: Prisma.MateriaPrimaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateriaPrima>
          }
          groupBy: {
            args: Prisma.MateriaPrimaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaPrimaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaPrimaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaPrimaCountAggregateOutputType> | number
          }
        }
      }
      MovimientoStock: {
        payload: Prisma.$MovimientoStockPayload<ExtArgs>
        fields: Prisma.MovimientoStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimientoStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimientoStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          findFirst: {
            args: Prisma.MovimientoStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimientoStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          findMany: {
            args: Prisma.MovimientoStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>[]
          }
          create: {
            args: Prisma.MovimientoStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          createMany: {
            args: Prisma.MovimientoStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovimientoStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          update: {
            args: Prisma.MovimientoStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          deleteMany: {
            args: Prisma.MovimientoStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimientoStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovimientoStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoStockPayload>
          }
          aggregate: {
            args: Prisma.MovimientoStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimientoStock>
          }
          groupBy: {
            args: Prisma.MovimientoStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimientoStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimientoStockCountArgs<ExtArgs>
            result: $Utils.Optional<MovimientoStockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    producto?: ProductoOmit
    favorito?: FavoritoOmit
    itemCarrito?: ItemCarritoOmit
    pedido?: PedidoOmit
    itemPedido?: ItemPedidoOmit
    materiaPrima?: MateriaPrimaOmit
    movimientoStock?: MovimientoStockOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    favoritos: number
    carrito: number
    pedidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | UsuarioCountOutputTypeCountFavoritosArgs
    carrito?: boolean | UsuarioCountOutputTypeCountCarritoArgs
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCarritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCarritoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    favoritos: number
    itemsPedido: number
    itemCarrito: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | ProductoCountOutputTypeCountFavoritosArgs
    itemsPedido?: boolean | ProductoCountOutputTypeCountItemsPedidoArgs
    itemCarrito?: boolean | ProductoCountOutputTypeCountItemCarritoArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountItemsPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountItemCarritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCarritoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    items: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PedidoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type MateriaPrimaCountOutputType
   */

  export type MateriaPrimaCountOutputType = {
    movimientos: number
  }

  export type MateriaPrimaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimientos?: boolean | MateriaPrimaCountOutputTypeCountMovimientosArgs
  }

  // Custom InputTypes
  /**
   * MateriaPrimaCountOutputType without action
   */
  export type MateriaPrimaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrimaCountOutputType
     */
    select?: MateriaPrimaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaPrimaCountOutputType without action
   */
  export type MateriaPrimaCountOutputTypeCountMovimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoStockWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    contrasena: string | null
    rol: $Enums.Rol | null
    creadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    contrasena: string | null
    rol: $Enums.Rol | null
    creadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    contrasena: number
    rol: number
    creadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
    rol?: true
    creadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
    rol?: true
    creadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
    rol?: true
    creadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    contrasena: string
    rol: $Enums.Rol
    creadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    contrasena?: boolean
    rol?: boolean
    creadoEn?: boolean
    favoritos?: boolean | Usuario$favoritosArgs<ExtArgs>
    carrito?: boolean | Usuario$carritoArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    contrasena?: boolean
    rol?: boolean
    creadoEn?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "contrasena" | "rol" | "creadoEn", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | Usuario$favoritosArgs<ExtArgs>
    carrito?: boolean | Usuario$carritoArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      carrito: Prisma.$ItemCarritoPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      contrasena: string
      rol: $Enums.Rol
      creadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favoritos<T extends Usuario$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carrito<T extends Usuario$carritoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$carritoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.favoritos
   */
  export type Usuario$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Usuario.carrito
   */
  export type Usuario$carritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    where?: ItemCarritoWhereInput
    orderBy?: ItemCarritoOrderByWithRelationInput | ItemCarritoOrderByWithRelationInput[]
    cursor?: ItemCarritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemCarritoScalarFieldEnum | ItemCarritoScalarFieldEnum[]
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    compartido: boolean | null
    imagenUrl: string | null
    categoria: $Enums.Categoria | null
    subcategoria: $Enums.Subcategoria | null
    creadoEn: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    compartido: boolean | null
    imagenUrl: string | null
    categoria: $Enums.Categoria | null
    subcategoria: $Enums.Subcategoria | null
    creadoEn: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    stock: number
    compartido: number
    imagenUrl: number
    categoria: number
    subcategoria: number
    creadoEn: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    compartido?: true
    imagenUrl?: true
    categoria?: true
    subcategoria?: true
    creadoEn?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    compartido?: true
    imagenUrl?: true
    categoria?: true
    subcategoria?: true
    creadoEn?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    compartido?: true
    imagenUrl?: true
    categoria?: true
    subcategoria?: true
    creadoEn?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    compartido: boolean
    imagenUrl: string | null
    categoria: $Enums.Categoria
    subcategoria: $Enums.Subcategoria
    creadoEn: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    compartido?: boolean
    imagenUrl?: boolean
    categoria?: boolean
    subcategoria?: boolean
    creadoEn?: boolean
    favoritos?: boolean | Producto$favoritosArgs<ExtArgs>
    itemsPedido?: boolean | Producto$itemsPedidoArgs<ExtArgs>
    itemCarrito?: boolean | Producto$itemCarritoArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    compartido?: boolean
    imagenUrl?: boolean
    categoria?: boolean
    subcategoria?: boolean
    creadoEn?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "stock" | "compartido" | "imagenUrl" | "categoria" | "subcategoria" | "creadoEn", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | Producto$favoritosArgs<ExtArgs>
    itemsPedido?: boolean | Producto$itemsPedidoArgs<ExtArgs>
    itemCarrito?: boolean | Producto$itemCarritoArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      itemsPedido: Prisma.$ItemPedidoPayload<ExtArgs>[]
      itemCarrito: Prisma.$ItemCarritoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precio: number
      stock: number
      compartido: boolean
      imagenUrl: string | null
      categoria: $Enums.Categoria
      subcategoria: $Enums.Subcategoria
      creadoEn: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favoritos<T extends Producto$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Producto$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itemsPedido<T extends Producto$itemsPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Producto$itemsPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itemCarrito<T extends Producto$itemCarritoArgs<ExtArgs> = {}>(args?: Subset<T, Producto$itemCarritoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Float'>
    readonly stock: FieldRef<"Producto", 'Int'>
    readonly compartido: FieldRef<"Producto", 'Boolean'>
    readonly imagenUrl: FieldRef<"Producto", 'String'>
    readonly categoria: FieldRef<"Producto", 'Categoria'>
    readonly subcategoria: FieldRef<"Producto", 'Subcategoria'>
    readonly creadoEn: FieldRef<"Producto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.favoritos
   */
  export type Producto$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Producto.itemsPedido
   */
  export type Producto$itemsPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Producto.itemCarrito
   */
  export type Producto$itemCarritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    where?: ItemCarritoWhereInput
    orderBy?: ItemCarritoOrderByWithRelationInput | ItemCarritoOrderByWithRelationInput[]
    cursor?: ItemCarritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemCarritoScalarFieldEnum | ItemCarritoScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _avg: FavoritoAvgAggregateOutputType | null
    _sum: FavoritoSumAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    productoId: number | null
  }

  export type FavoritoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    productoId: number | null
  }

  export type FavoritoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    productoId: number | null
    creadoEn: Date | null
  }

  export type FavoritoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    productoId: number | null
    creadoEn: Date | null
  }

  export type FavoritoCountAggregateOutputType = {
    id: number
    usuarioId: number
    productoId: number
    creadoEn: number
    _all: number
  }


  export type FavoritoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    productoId?: true
  }

  export type FavoritoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    productoId?: true
  }

  export type FavoritoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    productoId?: true
    creadoEn?: true
  }

  export type FavoritoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    productoId?: true
    creadoEn?: true
  }

  export type FavoritoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    productoId?: true
    creadoEn?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorito to aggregate.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type FavoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithAggregationInput | FavoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: FavoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _avg?: FavoritoAvgAggregateInputType
    _sum?: FavoritoSumAggregateInputType
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    id: number
    usuarioId: number
    productoId: number
    creadoEn: Date
    _count: FavoritoCountAggregateOutputType | null
    _avg: FavoritoAvgAggregateOutputType | null
    _sum: FavoritoSumAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends FavoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type FavoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    productoId?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>



  export type FavoritoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    productoId?: boolean
    creadoEn?: boolean
  }

  export type FavoritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "productoId" | "creadoEn", ExtArgs["result"]["favorito"]>
  export type FavoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $FavoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorito"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      productoId: number
      creadoEn: Date
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type FavoritoGetPayload<S extends boolean | null | undefined | FavoritoDefaultArgs> = $Result.GetResult<Prisma.$FavoritoPayload, S>

  type FavoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface FavoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorito'], meta: { name: 'Favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {FavoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritoFindUniqueArgs>(args: SelectSubset<T, FavoritoFindUniqueArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritoFindFirstArgs>(args?: SelectSubset<T, FavoritoFindFirstArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritoWithIdOnly = await prisma.favorito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritoFindManyArgs>(args?: SelectSubset<T, FavoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorito.
     * @param {FavoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends FavoritoCreateArgs>(args: SelectSubset<T, FavoritoCreateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {FavoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritoCreateManyArgs>(args?: SelectSubset<T, FavoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favorito.
     * @param {FavoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends FavoritoDeleteArgs>(args: SelectSubset<T, FavoritoDeleteArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorito.
     * @param {FavoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritoUpdateArgs>(args: SelectSubset<T, FavoritoUpdateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritoDeleteManyArgs>(args?: SelectSubset<T, FavoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritoUpdateManyArgs>(args: SelectSubset<T, FavoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorito.
     * @param {FavoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends FavoritoUpsertArgs>(args: SelectSubset<T, FavoritoUpsertArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritoCountArgs>(
      args?: Subset<T, FavoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritoGroupByArgs['orderBy'] }
        : { orderBy?: FavoritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorito model
   */
  readonly fields: FavoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorito model
   */
  interface FavoritoFieldRefs {
    readonly id: FieldRef<"Favorito", 'Int'>
    readonly usuarioId: FieldRef<"Favorito", 'Int'>
    readonly productoId: FieldRef<"Favorito", 'Int'>
    readonly creadoEn: FieldRef<"Favorito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorito findUnique
   */
  export type FavoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findUniqueOrThrow
   */
  export type FavoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findFirst
   */
  export type FavoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findFirstOrThrow
   */
  export type FavoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findMany
   */
  export type FavoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito create
   */
  export type FavoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorito.
     */
    data: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
  }

  /**
   * Favorito createMany
   */
  export type FavoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorito update
   */
  export type FavoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorito.
     */
    data: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
    /**
     * Choose, which Favorito to update.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito updateMany
   */
  export type FavoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
  }

  /**
   * Favorito upsert
   */
  export type FavoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorito to update in case it exists.
     */
    where: FavoritoWhereUniqueInput
    /**
     * In case the Favorito found by the `where` argument doesn't exist, create a new Favorito with this data.
     */
    create: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
    /**
     * In case the Favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
  }

  /**
   * Favorito delete
   */
  export type FavoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter which Favorito to delete.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito deleteMany
   */
  export type FavoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to delete.
     */
    limit?: number
  }

  /**
   * Favorito without action
   */
  export type FavoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
  }


  /**
   * Model ItemCarrito
   */

  export type AggregateItemCarrito = {
    _count: ItemCarritoCountAggregateOutputType | null
    _avg: ItemCarritoAvgAggregateOutputType | null
    _sum: ItemCarritoSumAggregateOutputType | null
    _min: ItemCarritoMinAggregateOutputType | null
    _max: ItemCarritoMaxAggregateOutputType | null
  }

  export type ItemCarritoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type ItemCarritoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type ItemCarritoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type ItemCarritoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type ItemCarritoCountAggregateOutputType = {
    id: number
    usuarioId: number
    productoId: number
    cantidad: number
    _all: number
  }


  export type ItemCarritoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    productoId?: true
    cantidad?: true
  }

  export type ItemCarritoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    productoId?: true
    cantidad?: true
  }

  export type ItemCarritoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    productoId?: true
    cantidad?: true
  }

  export type ItemCarritoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    productoId?: true
    cantidad?: true
  }

  export type ItemCarritoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    productoId?: true
    cantidad?: true
    _all?: true
  }

  export type ItemCarritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCarrito to aggregate.
     */
    where?: ItemCarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCarritos to fetch.
     */
    orderBy?: ItemCarritoOrderByWithRelationInput | ItemCarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemCarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCarritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCarritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemCarritos
    **/
    _count?: true | ItemCarritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemCarritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemCarritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemCarritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemCarritoMaxAggregateInputType
  }

  export type GetItemCarritoAggregateType<T extends ItemCarritoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemCarrito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemCarrito[P]>
      : GetScalarType<T[P], AggregateItemCarrito[P]>
  }




  export type ItemCarritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCarritoWhereInput
    orderBy?: ItemCarritoOrderByWithAggregationInput | ItemCarritoOrderByWithAggregationInput[]
    by: ItemCarritoScalarFieldEnum[] | ItemCarritoScalarFieldEnum
    having?: ItemCarritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCarritoCountAggregateInputType | true
    _avg?: ItemCarritoAvgAggregateInputType
    _sum?: ItemCarritoSumAggregateInputType
    _min?: ItemCarritoMinAggregateInputType
    _max?: ItemCarritoMaxAggregateInputType
  }

  export type ItemCarritoGroupByOutputType = {
    id: number
    usuarioId: number
    productoId: number
    cantidad: number
    _count: ItemCarritoCountAggregateOutputType | null
    _avg: ItemCarritoAvgAggregateOutputType | null
    _sum: ItemCarritoSumAggregateOutputType | null
    _min: ItemCarritoMinAggregateOutputType | null
    _max: ItemCarritoMaxAggregateOutputType | null
  }

  type GetItemCarritoGroupByPayload<T extends ItemCarritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemCarritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemCarritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemCarritoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemCarritoGroupByOutputType[P]>
        }
      >
    >


  export type ItemCarritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    productoId?: boolean
    cantidad?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCarrito"]>



  export type ItemCarritoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    productoId?: boolean
    cantidad?: boolean
  }

  export type ItemCarritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "productoId" | "cantidad", ExtArgs["result"]["itemCarrito"]>
  export type ItemCarritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $ItemCarritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemCarrito"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      productoId: number
      cantidad: number
    }, ExtArgs["result"]["itemCarrito"]>
    composites: {}
  }

  type ItemCarritoGetPayload<S extends boolean | null | undefined | ItemCarritoDefaultArgs> = $Result.GetResult<Prisma.$ItemCarritoPayload, S>

  type ItemCarritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemCarritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCarritoCountAggregateInputType | true
    }

  export interface ItemCarritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemCarrito'], meta: { name: 'ItemCarrito' } }
    /**
     * Find zero or one ItemCarrito that matches the filter.
     * @param {ItemCarritoFindUniqueArgs} args - Arguments to find a ItemCarrito
     * @example
     * // Get one ItemCarrito
     * const itemCarrito = await prisma.itemCarrito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemCarritoFindUniqueArgs>(args: SelectSubset<T, ItemCarritoFindUniqueArgs<ExtArgs>>): Prisma__ItemCarritoClient<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemCarrito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemCarritoFindUniqueOrThrowArgs} args - Arguments to find a ItemCarrito
     * @example
     * // Get one ItemCarrito
     * const itemCarrito = await prisma.itemCarrito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemCarritoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemCarritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemCarritoClient<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemCarrito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarritoFindFirstArgs} args - Arguments to find a ItemCarrito
     * @example
     * // Get one ItemCarrito
     * const itemCarrito = await prisma.itemCarrito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemCarritoFindFirstArgs>(args?: SelectSubset<T, ItemCarritoFindFirstArgs<ExtArgs>>): Prisma__ItemCarritoClient<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemCarrito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarritoFindFirstOrThrowArgs} args - Arguments to find a ItemCarrito
     * @example
     * // Get one ItemCarrito
     * const itemCarrito = await prisma.itemCarrito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemCarritoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemCarritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemCarritoClient<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemCarritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemCarritos
     * const itemCarritos = await prisma.itemCarrito.findMany()
     * 
     * // Get first 10 ItemCarritos
     * const itemCarritos = await prisma.itemCarrito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemCarritoWithIdOnly = await prisma.itemCarrito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemCarritoFindManyArgs>(args?: SelectSubset<T, ItemCarritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemCarrito.
     * @param {ItemCarritoCreateArgs} args - Arguments to create a ItemCarrito.
     * @example
     * // Create one ItemCarrito
     * const ItemCarrito = await prisma.itemCarrito.create({
     *   data: {
     *     // ... data to create a ItemCarrito
     *   }
     * })
     * 
     */
    create<T extends ItemCarritoCreateArgs>(args: SelectSubset<T, ItemCarritoCreateArgs<ExtArgs>>): Prisma__ItemCarritoClient<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemCarritos.
     * @param {ItemCarritoCreateManyArgs} args - Arguments to create many ItemCarritos.
     * @example
     * // Create many ItemCarritos
     * const itemCarrito = await prisma.itemCarrito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCarritoCreateManyArgs>(args?: SelectSubset<T, ItemCarritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemCarrito.
     * @param {ItemCarritoDeleteArgs} args - Arguments to delete one ItemCarrito.
     * @example
     * // Delete one ItemCarrito
     * const ItemCarrito = await prisma.itemCarrito.delete({
     *   where: {
     *     // ... filter to delete one ItemCarrito
     *   }
     * })
     * 
     */
    delete<T extends ItemCarritoDeleteArgs>(args: SelectSubset<T, ItemCarritoDeleteArgs<ExtArgs>>): Prisma__ItemCarritoClient<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemCarrito.
     * @param {ItemCarritoUpdateArgs} args - Arguments to update one ItemCarrito.
     * @example
     * // Update one ItemCarrito
     * const itemCarrito = await prisma.itemCarrito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemCarritoUpdateArgs>(args: SelectSubset<T, ItemCarritoUpdateArgs<ExtArgs>>): Prisma__ItemCarritoClient<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemCarritos.
     * @param {ItemCarritoDeleteManyArgs} args - Arguments to filter ItemCarritos to delete.
     * @example
     * // Delete a few ItemCarritos
     * const { count } = await prisma.itemCarrito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemCarritoDeleteManyArgs>(args?: SelectSubset<T, ItemCarritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCarritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemCarritos
     * const itemCarrito = await prisma.itemCarrito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemCarritoUpdateManyArgs>(args: SelectSubset<T, ItemCarritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemCarrito.
     * @param {ItemCarritoUpsertArgs} args - Arguments to update or create a ItemCarrito.
     * @example
     * // Update or create a ItemCarrito
     * const itemCarrito = await prisma.itemCarrito.upsert({
     *   create: {
     *     // ... data to create a ItemCarrito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemCarrito we want to update
     *   }
     * })
     */
    upsert<T extends ItemCarritoUpsertArgs>(args: SelectSubset<T, ItemCarritoUpsertArgs<ExtArgs>>): Prisma__ItemCarritoClient<$Result.GetResult<Prisma.$ItemCarritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemCarritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarritoCountArgs} args - Arguments to filter ItemCarritos to count.
     * @example
     * // Count the number of ItemCarritos
     * const count = await prisma.itemCarrito.count({
     *   where: {
     *     // ... the filter for the ItemCarritos we want to count
     *   }
     * })
    **/
    count<T extends ItemCarritoCountArgs>(
      args?: Subset<T, ItemCarritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCarritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemCarrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemCarritoAggregateArgs>(args: Subset<T, ItemCarritoAggregateArgs>): Prisma.PrismaPromise<GetItemCarritoAggregateType<T>>

    /**
     * Group by ItemCarrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCarritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemCarritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemCarritoGroupByArgs['orderBy'] }
        : { orderBy?: ItemCarritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemCarritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemCarrito model
   */
  readonly fields: ItemCarritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemCarrito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemCarritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemCarrito model
   */
  interface ItemCarritoFieldRefs {
    readonly id: FieldRef<"ItemCarrito", 'Int'>
    readonly usuarioId: FieldRef<"ItemCarrito", 'Int'>
    readonly productoId: FieldRef<"ItemCarrito", 'Int'>
    readonly cantidad: FieldRef<"ItemCarrito", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemCarrito findUnique
   */
  export type ItemCarritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    /**
     * Filter, which ItemCarrito to fetch.
     */
    where: ItemCarritoWhereUniqueInput
  }

  /**
   * ItemCarrito findUniqueOrThrow
   */
  export type ItemCarritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    /**
     * Filter, which ItemCarrito to fetch.
     */
    where: ItemCarritoWhereUniqueInput
  }

  /**
   * ItemCarrito findFirst
   */
  export type ItemCarritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    /**
     * Filter, which ItemCarrito to fetch.
     */
    where?: ItemCarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCarritos to fetch.
     */
    orderBy?: ItemCarritoOrderByWithRelationInput | ItemCarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCarritos.
     */
    cursor?: ItemCarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCarritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCarritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCarritos.
     */
    distinct?: ItemCarritoScalarFieldEnum | ItemCarritoScalarFieldEnum[]
  }

  /**
   * ItemCarrito findFirstOrThrow
   */
  export type ItemCarritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    /**
     * Filter, which ItemCarrito to fetch.
     */
    where?: ItemCarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCarritos to fetch.
     */
    orderBy?: ItemCarritoOrderByWithRelationInput | ItemCarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCarritos.
     */
    cursor?: ItemCarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCarritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCarritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCarritos.
     */
    distinct?: ItemCarritoScalarFieldEnum | ItemCarritoScalarFieldEnum[]
  }

  /**
   * ItemCarrito findMany
   */
  export type ItemCarritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    /**
     * Filter, which ItemCarritos to fetch.
     */
    where?: ItemCarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCarritos to fetch.
     */
    orderBy?: ItemCarritoOrderByWithRelationInput | ItemCarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemCarritos.
     */
    cursor?: ItemCarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCarritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCarritos.
     */
    skip?: number
    distinct?: ItemCarritoScalarFieldEnum | ItemCarritoScalarFieldEnum[]
  }

  /**
   * ItemCarrito create
   */
  export type ItemCarritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemCarrito.
     */
    data: XOR<ItemCarritoCreateInput, ItemCarritoUncheckedCreateInput>
  }

  /**
   * ItemCarrito createMany
   */
  export type ItemCarritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemCarritos.
     */
    data: ItemCarritoCreateManyInput | ItemCarritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemCarrito update
   */
  export type ItemCarritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemCarrito.
     */
    data: XOR<ItemCarritoUpdateInput, ItemCarritoUncheckedUpdateInput>
    /**
     * Choose, which ItemCarrito to update.
     */
    where: ItemCarritoWhereUniqueInput
  }

  /**
   * ItemCarrito updateMany
   */
  export type ItemCarritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemCarritos.
     */
    data: XOR<ItemCarritoUpdateManyMutationInput, ItemCarritoUncheckedUpdateManyInput>
    /**
     * Filter which ItemCarritos to update
     */
    where?: ItemCarritoWhereInput
    /**
     * Limit how many ItemCarritos to update.
     */
    limit?: number
  }

  /**
   * ItemCarrito upsert
   */
  export type ItemCarritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemCarrito to update in case it exists.
     */
    where: ItemCarritoWhereUniqueInput
    /**
     * In case the ItemCarrito found by the `where` argument doesn't exist, create a new ItemCarrito with this data.
     */
    create: XOR<ItemCarritoCreateInput, ItemCarritoUncheckedCreateInput>
    /**
     * In case the ItemCarrito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemCarritoUpdateInput, ItemCarritoUncheckedUpdateInput>
  }

  /**
   * ItemCarrito delete
   */
  export type ItemCarritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
    /**
     * Filter which ItemCarrito to delete.
     */
    where: ItemCarritoWhereUniqueInput
  }

  /**
   * ItemCarrito deleteMany
   */
  export type ItemCarritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCarritos to delete
     */
    where?: ItemCarritoWhereInput
    /**
     * Limit how many ItemCarritos to delete.
     */
    limit?: number
  }

  /**
   * ItemCarrito without action
   */
  export type ItemCarritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCarrito
     */
    select?: ItemCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCarrito
     */
    omit?: ItemCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCarritoInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    total: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    total: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    total: number | null
    estado: $Enums.EstadoPedido | null
    direccion: string | null
    creadoEn: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    total: number | null
    estado: $Enums.EstadoPedido | null
    direccion: string | null
    creadoEn: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    usuarioId: number
    total: number
    estado: number
    direccion: number
    creadoEn: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    total?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    total?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    total?: true
    estado?: true
    direccion?: true
    creadoEn?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    total?: true
    estado?: true
    direccion?: true
    creadoEn?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    total?: true
    estado?: true
    direccion?: true
    creadoEn?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    usuarioId: number
    total: number
    estado: $Enums.EstadoPedido
    direccion: string
    creadoEn: Date
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    total?: boolean
    estado?: boolean
    direccion?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    items?: boolean | Pedido$itemsArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type PedidoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    total?: boolean
    estado?: boolean
    direccion?: boolean
    creadoEn?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "total" | "estado" | "direccion" | "creadoEn", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    items?: boolean | Pedido$itemsArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      items: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      total: number
      estado: $Enums.EstadoPedido
      direccion: string
      creadoEn: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Pedido$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly usuarioId: FieldRef<"Pedido", 'Int'>
    readonly total: FieldRef<"Pedido", 'Float'>
    readonly estado: FieldRef<"Pedido", 'EstadoPedido'>
    readonly direccion: FieldRef<"Pedido", 'String'>
    readonly creadoEn: FieldRef<"Pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.items
   */
  export type Pedido$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPedido
   */

  export type AggregateItemPedido = {
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  export type ItemPedidoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: number | null
  }

  export type ItemPedidoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: number | null
  }

  export type ItemPedidoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: number | null
  }

  export type ItemPedidoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: number | null
  }

  export type ItemPedidoCountAggregateOutputType = {
    id: number
    pedidoId: number
    productoId: number
    cantidad: number
    precioUnitario: number
    _all: number
  }


  export type ItemPedidoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type ItemPedidoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type ItemPedidoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type ItemPedidoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type ItemPedidoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    _all?: true
  }

  export type ItemPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedido to aggregate.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPedidos
    **/
    _count?: true | ItemPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type GetItemPedidoAggregateType<T extends ItemPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPedido[P]>
      : GetScalarType<T[P], AggregateItemPedido[P]>
  }




  export type ItemPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithAggregationInput | ItemPedidoOrderByWithAggregationInput[]
    by: ItemPedidoScalarFieldEnum[] | ItemPedidoScalarFieldEnum
    having?: ItemPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPedidoCountAggregateInputType | true
    _avg?: ItemPedidoAvgAggregateInputType
    _sum?: ItemPedidoSumAggregateInputType
    _min?: ItemPedidoMinAggregateInputType
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type ItemPedidoGroupByOutputType = {
    id: number
    pedidoId: number
    productoId: number
    cantidad: number
    precioUnitario: number
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  type GetItemPedidoGroupByPayload<T extends ItemPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>



  export type ItemPedidoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
  }

  export type ItemPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "productoId" | "cantidad" | "precioUnitario", ExtArgs["result"]["itemPedido"]>
  export type ItemPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $ItemPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPedido"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      productoId: number
      cantidad: number
      precioUnitario: number
    }, ExtArgs["result"]["itemPedido"]>
    composites: {}
  }

  type ItemPedidoGetPayload<S extends boolean | null | undefined | ItemPedidoDefaultArgs> = $Result.GetResult<Prisma.$ItemPedidoPayload, S>

  type ItemPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPedidoCountAggregateInputType | true
    }

  export interface ItemPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPedido'], meta: { name: 'ItemPedido' } }
    /**
     * Find zero or one ItemPedido that matches the filter.
     * @param {ItemPedidoFindUniqueArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPedidoFindUniqueArgs>(args: SelectSubset<T, ItemPedidoFindUniqueArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPedidoFindUniqueOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPedidoFindFirstArgs>(args?: SelectSubset<T, ItemPedidoFindFirstArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany()
     * 
     * // Get first 10 ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPedidoFindManyArgs>(args?: SelectSubset<T, ItemPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPedido.
     * @param {ItemPedidoCreateArgs} args - Arguments to create a ItemPedido.
     * @example
     * // Create one ItemPedido
     * const ItemPedido = await prisma.itemPedido.create({
     *   data: {
     *     // ... data to create a ItemPedido
     *   }
     * })
     * 
     */
    create<T extends ItemPedidoCreateArgs>(args: SelectSubset<T, ItemPedidoCreateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPedidos.
     * @param {ItemPedidoCreateManyArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPedidoCreateManyArgs>(args?: SelectSubset<T, ItemPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemPedido.
     * @param {ItemPedidoDeleteArgs} args - Arguments to delete one ItemPedido.
     * @example
     * // Delete one ItemPedido
     * const ItemPedido = await prisma.itemPedido.delete({
     *   where: {
     *     // ... filter to delete one ItemPedido
     *   }
     * })
     * 
     */
    delete<T extends ItemPedidoDeleteArgs>(args: SelectSubset<T, ItemPedidoDeleteArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPedido.
     * @param {ItemPedidoUpdateArgs} args - Arguments to update one ItemPedido.
     * @example
     * // Update one ItemPedido
     * const itemPedido = await prisma.itemPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPedidoUpdateArgs>(args: SelectSubset<T, ItemPedidoUpdateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPedidos.
     * @param {ItemPedidoDeleteManyArgs} args - Arguments to filter ItemPedidos to delete.
     * @example
     * // Delete a few ItemPedidos
     * const { count } = await prisma.itemPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPedidoDeleteManyArgs>(args?: SelectSubset<T, ItemPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPedidoUpdateManyArgs>(args: SelectSubset<T, ItemPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemPedido.
     * @param {ItemPedidoUpsertArgs} args - Arguments to update or create a ItemPedido.
     * @example
     * // Update or create a ItemPedido
     * const itemPedido = await prisma.itemPedido.upsert({
     *   create: {
     *     // ... data to create a ItemPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPedido we want to update
     *   }
     * })
     */
    upsert<T extends ItemPedidoUpsertArgs>(args: SelectSubset<T, ItemPedidoUpsertArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoCountArgs} args - Arguments to filter ItemPedidos to count.
     * @example
     * // Count the number of ItemPedidos
     * const count = await prisma.itemPedido.count({
     *   where: {
     *     // ... the filter for the ItemPedidos we want to count
     *   }
     * })
    **/
    count<T extends ItemPedidoCountArgs>(
      args?: Subset<T, ItemPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPedidoAggregateArgs>(args: Subset<T, ItemPedidoAggregateArgs>): Prisma.PrismaPromise<GetItemPedidoAggregateType<T>>

    /**
     * Group by ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPedido model
   */
  readonly fields: ItemPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPedido model
   */
  interface ItemPedidoFieldRefs {
    readonly id: FieldRef<"ItemPedido", 'Int'>
    readonly pedidoId: FieldRef<"ItemPedido", 'Int'>
    readonly productoId: FieldRef<"ItemPedido", 'Int'>
    readonly cantidad: FieldRef<"ItemPedido", 'Int'>
    readonly precioUnitario: FieldRef<"ItemPedido", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ItemPedido findUnique
   */
  export type ItemPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findUniqueOrThrow
   */
  export type ItemPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findFirst
   */
  export type ItemPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findFirstOrThrow
   */
  export type ItemPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findMany
   */
  export type ItemPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedidos to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido create
   */
  export type ItemPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPedido.
     */
    data: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
  }

  /**
   * ItemPedido createMany
   */
  export type ItemPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemPedido update
   */
  export type ItemPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPedido.
     */
    data: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
    /**
     * Choose, which ItemPedido to update.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido updateMany
   */
  export type ItemPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
  }

  /**
   * ItemPedido upsert
   */
  export type ItemPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPedido to update in case it exists.
     */
    where: ItemPedidoWhereUniqueInput
    /**
     * In case the ItemPedido found by the `where` argument doesn't exist, create a new ItemPedido with this data.
     */
    create: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
    /**
     * In case the ItemPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
  }

  /**
   * ItemPedido delete
   */
  export type ItemPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter which ItemPedido to delete.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido deleteMany
   */
  export type ItemPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedidos to delete
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to delete.
     */
    limit?: number
  }

  /**
   * ItemPedido without action
   */
  export type ItemPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
  }


  /**
   * Model MateriaPrima
   */

  export type AggregateMateriaPrima = {
    _count: MateriaPrimaCountAggregateOutputType | null
    _avg: MateriaPrimaAvgAggregateOutputType | null
    _sum: MateriaPrimaSumAggregateOutputType | null
    _min: MateriaPrimaMinAggregateOutputType | null
    _max: MateriaPrimaMaxAggregateOutputType | null
  }

  export type MateriaPrimaAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
  }

  export type MateriaPrimaSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
  }

  export type MateriaPrimaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    cantidad: number | null
    unidad: string | null
    creadoEn: Date | null
  }

  export type MateriaPrimaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    cantidad: number | null
    unidad: string | null
    creadoEn: Date | null
  }

  export type MateriaPrimaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    cantidad: number
    unidad: number
    creadoEn: number
    _all: number
  }


  export type MateriaPrimaAvgAggregateInputType = {
    id?: true
    cantidad?: true
  }

  export type MateriaPrimaSumAggregateInputType = {
    id?: true
    cantidad?: true
  }

  export type MateriaPrimaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    cantidad?: true
    unidad?: true
    creadoEn?: true
  }

  export type MateriaPrimaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    cantidad?: true
    unidad?: true
    creadoEn?: true
  }

  export type MateriaPrimaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    cantidad?: true
    unidad?: true
    creadoEn?: true
    _all?: true
  }

  export type MateriaPrimaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MateriaPrima to aggregate.
     */
    where?: MateriaPrimaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriaPrimas to fetch.
     */
    orderBy?: MateriaPrimaOrderByWithRelationInput | MateriaPrimaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaPrimaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriaPrimas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriaPrimas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MateriaPrimas
    **/
    _count?: true | MateriaPrimaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaPrimaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaPrimaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaPrimaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaPrimaMaxAggregateInputType
  }

  export type GetMateriaPrimaAggregateType<T extends MateriaPrimaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateriaPrima]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateriaPrima[P]>
      : GetScalarType<T[P], AggregateMateriaPrima[P]>
  }




  export type MateriaPrimaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaPrimaWhereInput
    orderBy?: MateriaPrimaOrderByWithAggregationInput | MateriaPrimaOrderByWithAggregationInput[]
    by: MateriaPrimaScalarFieldEnum[] | MateriaPrimaScalarFieldEnum
    having?: MateriaPrimaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaPrimaCountAggregateInputType | true
    _avg?: MateriaPrimaAvgAggregateInputType
    _sum?: MateriaPrimaSumAggregateInputType
    _min?: MateriaPrimaMinAggregateInputType
    _max?: MateriaPrimaMaxAggregateInputType
  }

  export type MateriaPrimaGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    cantidad: number
    unidad: string
    creadoEn: Date
    _count: MateriaPrimaCountAggregateOutputType | null
    _avg: MateriaPrimaAvgAggregateOutputType | null
    _sum: MateriaPrimaSumAggregateOutputType | null
    _min: MateriaPrimaMinAggregateOutputType | null
    _max: MateriaPrimaMaxAggregateOutputType | null
  }

  type GetMateriaPrimaGroupByPayload<T extends MateriaPrimaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaPrimaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaPrimaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaPrimaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaPrimaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaPrimaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    cantidad?: boolean
    unidad?: boolean
    creadoEn?: boolean
    movimientos?: boolean | MateriaPrima$movimientosArgs<ExtArgs>
    _count?: boolean | MateriaPrimaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiaPrima"]>



  export type MateriaPrimaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    cantidad?: boolean
    unidad?: boolean
    creadoEn?: boolean
  }

  export type MateriaPrimaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "cantidad" | "unidad" | "creadoEn", ExtArgs["result"]["materiaPrima"]>
  export type MateriaPrimaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimientos?: boolean | MateriaPrima$movimientosArgs<ExtArgs>
    _count?: boolean | MateriaPrimaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MateriaPrimaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MateriaPrima"
    objects: {
      movimientos: Prisma.$MovimientoStockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      cantidad: number
      unidad: string
      creadoEn: Date
    }, ExtArgs["result"]["materiaPrima"]>
    composites: {}
  }

  type MateriaPrimaGetPayload<S extends boolean | null | undefined | MateriaPrimaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPrimaPayload, S>

  type MateriaPrimaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaPrimaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaPrimaCountAggregateInputType | true
    }

  export interface MateriaPrimaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MateriaPrima'], meta: { name: 'MateriaPrima' } }
    /**
     * Find zero or one MateriaPrima that matches the filter.
     * @param {MateriaPrimaFindUniqueArgs} args - Arguments to find a MateriaPrima
     * @example
     * // Get one MateriaPrima
     * const materiaPrima = await prisma.materiaPrima.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaPrimaFindUniqueArgs>(args: SelectSubset<T, MateriaPrimaFindUniqueArgs<ExtArgs>>): Prisma__MateriaPrimaClient<$Result.GetResult<Prisma.$MateriaPrimaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MateriaPrima that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaPrimaFindUniqueOrThrowArgs} args - Arguments to find a MateriaPrima
     * @example
     * // Get one MateriaPrima
     * const materiaPrima = await prisma.materiaPrima.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaPrimaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaPrimaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaPrimaClient<$Result.GetResult<Prisma.$MateriaPrimaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MateriaPrima that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaPrimaFindFirstArgs} args - Arguments to find a MateriaPrima
     * @example
     * // Get one MateriaPrima
     * const materiaPrima = await prisma.materiaPrima.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaPrimaFindFirstArgs>(args?: SelectSubset<T, MateriaPrimaFindFirstArgs<ExtArgs>>): Prisma__MateriaPrimaClient<$Result.GetResult<Prisma.$MateriaPrimaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MateriaPrima that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaPrimaFindFirstOrThrowArgs} args - Arguments to find a MateriaPrima
     * @example
     * // Get one MateriaPrima
     * const materiaPrima = await prisma.materiaPrima.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaPrimaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaPrimaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaPrimaClient<$Result.GetResult<Prisma.$MateriaPrimaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MateriaPrimas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaPrimaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MateriaPrimas
     * const materiaPrimas = await prisma.materiaPrima.findMany()
     * 
     * // Get first 10 MateriaPrimas
     * const materiaPrimas = await prisma.materiaPrima.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiaPrimaWithIdOnly = await prisma.materiaPrima.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriaPrimaFindManyArgs>(args?: SelectSubset<T, MateriaPrimaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPrimaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MateriaPrima.
     * @param {MateriaPrimaCreateArgs} args - Arguments to create a MateriaPrima.
     * @example
     * // Create one MateriaPrima
     * const MateriaPrima = await prisma.materiaPrima.create({
     *   data: {
     *     // ... data to create a MateriaPrima
     *   }
     * })
     * 
     */
    create<T extends MateriaPrimaCreateArgs>(args: SelectSubset<T, MateriaPrimaCreateArgs<ExtArgs>>): Prisma__MateriaPrimaClient<$Result.GetResult<Prisma.$MateriaPrimaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MateriaPrimas.
     * @param {MateriaPrimaCreateManyArgs} args - Arguments to create many MateriaPrimas.
     * @example
     * // Create many MateriaPrimas
     * const materiaPrima = await prisma.materiaPrima.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaPrimaCreateManyArgs>(args?: SelectSubset<T, MateriaPrimaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MateriaPrima.
     * @param {MateriaPrimaDeleteArgs} args - Arguments to delete one MateriaPrima.
     * @example
     * // Delete one MateriaPrima
     * const MateriaPrima = await prisma.materiaPrima.delete({
     *   where: {
     *     // ... filter to delete one MateriaPrima
     *   }
     * })
     * 
     */
    delete<T extends MateriaPrimaDeleteArgs>(args: SelectSubset<T, MateriaPrimaDeleteArgs<ExtArgs>>): Prisma__MateriaPrimaClient<$Result.GetResult<Prisma.$MateriaPrimaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MateriaPrima.
     * @param {MateriaPrimaUpdateArgs} args - Arguments to update one MateriaPrima.
     * @example
     * // Update one MateriaPrima
     * const materiaPrima = await prisma.materiaPrima.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaPrimaUpdateArgs>(args: SelectSubset<T, MateriaPrimaUpdateArgs<ExtArgs>>): Prisma__MateriaPrimaClient<$Result.GetResult<Prisma.$MateriaPrimaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MateriaPrimas.
     * @param {MateriaPrimaDeleteManyArgs} args - Arguments to filter MateriaPrimas to delete.
     * @example
     * // Delete a few MateriaPrimas
     * const { count } = await prisma.materiaPrima.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaPrimaDeleteManyArgs>(args?: SelectSubset<T, MateriaPrimaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MateriaPrimas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaPrimaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MateriaPrimas
     * const materiaPrima = await prisma.materiaPrima.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaPrimaUpdateManyArgs>(args: SelectSubset<T, MateriaPrimaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MateriaPrima.
     * @param {MateriaPrimaUpsertArgs} args - Arguments to update or create a MateriaPrima.
     * @example
     * // Update or create a MateriaPrima
     * const materiaPrima = await prisma.materiaPrima.upsert({
     *   create: {
     *     // ... data to create a MateriaPrima
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MateriaPrima we want to update
     *   }
     * })
     */
    upsert<T extends MateriaPrimaUpsertArgs>(args: SelectSubset<T, MateriaPrimaUpsertArgs<ExtArgs>>): Prisma__MateriaPrimaClient<$Result.GetResult<Prisma.$MateriaPrimaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MateriaPrimas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaPrimaCountArgs} args - Arguments to filter MateriaPrimas to count.
     * @example
     * // Count the number of MateriaPrimas
     * const count = await prisma.materiaPrima.count({
     *   where: {
     *     // ... the filter for the MateriaPrimas we want to count
     *   }
     * })
    **/
    count<T extends MateriaPrimaCountArgs>(
      args?: Subset<T, MateriaPrimaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaPrimaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MateriaPrima.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaPrimaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriaPrimaAggregateArgs>(args: Subset<T, MateriaPrimaAggregateArgs>): Prisma.PrismaPromise<GetMateriaPrimaAggregateType<T>>

    /**
     * Group by MateriaPrima.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaPrimaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriaPrimaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaPrimaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaPrimaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriaPrimaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaPrimaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MateriaPrima model
   */
  readonly fields: MateriaPrimaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MateriaPrima.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaPrimaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movimientos<T extends MateriaPrima$movimientosArgs<ExtArgs> = {}>(args?: Subset<T, MateriaPrima$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MateriaPrima model
   */
  interface MateriaPrimaFieldRefs {
    readonly id: FieldRef<"MateriaPrima", 'Int'>
    readonly nombre: FieldRef<"MateriaPrima", 'String'>
    readonly descripcion: FieldRef<"MateriaPrima", 'String'>
    readonly cantidad: FieldRef<"MateriaPrima", 'Float'>
    readonly unidad: FieldRef<"MateriaPrima", 'String'>
    readonly creadoEn: FieldRef<"MateriaPrima", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MateriaPrima findUnique
   */
  export type MateriaPrimaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrima
     */
    select?: MateriaPrimaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaPrima
     */
    omit?: MateriaPrimaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaPrimaInclude<ExtArgs> | null
    /**
     * Filter, which MateriaPrima to fetch.
     */
    where: MateriaPrimaWhereUniqueInput
  }

  /**
   * MateriaPrima findUniqueOrThrow
   */
  export type MateriaPrimaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrima
     */
    select?: MateriaPrimaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaPrima
     */
    omit?: MateriaPrimaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaPrimaInclude<ExtArgs> | null
    /**
     * Filter, which MateriaPrima to fetch.
     */
    where: MateriaPrimaWhereUniqueInput
  }

  /**
   * MateriaPrima findFirst
   */
  export type MateriaPrimaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrima
     */
    select?: MateriaPrimaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaPrima
     */
    omit?: MateriaPrimaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaPrimaInclude<ExtArgs> | null
    /**
     * Filter, which MateriaPrima to fetch.
     */
    where?: MateriaPrimaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriaPrimas to fetch.
     */
    orderBy?: MateriaPrimaOrderByWithRelationInput | MateriaPrimaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MateriaPrimas.
     */
    cursor?: MateriaPrimaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriaPrimas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriaPrimas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MateriaPrimas.
     */
    distinct?: MateriaPrimaScalarFieldEnum | MateriaPrimaScalarFieldEnum[]
  }

  /**
   * MateriaPrima findFirstOrThrow
   */
  export type MateriaPrimaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrima
     */
    select?: MateriaPrimaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaPrima
     */
    omit?: MateriaPrimaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaPrimaInclude<ExtArgs> | null
    /**
     * Filter, which MateriaPrima to fetch.
     */
    where?: MateriaPrimaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriaPrimas to fetch.
     */
    orderBy?: MateriaPrimaOrderByWithRelationInput | MateriaPrimaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MateriaPrimas.
     */
    cursor?: MateriaPrimaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriaPrimas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriaPrimas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MateriaPrimas.
     */
    distinct?: MateriaPrimaScalarFieldEnum | MateriaPrimaScalarFieldEnum[]
  }

  /**
   * MateriaPrima findMany
   */
  export type MateriaPrimaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrima
     */
    select?: MateriaPrimaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaPrima
     */
    omit?: MateriaPrimaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaPrimaInclude<ExtArgs> | null
    /**
     * Filter, which MateriaPrimas to fetch.
     */
    where?: MateriaPrimaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriaPrimas to fetch.
     */
    orderBy?: MateriaPrimaOrderByWithRelationInput | MateriaPrimaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MateriaPrimas.
     */
    cursor?: MateriaPrimaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriaPrimas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriaPrimas.
     */
    skip?: number
    distinct?: MateriaPrimaScalarFieldEnum | MateriaPrimaScalarFieldEnum[]
  }

  /**
   * MateriaPrima create
   */
  export type MateriaPrimaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrima
     */
    select?: MateriaPrimaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaPrima
     */
    omit?: MateriaPrimaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaPrimaInclude<ExtArgs> | null
    /**
     * The data needed to create a MateriaPrima.
     */
    data: XOR<MateriaPrimaCreateInput, MateriaPrimaUncheckedCreateInput>
  }

  /**
   * MateriaPrima createMany
   */
  export type MateriaPrimaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MateriaPrimas.
     */
    data: MateriaPrimaCreateManyInput | MateriaPrimaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MateriaPrima update
   */
  export type MateriaPrimaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrima
     */
    select?: MateriaPrimaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaPrima
     */
    omit?: MateriaPrimaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaPrimaInclude<ExtArgs> | null
    /**
     * The data needed to update a MateriaPrima.
     */
    data: XOR<MateriaPrimaUpdateInput, MateriaPrimaUncheckedUpdateInput>
    /**
     * Choose, which MateriaPrima to update.
     */
    where: MateriaPrimaWhereUniqueInput
  }

  /**
   * MateriaPrima updateMany
   */
  export type MateriaPrimaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MateriaPrimas.
     */
    data: XOR<MateriaPrimaUpdateManyMutationInput, MateriaPrimaUncheckedUpdateManyInput>
    /**
     * Filter which MateriaPrimas to update
     */
    where?: MateriaPrimaWhereInput
    /**
     * Limit how many MateriaPrimas to update.
     */
    limit?: number
  }

  /**
   * MateriaPrima upsert
   */
  export type MateriaPrimaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrima
     */
    select?: MateriaPrimaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaPrima
     */
    omit?: MateriaPrimaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaPrimaInclude<ExtArgs> | null
    /**
     * The filter to search for the MateriaPrima to update in case it exists.
     */
    where: MateriaPrimaWhereUniqueInput
    /**
     * In case the MateriaPrima found by the `where` argument doesn't exist, create a new MateriaPrima with this data.
     */
    create: XOR<MateriaPrimaCreateInput, MateriaPrimaUncheckedCreateInput>
    /**
     * In case the MateriaPrima was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaPrimaUpdateInput, MateriaPrimaUncheckedUpdateInput>
  }

  /**
   * MateriaPrima delete
   */
  export type MateriaPrimaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrima
     */
    select?: MateriaPrimaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaPrima
     */
    omit?: MateriaPrimaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaPrimaInclude<ExtArgs> | null
    /**
     * Filter which MateriaPrima to delete.
     */
    where: MateriaPrimaWhereUniqueInput
  }

  /**
   * MateriaPrima deleteMany
   */
  export type MateriaPrimaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MateriaPrimas to delete
     */
    where?: MateriaPrimaWhereInput
    /**
     * Limit how many MateriaPrimas to delete.
     */
    limit?: number
  }

  /**
   * MateriaPrima.movimientos
   */
  export type MateriaPrima$movimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    where?: MovimientoStockWhereInput
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    cursor?: MovimientoStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoStockScalarFieldEnum | MovimientoStockScalarFieldEnum[]
  }

  /**
   * MateriaPrima without action
   */
  export type MateriaPrimaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaPrima
     */
    select?: MateriaPrimaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaPrima
     */
    omit?: MateriaPrimaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaPrimaInclude<ExtArgs> | null
  }


  /**
   * Model MovimientoStock
   */

  export type AggregateMovimientoStock = {
    _count: MovimientoStockCountAggregateOutputType | null
    _avg: MovimientoStockAvgAggregateOutputType | null
    _sum: MovimientoStockSumAggregateOutputType | null
    _min: MovimientoStockMinAggregateOutputType | null
    _max: MovimientoStockMaxAggregateOutputType | null
  }

  export type MovimientoStockAvgAggregateOutputType = {
    id: number | null
    materiaPrimaId: number | null
    cantidad: number | null
  }

  export type MovimientoStockSumAggregateOutputType = {
    id: number | null
    materiaPrimaId: number | null
    cantidad: number | null
  }

  export type MovimientoStockMinAggregateOutputType = {
    id: number | null
    materiaPrimaId: number | null
    tipo: $Enums.TipoMovimiento | null
    cantidad: number | null
    nota: string | null
    creadoEn: Date | null
  }

  export type MovimientoStockMaxAggregateOutputType = {
    id: number | null
    materiaPrimaId: number | null
    tipo: $Enums.TipoMovimiento | null
    cantidad: number | null
    nota: string | null
    creadoEn: Date | null
  }

  export type MovimientoStockCountAggregateOutputType = {
    id: number
    materiaPrimaId: number
    tipo: number
    cantidad: number
    nota: number
    creadoEn: number
    _all: number
  }


  export type MovimientoStockAvgAggregateInputType = {
    id?: true
    materiaPrimaId?: true
    cantidad?: true
  }

  export type MovimientoStockSumAggregateInputType = {
    id?: true
    materiaPrimaId?: true
    cantidad?: true
  }

  export type MovimientoStockMinAggregateInputType = {
    id?: true
    materiaPrimaId?: true
    tipo?: true
    cantidad?: true
    nota?: true
    creadoEn?: true
  }

  export type MovimientoStockMaxAggregateInputType = {
    id?: true
    materiaPrimaId?: true
    tipo?: true
    cantidad?: true
    nota?: true
    creadoEn?: true
  }

  export type MovimientoStockCountAggregateInputType = {
    id?: true
    materiaPrimaId?: true
    tipo?: true
    cantidad?: true
    nota?: true
    creadoEn?: true
    _all?: true
  }

  export type MovimientoStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoStock to aggregate.
     */
    where?: MovimientoStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoStocks to fetch.
     */
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimientoStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimientoStocks
    **/
    _count?: true | MovimientoStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimientoStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimientoStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimientoStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimientoStockMaxAggregateInputType
  }

  export type GetMovimientoStockAggregateType<T extends MovimientoStockAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimientoStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimientoStock[P]>
      : GetScalarType<T[P], AggregateMovimientoStock[P]>
  }




  export type MovimientoStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoStockWhereInput
    orderBy?: MovimientoStockOrderByWithAggregationInput | MovimientoStockOrderByWithAggregationInput[]
    by: MovimientoStockScalarFieldEnum[] | MovimientoStockScalarFieldEnum
    having?: MovimientoStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimientoStockCountAggregateInputType | true
    _avg?: MovimientoStockAvgAggregateInputType
    _sum?: MovimientoStockSumAggregateInputType
    _min?: MovimientoStockMinAggregateInputType
    _max?: MovimientoStockMaxAggregateInputType
  }

  export type MovimientoStockGroupByOutputType = {
    id: number
    materiaPrimaId: number
    tipo: $Enums.TipoMovimiento
    cantidad: number
    nota: string | null
    creadoEn: Date
    _count: MovimientoStockCountAggregateOutputType | null
    _avg: MovimientoStockAvgAggregateOutputType | null
    _sum: MovimientoStockSumAggregateOutputType | null
    _min: MovimientoStockMinAggregateOutputType | null
    _max: MovimientoStockMaxAggregateOutputType | null
  }

  type GetMovimientoStockGroupByPayload<T extends MovimientoStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientoStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimientoStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimientoStockGroupByOutputType[P]>
            : GetScalarType<T[P], MovimientoStockGroupByOutputType[P]>
        }
      >
    >


  export type MovimientoStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materiaPrimaId?: boolean
    tipo?: boolean
    cantidad?: boolean
    nota?: boolean
    creadoEn?: boolean
    materiaPrima?: boolean | MateriaPrimaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoStock"]>



  export type MovimientoStockSelectScalar = {
    id?: boolean
    materiaPrimaId?: boolean
    tipo?: boolean
    cantidad?: boolean
    nota?: boolean
    creadoEn?: boolean
  }

  export type MovimientoStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materiaPrimaId" | "tipo" | "cantidad" | "nota" | "creadoEn", ExtArgs["result"]["movimientoStock"]>
  export type MovimientoStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materiaPrima?: boolean | MateriaPrimaDefaultArgs<ExtArgs>
  }

  export type $MovimientoStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimientoStock"
    objects: {
      materiaPrima: Prisma.$MateriaPrimaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      materiaPrimaId: number
      tipo: $Enums.TipoMovimiento
      cantidad: number
      nota: string | null
      creadoEn: Date
    }, ExtArgs["result"]["movimientoStock"]>
    composites: {}
  }

  type MovimientoStockGetPayload<S extends boolean | null | undefined | MovimientoStockDefaultArgs> = $Result.GetResult<Prisma.$MovimientoStockPayload, S>

  type MovimientoStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimientoStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimientoStockCountAggregateInputType | true
    }

  export interface MovimientoStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimientoStock'], meta: { name: 'MovimientoStock' } }
    /**
     * Find zero or one MovimientoStock that matches the filter.
     * @param {MovimientoStockFindUniqueArgs} args - Arguments to find a MovimientoStock
     * @example
     * // Get one MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimientoStockFindUniqueArgs>(args: SelectSubset<T, MovimientoStockFindUniqueArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimientoStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimientoStockFindUniqueOrThrowArgs} args - Arguments to find a MovimientoStock
     * @example
     * // Get one MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimientoStockFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimientoStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockFindFirstArgs} args - Arguments to find a MovimientoStock
     * @example
     * // Get one MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimientoStockFindFirstArgs>(args?: SelectSubset<T, MovimientoStockFindFirstArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockFindFirstOrThrowArgs} args - Arguments to find a MovimientoStock
     * @example
     * // Get one MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimientoStockFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimientoStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimientoStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimientoStocks
     * const movimientoStocks = await prisma.movimientoStock.findMany()
     * 
     * // Get first 10 MovimientoStocks
     * const movimientoStocks = await prisma.movimientoStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimientoStockWithIdOnly = await prisma.movimientoStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimientoStockFindManyArgs>(args?: SelectSubset<T, MovimientoStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimientoStock.
     * @param {MovimientoStockCreateArgs} args - Arguments to create a MovimientoStock.
     * @example
     * // Create one MovimientoStock
     * const MovimientoStock = await prisma.movimientoStock.create({
     *   data: {
     *     // ... data to create a MovimientoStock
     *   }
     * })
     * 
     */
    create<T extends MovimientoStockCreateArgs>(args: SelectSubset<T, MovimientoStockCreateArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimientoStocks.
     * @param {MovimientoStockCreateManyArgs} args - Arguments to create many MovimientoStocks.
     * @example
     * // Create many MovimientoStocks
     * const movimientoStock = await prisma.movimientoStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimientoStockCreateManyArgs>(args?: SelectSubset<T, MovimientoStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovimientoStock.
     * @param {MovimientoStockDeleteArgs} args - Arguments to delete one MovimientoStock.
     * @example
     * // Delete one MovimientoStock
     * const MovimientoStock = await prisma.movimientoStock.delete({
     *   where: {
     *     // ... filter to delete one MovimientoStock
     *   }
     * })
     * 
     */
    delete<T extends MovimientoStockDeleteArgs>(args: SelectSubset<T, MovimientoStockDeleteArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimientoStock.
     * @param {MovimientoStockUpdateArgs} args - Arguments to update one MovimientoStock.
     * @example
     * // Update one MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimientoStockUpdateArgs>(args: SelectSubset<T, MovimientoStockUpdateArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimientoStocks.
     * @param {MovimientoStockDeleteManyArgs} args - Arguments to filter MovimientoStocks to delete.
     * @example
     * // Delete a few MovimientoStocks
     * const { count } = await prisma.movimientoStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimientoStockDeleteManyArgs>(args?: SelectSubset<T, MovimientoStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimientoStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimientoStocks
     * const movimientoStock = await prisma.movimientoStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimientoStockUpdateManyArgs>(args: SelectSubset<T, MovimientoStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovimientoStock.
     * @param {MovimientoStockUpsertArgs} args - Arguments to update or create a MovimientoStock.
     * @example
     * // Update or create a MovimientoStock
     * const movimientoStock = await prisma.movimientoStock.upsert({
     *   create: {
     *     // ... data to create a MovimientoStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimientoStock we want to update
     *   }
     * })
     */
    upsert<T extends MovimientoStockUpsertArgs>(args: SelectSubset<T, MovimientoStockUpsertArgs<ExtArgs>>): Prisma__MovimientoStockClient<$Result.GetResult<Prisma.$MovimientoStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimientoStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockCountArgs} args - Arguments to filter MovimientoStocks to count.
     * @example
     * // Count the number of MovimientoStocks
     * const count = await prisma.movimientoStock.count({
     *   where: {
     *     // ... the filter for the MovimientoStocks we want to count
     *   }
     * })
    **/
    count<T extends MovimientoStockCountArgs>(
      args?: Subset<T, MovimientoStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimientoStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimientoStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovimientoStockAggregateArgs>(args: Subset<T, MovimientoStockAggregateArgs>): Prisma.PrismaPromise<GetMovimientoStockAggregateType<T>>

    /**
     * Group by MovimientoStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovimientoStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimientoStockGroupByArgs['orderBy'] }
        : { orderBy?: MovimientoStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovimientoStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovimientoStock model
   */
  readonly fields: MovimientoStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimientoStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimientoStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materiaPrima<T extends MateriaPrimaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaPrimaDefaultArgs<ExtArgs>>): Prisma__MateriaPrimaClient<$Result.GetResult<Prisma.$MateriaPrimaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovimientoStock model
   */
  interface MovimientoStockFieldRefs {
    readonly id: FieldRef<"MovimientoStock", 'Int'>
    readonly materiaPrimaId: FieldRef<"MovimientoStock", 'Int'>
    readonly tipo: FieldRef<"MovimientoStock", 'TipoMovimiento'>
    readonly cantidad: FieldRef<"MovimientoStock", 'Float'>
    readonly nota: FieldRef<"MovimientoStock", 'String'>
    readonly creadoEn: FieldRef<"MovimientoStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MovimientoStock findUnique
   */
  export type MovimientoStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoStock to fetch.
     */
    where: MovimientoStockWhereUniqueInput
  }

  /**
   * MovimientoStock findUniqueOrThrow
   */
  export type MovimientoStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoStock to fetch.
     */
    where: MovimientoStockWhereUniqueInput
  }

  /**
   * MovimientoStock findFirst
   */
  export type MovimientoStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoStock to fetch.
     */
    where?: MovimientoStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoStocks to fetch.
     */
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoStocks.
     */
    cursor?: MovimientoStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoStocks.
     */
    distinct?: MovimientoStockScalarFieldEnum | MovimientoStockScalarFieldEnum[]
  }

  /**
   * MovimientoStock findFirstOrThrow
   */
  export type MovimientoStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoStock to fetch.
     */
    where?: MovimientoStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoStocks to fetch.
     */
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoStocks.
     */
    cursor?: MovimientoStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoStocks.
     */
    distinct?: MovimientoStockScalarFieldEnum | MovimientoStockScalarFieldEnum[]
  }

  /**
   * MovimientoStock findMany
   */
  export type MovimientoStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoStocks to fetch.
     */
    where?: MovimientoStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoStocks to fetch.
     */
    orderBy?: MovimientoStockOrderByWithRelationInput | MovimientoStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimientoStocks.
     */
    cursor?: MovimientoStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoStocks.
     */
    skip?: number
    distinct?: MovimientoStockScalarFieldEnum | MovimientoStockScalarFieldEnum[]
  }

  /**
   * MovimientoStock create
   */
  export type MovimientoStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimientoStock.
     */
    data: XOR<MovimientoStockCreateInput, MovimientoStockUncheckedCreateInput>
  }

  /**
   * MovimientoStock createMany
   */
  export type MovimientoStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimientoStocks.
     */
    data: MovimientoStockCreateManyInput | MovimientoStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovimientoStock update
   */
  export type MovimientoStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimientoStock.
     */
    data: XOR<MovimientoStockUpdateInput, MovimientoStockUncheckedUpdateInput>
    /**
     * Choose, which MovimientoStock to update.
     */
    where: MovimientoStockWhereUniqueInput
  }

  /**
   * MovimientoStock updateMany
   */
  export type MovimientoStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimientoStocks.
     */
    data: XOR<MovimientoStockUpdateManyMutationInput, MovimientoStockUncheckedUpdateManyInput>
    /**
     * Filter which MovimientoStocks to update
     */
    where?: MovimientoStockWhereInput
    /**
     * Limit how many MovimientoStocks to update.
     */
    limit?: number
  }

  /**
   * MovimientoStock upsert
   */
  export type MovimientoStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimientoStock to update in case it exists.
     */
    where: MovimientoStockWhereUniqueInput
    /**
     * In case the MovimientoStock found by the `where` argument doesn't exist, create a new MovimientoStock with this data.
     */
    create: XOR<MovimientoStockCreateInput, MovimientoStockUncheckedCreateInput>
    /**
     * In case the MovimientoStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimientoStockUpdateInput, MovimientoStockUncheckedUpdateInput>
  }

  /**
   * MovimientoStock delete
   */
  export type MovimientoStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
    /**
     * Filter which MovimientoStock to delete.
     */
    where: MovimientoStockWhereUniqueInput
  }

  /**
   * MovimientoStock deleteMany
   */
  export type MovimientoStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoStocks to delete
     */
    where?: MovimientoStockWhereInput
    /**
     * Limit how many MovimientoStocks to delete.
     */
    limit?: number
  }

  /**
   * MovimientoStock without action
   */
  export type MovimientoStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoStock
     */
    select?: MovimientoStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoStock
     */
    omit?: MovimientoStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoStockInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    contrasena: 'contrasena',
    rol: 'rol',
    creadoEn: 'creadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    stock: 'stock',
    compartido: 'compartido',
    imagenUrl: 'imagenUrl',
    categoria: 'categoria',
    subcategoria: 'subcategoria',
    creadoEn: 'creadoEn'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    productoId: 'productoId',
    creadoEn: 'creadoEn'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const ItemCarritoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    productoId: 'productoId',
    cantidad: 'cantidad'
  };

  export type ItemCarritoScalarFieldEnum = (typeof ItemCarritoScalarFieldEnum)[keyof typeof ItemCarritoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    total: 'total',
    estado: 'estado',
    direccion: 'direccion',
    creadoEn: 'creadoEn'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ItemPedidoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario'
  };

  export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum]


  export const MateriaPrimaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    cantidad: 'cantidad',
    unidad: 'unidad',
    creadoEn: 'creadoEn'
  };

  export type MateriaPrimaScalarFieldEnum = (typeof MateriaPrimaScalarFieldEnum)[keyof typeof MateriaPrimaScalarFieldEnum]


  export const MovimientoStockScalarFieldEnum: {
    id: 'id',
    materiaPrimaId: 'materiaPrimaId',
    tipo: 'tipo',
    cantidad: 'cantidad',
    nota: 'nota',
    creadoEn: 'creadoEn'
  };

  export type MovimientoStockScalarFieldEnum = (typeof MovimientoStockScalarFieldEnum)[keyof typeof MovimientoStockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    correo: 'correo',
    contrasena: 'contrasena'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProductoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagenUrl: 'imagenUrl'
  };

  export type ProductoOrderByRelevanceFieldEnum = (typeof ProductoOrderByRelevanceFieldEnum)[keyof typeof ProductoOrderByRelevanceFieldEnum]


  export const PedidoOrderByRelevanceFieldEnum: {
    direccion: 'direccion'
  };

  export type PedidoOrderByRelevanceFieldEnum = (typeof PedidoOrderByRelevanceFieldEnum)[keyof typeof PedidoOrderByRelevanceFieldEnum]


  export const MateriaPrimaOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    unidad: 'unidad'
  };

  export type MateriaPrimaOrderByRelevanceFieldEnum = (typeof MateriaPrimaOrderByRelevanceFieldEnum)[keyof typeof MateriaPrimaOrderByRelevanceFieldEnum]


  export const MovimientoStockOrderByRelevanceFieldEnum: {
    nota: 'nota'
  };

  export type MovimientoStockOrderByRelevanceFieldEnum = (typeof MovimientoStockOrderByRelevanceFieldEnum)[keyof typeof MovimientoStockOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Categoria'
   */
  export type EnumCategoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Categoria'>
    


  /**
   * Reference to a field of type 'Subcategoria'
   */
  export type EnumSubcategoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subcategoria'>
    


  /**
   * Reference to a field of type 'EstadoPedido'
   */
  export type EnumEstadoPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPedido'>
    


  /**
   * Reference to a field of type 'TipoMovimiento'
   */
  export type EnumTipoMovimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimiento'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    favoritos?: FavoritoListRelationFilter
    carrito?: ItemCarritoListRelationFilter
    pedidos?: PedidoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
    favoritos?: FavoritoOrderByRelationAggregateInput
    carrito?: ItemCarritoOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    favoritos?: FavoritoListRelationFilter
    carrito?: ItemCarritoListRelationFilter
    pedidos?: PedidoListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    compartido?: BoolFilter<"Producto"> | boolean
    imagenUrl?: StringNullableFilter<"Producto"> | string | null
    categoria?: EnumCategoriaFilter<"Producto"> | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFilter<"Producto"> | $Enums.Subcategoria
    creadoEn?: DateTimeFilter<"Producto"> | Date | string
    favoritos?: FavoritoListRelationFilter
    itemsPedido?: ItemPedidoListRelationFilter
    itemCarrito?: ItemCarritoListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    compartido?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    creadoEn?: SortOrder
    favoritos?: FavoritoOrderByRelationAggregateInput
    itemsPedido?: ItemPedidoOrderByRelationAggregateInput
    itemCarrito?: ItemCarritoOrderByRelationAggregateInput
    _relevance?: ProductoOrderByRelevanceInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: FloatFilter<"Producto"> | number
    stock?: IntFilter<"Producto"> | number
    compartido?: BoolFilter<"Producto"> | boolean
    imagenUrl?: StringNullableFilter<"Producto"> | string | null
    categoria?: EnumCategoriaFilter<"Producto"> | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFilter<"Producto"> | $Enums.Subcategoria
    creadoEn?: DateTimeFilter<"Producto"> | Date | string
    favoritos?: FavoritoListRelationFilter
    itemsPedido?: ItemPedidoListRelationFilter
    itemCarrito?: ItemCarritoListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    compartido?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    creadoEn?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringWithAggregatesFilter<"Producto"> | string
    precio?: FloatWithAggregatesFilter<"Producto"> | number
    stock?: IntWithAggregatesFilter<"Producto"> | number
    compartido?: BoolWithAggregatesFilter<"Producto"> | boolean
    imagenUrl?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    categoria?: EnumCategoriaWithAggregatesFilter<"Producto"> | $Enums.Categoria
    subcategoria?: EnumSubcategoriaWithAggregatesFilter<"Producto"> | $Enums.Subcategoria
    creadoEn?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type FavoritoWhereInput = {
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    id?: IntFilter<"Favorito"> | number
    usuarioId?: IntFilter<"Favorito"> | number
    productoId?: IntFilter<"Favorito"> | number
    creadoEn?: DateTimeFilter<"Favorito"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type FavoritoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    creadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type FavoritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_productoId?: FavoritoUsuarioIdProductoIdCompoundUniqueInput
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    usuarioId?: IntFilter<"Favorito"> | number
    productoId?: IntFilter<"Favorito"> | number
    creadoEn?: DateTimeFilter<"Favorito"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id" | "usuarioId_productoId">

  export type FavoritoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    creadoEn?: SortOrder
    _count?: FavoritoCountOrderByAggregateInput
    _avg?: FavoritoAvgOrderByAggregateInput
    _max?: FavoritoMaxOrderByAggregateInput
    _min?: FavoritoMinOrderByAggregateInput
    _sum?: FavoritoSumOrderByAggregateInput
  }

  export type FavoritoScalarWhereWithAggregatesInput = {
    AND?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    OR?: FavoritoScalarWhereWithAggregatesInput[]
    NOT?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorito"> | number
    usuarioId?: IntWithAggregatesFilter<"Favorito"> | number
    productoId?: IntWithAggregatesFilter<"Favorito"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"Favorito"> | Date | string
  }

  export type ItemCarritoWhereInput = {
    AND?: ItemCarritoWhereInput | ItemCarritoWhereInput[]
    OR?: ItemCarritoWhereInput[]
    NOT?: ItemCarritoWhereInput | ItemCarritoWhereInput[]
    id?: IntFilter<"ItemCarrito"> | number
    usuarioId?: IntFilter<"ItemCarrito"> | number
    productoId?: IntFilter<"ItemCarrito"> | number
    cantidad?: IntFilter<"ItemCarrito"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type ItemCarritoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type ItemCarritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemCarritoWhereInput | ItemCarritoWhereInput[]
    OR?: ItemCarritoWhereInput[]
    NOT?: ItemCarritoWhereInput | ItemCarritoWhereInput[]
    usuarioId?: IntFilter<"ItemCarrito"> | number
    productoId?: IntFilter<"ItemCarrito"> | number
    cantidad?: IntFilter<"ItemCarrito"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type ItemCarritoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    _count?: ItemCarritoCountOrderByAggregateInput
    _avg?: ItemCarritoAvgOrderByAggregateInput
    _max?: ItemCarritoMaxOrderByAggregateInput
    _min?: ItemCarritoMinOrderByAggregateInput
    _sum?: ItemCarritoSumOrderByAggregateInput
  }

  export type ItemCarritoScalarWhereWithAggregatesInput = {
    AND?: ItemCarritoScalarWhereWithAggregatesInput | ItemCarritoScalarWhereWithAggregatesInput[]
    OR?: ItemCarritoScalarWhereWithAggregatesInput[]
    NOT?: ItemCarritoScalarWhereWithAggregatesInput | ItemCarritoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemCarrito"> | number
    usuarioId?: IntWithAggregatesFilter<"ItemCarrito"> | number
    productoId?: IntWithAggregatesFilter<"ItemCarrito"> | number
    cantidad?: IntWithAggregatesFilter<"ItemCarrito"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    usuarioId?: IntFilter<"Pedido"> | number
    total?: FloatFilter<"Pedido"> | number
    estado?: EnumEstadoPedidoFilter<"Pedido"> | $Enums.EstadoPedido
    direccion?: StringFilter<"Pedido"> | string
    creadoEn?: DateTimeFilter<"Pedido"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    items?: ItemPedidoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    direccion?: SortOrder
    creadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    items?: ItemPedidoOrderByRelationAggregateInput
    _relevance?: PedidoOrderByRelevanceInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    usuarioId?: IntFilter<"Pedido"> | number
    total?: FloatFilter<"Pedido"> | number
    estado?: EnumEstadoPedidoFilter<"Pedido"> | $Enums.EstadoPedido
    direccion?: StringFilter<"Pedido"> | string
    creadoEn?: DateTimeFilter<"Pedido"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    items?: ItemPedidoListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    direccion?: SortOrder
    creadoEn?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    usuarioId?: IntWithAggregatesFilter<"Pedido"> | number
    total?: FloatWithAggregatesFilter<"Pedido"> | number
    estado?: EnumEstadoPedidoWithAggregatesFilter<"Pedido"> | $Enums.EstadoPedido
    direccion?: StringWithAggregatesFilter<"Pedido"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
  }

  export type ItemPedidoWhereInput = {
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    productoId?: IntFilter<"ItemPedido"> | number
    cantidad?: IntFilter<"ItemPedido"> | number
    precioUnitario?: FloatFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type ItemPedidoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type ItemPedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    pedidoId?: IntFilter<"ItemPedido"> | number
    productoId?: IntFilter<"ItemPedido"> | number
    cantidad?: IntFilter<"ItemPedido"> | number
    precioUnitario?: FloatFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type ItemPedidoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    _count?: ItemPedidoCountOrderByAggregateInput
    _avg?: ItemPedidoAvgOrderByAggregateInput
    _max?: ItemPedidoMaxOrderByAggregateInput
    _min?: ItemPedidoMinOrderByAggregateInput
    _sum?: ItemPedidoSumOrderByAggregateInput
  }

  export type ItemPedidoScalarWhereWithAggregatesInput = {
    AND?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    OR?: ItemPedidoScalarWhereWithAggregatesInput[]
    NOT?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemPedido"> | number
    pedidoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    productoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    cantidad?: IntWithAggregatesFilter<"ItemPedido"> | number
    precioUnitario?: FloatWithAggregatesFilter<"ItemPedido"> | number
  }

  export type MateriaPrimaWhereInput = {
    AND?: MateriaPrimaWhereInput | MateriaPrimaWhereInput[]
    OR?: MateriaPrimaWhereInput[]
    NOT?: MateriaPrimaWhereInput | MateriaPrimaWhereInput[]
    id?: IntFilter<"MateriaPrima"> | number
    nombre?: StringFilter<"MateriaPrima"> | string
    descripcion?: StringNullableFilter<"MateriaPrima"> | string | null
    cantidad?: FloatFilter<"MateriaPrima"> | number
    unidad?: StringFilter<"MateriaPrima"> | string
    creadoEn?: DateTimeFilter<"MateriaPrima"> | Date | string
    movimientos?: MovimientoStockListRelationFilter
  }

  export type MateriaPrimaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    creadoEn?: SortOrder
    movimientos?: MovimientoStockOrderByRelationAggregateInput
    _relevance?: MateriaPrimaOrderByRelevanceInput
  }

  export type MateriaPrimaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MateriaPrimaWhereInput | MateriaPrimaWhereInput[]
    OR?: MateriaPrimaWhereInput[]
    NOT?: MateriaPrimaWhereInput | MateriaPrimaWhereInput[]
    nombre?: StringFilter<"MateriaPrima"> | string
    descripcion?: StringNullableFilter<"MateriaPrima"> | string | null
    cantidad?: FloatFilter<"MateriaPrima"> | number
    unidad?: StringFilter<"MateriaPrima"> | string
    creadoEn?: DateTimeFilter<"MateriaPrima"> | Date | string
    movimientos?: MovimientoStockListRelationFilter
  }, "id">

  export type MateriaPrimaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    creadoEn?: SortOrder
    _count?: MateriaPrimaCountOrderByAggregateInput
    _avg?: MateriaPrimaAvgOrderByAggregateInput
    _max?: MateriaPrimaMaxOrderByAggregateInput
    _min?: MateriaPrimaMinOrderByAggregateInput
    _sum?: MateriaPrimaSumOrderByAggregateInput
  }

  export type MateriaPrimaScalarWhereWithAggregatesInput = {
    AND?: MateriaPrimaScalarWhereWithAggregatesInput | MateriaPrimaScalarWhereWithAggregatesInput[]
    OR?: MateriaPrimaScalarWhereWithAggregatesInput[]
    NOT?: MateriaPrimaScalarWhereWithAggregatesInput | MateriaPrimaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MateriaPrima"> | number
    nombre?: StringWithAggregatesFilter<"MateriaPrima"> | string
    descripcion?: StringNullableWithAggregatesFilter<"MateriaPrima"> | string | null
    cantidad?: FloatWithAggregatesFilter<"MateriaPrima"> | number
    unidad?: StringWithAggregatesFilter<"MateriaPrima"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"MateriaPrima"> | Date | string
  }

  export type MovimientoStockWhereInput = {
    AND?: MovimientoStockWhereInput | MovimientoStockWhereInput[]
    OR?: MovimientoStockWhereInput[]
    NOT?: MovimientoStockWhereInput | MovimientoStockWhereInput[]
    id?: IntFilter<"MovimientoStock"> | number
    materiaPrimaId?: IntFilter<"MovimientoStock"> | number
    tipo?: EnumTipoMovimientoFilter<"MovimientoStock"> | $Enums.TipoMovimiento
    cantidad?: FloatFilter<"MovimientoStock"> | number
    nota?: StringNullableFilter<"MovimientoStock"> | string | null
    creadoEn?: DateTimeFilter<"MovimientoStock"> | Date | string
    materiaPrima?: XOR<MateriaPrimaScalarRelationFilter, MateriaPrimaWhereInput>
  }

  export type MovimientoStockOrderByWithRelationInput = {
    id?: SortOrder
    materiaPrimaId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    nota?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    materiaPrima?: MateriaPrimaOrderByWithRelationInput
    _relevance?: MovimientoStockOrderByRelevanceInput
  }

  export type MovimientoStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovimientoStockWhereInput | MovimientoStockWhereInput[]
    OR?: MovimientoStockWhereInput[]
    NOT?: MovimientoStockWhereInput | MovimientoStockWhereInput[]
    materiaPrimaId?: IntFilter<"MovimientoStock"> | number
    tipo?: EnumTipoMovimientoFilter<"MovimientoStock"> | $Enums.TipoMovimiento
    cantidad?: FloatFilter<"MovimientoStock"> | number
    nota?: StringNullableFilter<"MovimientoStock"> | string | null
    creadoEn?: DateTimeFilter<"MovimientoStock"> | Date | string
    materiaPrima?: XOR<MateriaPrimaScalarRelationFilter, MateriaPrimaWhereInput>
  }, "id">

  export type MovimientoStockOrderByWithAggregationInput = {
    id?: SortOrder
    materiaPrimaId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    nota?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    _count?: MovimientoStockCountOrderByAggregateInput
    _avg?: MovimientoStockAvgOrderByAggregateInput
    _max?: MovimientoStockMaxOrderByAggregateInput
    _min?: MovimientoStockMinOrderByAggregateInput
    _sum?: MovimientoStockSumOrderByAggregateInput
  }

  export type MovimientoStockScalarWhereWithAggregatesInput = {
    AND?: MovimientoStockScalarWhereWithAggregatesInput | MovimientoStockScalarWhereWithAggregatesInput[]
    OR?: MovimientoStockScalarWhereWithAggregatesInput[]
    NOT?: MovimientoStockScalarWhereWithAggregatesInput | MovimientoStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MovimientoStock"> | number
    materiaPrimaId?: IntWithAggregatesFilter<"MovimientoStock"> | number
    tipo?: EnumTipoMovimientoWithAggregatesFilter<"MovimientoStock"> | $Enums.TipoMovimiento
    cantidad?: FloatWithAggregatesFilter<"MovimientoStock"> | number
    nota?: StringNullableWithAggregatesFilter<"MovimientoStock"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"MovimientoStock"> | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    correo: string
    contrasena: string
    rol?: $Enums.Rol
    creadoEn?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    carrito?: ItemCarritoCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    contrasena: string
    rol?: $Enums.Rol
    creadoEn?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    carrito?: ItemCarritoUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    carrito?: ItemCarritoUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrito?: ItemCarritoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    correo: string
    contrasena: string
    rol?: $Enums.Rol
    creadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion: string
    precio: number
    stock: number
    compartido?: boolean
    imagenUrl?: string | null
    categoria: $Enums.Categoria
    subcategoria: $Enums.Subcategoria
    creadoEn?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutProductoInput
    itemsPedido?: ItemPedidoCreateNestedManyWithoutProductoInput
    itemCarrito?: ItemCarritoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    compartido?: boolean
    imagenUrl?: string | null
    categoria: $Enums.Categoria
    subcategoria: $Enums.Subcategoria
    creadoEn?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutProductoInput
    itemsPedido?: ItemPedidoUncheckedCreateNestedManyWithoutProductoInput
    itemCarrito?: ItemCarritoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    compartido?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFieldUpdateOperationsInput | $Enums.Subcategoria
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutProductoNestedInput
    itemsPedido?: ItemPedidoUpdateManyWithoutProductoNestedInput
    itemCarrito?: ItemCarritoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    compartido?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFieldUpdateOperationsInput | $Enums.Subcategoria
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutProductoNestedInput
    itemsPedido?: ItemPedidoUncheckedUpdateManyWithoutProductoNestedInput
    itemCarrito?: ItemCarritoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    compartido?: boolean
    imagenUrl?: string | null
    categoria: $Enums.Categoria
    subcategoria: $Enums.Subcategoria
    creadoEn?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    compartido?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFieldUpdateOperationsInput | $Enums.Subcategoria
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    compartido?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFieldUpdateOperationsInput | $Enums.Subcategoria
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateInput = {
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFavoritosInput
    producto: ProductoCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    productoId: number
    creadoEn?: Date | string
  }

  export type FavoritoUpdateInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFavoritosNestedInput
    producto?: ProductoUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateManyInput = {
    id?: number
    usuarioId: number
    productoId: number
    creadoEn?: Date | string
  }

  export type FavoritoUpdateManyMutationInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCarritoCreateInput = {
    cantidad: number
    usuario: UsuarioCreateNestedOneWithoutCarritoInput
    producto: ProductoCreateNestedOneWithoutItemCarritoInput
  }

  export type ItemCarritoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    productoId: number
    cantidad: number
  }

  export type ItemCarritoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutCarritoNestedInput
    producto?: ProductoUpdateOneRequiredWithoutItemCarritoNestedInput
  }

  export type ItemCarritoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarritoCreateManyInput = {
    id?: number
    usuarioId: number
    productoId: number
    cantidad: number
  }

  export type ItemCarritoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarritoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    total: number
    estado?: $Enums.EstadoPedido
    direccion: string
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    items?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    total: number
    estado?: $Enums.EstadoPedido
    direccion: string
    creadoEn?: Date | string
    items?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido
    direccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    items?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido
    direccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    usuarioId: number
    total: number
    estado?: $Enums.EstadoPedido
    direccion: string
    creadoEn?: Date | string
  }

  export type PedidoUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido
    direccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido
    direccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoCreateInput = {
    cantidad: number
    precioUnitario: number
    pedido: PedidoCreateNestedOneWithoutItemsInput
    producto: ProductoCreateNestedOneWithoutItemsPedidoInput
  }

  export type ItemPedidoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    productoId: number
    cantidad: number
    precioUnitario: number
  }

  export type ItemPedidoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItemsNestedInput
    producto?: ProductoUpdateOneRequiredWithoutItemsPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyInput = {
    id?: number
    pedidoId: number
    productoId: number
    cantidad: number
    precioUnitario: number
  }

  export type ItemPedidoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type MateriaPrimaCreateInput = {
    nombre: string
    descripcion?: string | null
    cantidad: number
    unidad: string
    creadoEn?: Date | string
    movimientos?: MovimientoStockCreateNestedManyWithoutMateriaPrimaInput
  }

  export type MateriaPrimaUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    cantidad: number
    unidad: string
    creadoEn?: Date | string
    movimientos?: MovimientoStockUncheckedCreateNestedManyWithoutMateriaPrimaInput
  }

  export type MateriaPrimaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientos?: MovimientoStockUpdateManyWithoutMateriaPrimaNestedInput
  }

  export type MateriaPrimaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientos?: MovimientoStockUncheckedUpdateManyWithoutMateriaPrimaNestedInput
  }

  export type MateriaPrimaCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    cantidad: number
    unidad: string
    creadoEn?: Date | string
  }

  export type MateriaPrimaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriaPrimaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoStockCreateInput = {
    tipo: $Enums.TipoMovimiento
    cantidad: number
    nota?: string | null
    creadoEn?: Date | string
    materiaPrima: MateriaPrimaCreateNestedOneWithoutMovimientosInput
  }

  export type MovimientoStockUncheckedCreateInput = {
    id?: number
    materiaPrimaId: number
    tipo: $Enums.TipoMovimiento
    cantidad: number
    nota?: string | null
    creadoEn?: Date | string
  }

  export type MovimientoStockUpdateInput = {
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    materiaPrima?: MateriaPrimaUpdateOneRequiredWithoutMovimientosNestedInput
  }

  export type MovimientoStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaPrimaId?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoStockCreateManyInput = {
    id?: number
    materiaPrimaId: number
    tipo: $Enums.TipoMovimiento
    cantidad: number
    nota?: string | null
    creadoEn?: Date | string
  }

  export type MovimientoStockUpdateManyMutationInput = {
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaPrimaId?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[]
    notIn?: $Enums.Rol[]
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FavoritoListRelationFilter = {
    every?: FavoritoWhereInput
    some?: FavoritoWhereInput
    none?: FavoritoWhereInput
  }

  export type ItemCarritoListRelationFilter = {
    every?: ItemCarritoWhereInput
    some?: ItemCarritoWhereInput
    none?: ItemCarritoWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type FavoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCarritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[]
    notIn?: $Enums.Rol[]
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCategoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[]
    notIn?: $Enums.Categoria[]
    not?: NestedEnumCategoriaFilter<$PrismaModel> | $Enums.Categoria
  }

  export type EnumSubcategoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategoria | EnumSubcategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Subcategoria[]
    notIn?: $Enums.Subcategoria[]
    not?: NestedEnumSubcategoriaFilter<$PrismaModel> | $Enums.Subcategoria
  }

  export type ItemPedidoListRelationFilter = {
    every?: ItemPedidoWhereInput
    some?: ItemPedidoWhereInput
    none?: ItemPedidoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoOrderByRelevanceInput = {
    fields: ProductoOrderByRelevanceFieldEnum | ProductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    compartido?: SortOrder
    imagenUrl?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    creadoEn?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    compartido?: SortOrder
    imagenUrl?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    creadoEn?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    compartido?: SortOrder
    imagenUrl?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    creadoEn?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCategoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[]
    notIn?: $Enums.Categoria[]
    not?: NestedEnumCategoriaWithAggregatesFilter<$PrismaModel> | $Enums.Categoria
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaFilter<$PrismaModel>
    _max?: NestedEnumCategoriaFilter<$PrismaModel>
  }

  export type EnumSubcategoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategoria | EnumSubcategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Subcategoria[]
    notIn?: $Enums.Subcategoria[]
    not?: NestedEnumSubcategoriaWithAggregatesFilter<$PrismaModel> | $Enums.Subcategoria
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubcategoriaFilter<$PrismaModel>
    _max?: NestedEnumSubcategoriaFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type FavoritoUsuarioIdProductoIdCompoundUniqueInput = {
    usuarioId: number
    productoId: number
  }

  export type FavoritoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    creadoEn?: SortOrder
  }

  export type FavoritoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
  }

  export type FavoritoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    creadoEn?: SortOrder
  }

  export type FavoritoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    creadoEn?: SortOrder
  }

  export type FavoritoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
  }

  export type ItemCarritoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type ItemCarritoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type ItemCarritoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type ItemCarritoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type ItemCarritoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type EnumEstadoPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPedido | EnumEstadoPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPedido[]
    notIn?: $Enums.EstadoPedido[]
    not?: NestedEnumEstadoPedidoFilter<$PrismaModel> | $Enums.EstadoPedido
  }

  export type PedidoOrderByRelevanceInput = {
    fields: PedidoOrderByRelevanceFieldEnum | PedidoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    direccion?: SortOrder
    creadoEn?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    direccion?: SortOrder
    creadoEn?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    direccion?: SortOrder
    creadoEn?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    total?: SortOrder
  }

  export type EnumEstadoPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPedido | EnumEstadoPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPedido[]
    notIn?: $Enums.EstadoPedido[]
    not?: NestedEnumEstadoPedidoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoPedidoFilter<$PrismaModel>
    _max?: NestedEnumEstadoPedidoFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ItemPedidoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type ItemPedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type ItemPedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type ItemPedidoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type ItemPedidoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type MovimientoStockListRelationFilter = {
    every?: MovimientoStockWhereInput
    some?: MovimientoStockWhereInput
    none?: MovimientoStockWhereInput
  }

  export type MovimientoStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriaPrimaOrderByRelevanceInput = {
    fields: MateriaPrimaOrderByRelevanceFieldEnum | MateriaPrimaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MateriaPrimaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type MateriaPrimaAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
  }

  export type MateriaPrimaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type MateriaPrimaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type MateriaPrimaSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
  }

  export type EnumTipoMovimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[]
    notIn?: $Enums.TipoMovimiento[]
    not?: NestedEnumTipoMovimientoFilter<$PrismaModel> | $Enums.TipoMovimiento
  }

  export type MateriaPrimaScalarRelationFilter = {
    is?: MateriaPrimaWhereInput
    isNot?: MateriaPrimaWhereInput
  }

  export type MovimientoStockOrderByRelevanceInput = {
    fields: MovimientoStockOrderByRelevanceFieldEnum | MovimientoStockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovimientoStockCountOrderByAggregateInput = {
    id?: SortOrder
    materiaPrimaId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    nota?: SortOrder
    creadoEn?: SortOrder
  }

  export type MovimientoStockAvgOrderByAggregateInput = {
    id?: SortOrder
    materiaPrimaId?: SortOrder
    cantidad?: SortOrder
  }

  export type MovimientoStockMaxOrderByAggregateInput = {
    id?: SortOrder
    materiaPrimaId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    nota?: SortOrder
    creadoEn?: SortOrder
  }

  export type MovimientoStockMinOrderByAggregateInput = {
    id?: SortOrder
    materiaPrimaId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    nota?: SortOrder
    creadoEn?: SortOrder
  }

  export type MovimientoStockSumOrderByAggregateInput = {
    id?: SortOrder
    materiaPrimaId?: SortOrder
    cantidad?: SortOrder
  }

  export type EnumTipoMovimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[]
    notIn?: $Enums.TipoMovimiento[]
    not?: NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimientoFilter<$PrismaModel>
  }

  export type FavoritoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ItemCarritoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ItemCarritoCreateWithoutUsuarioInput, ItemCarritoUncheckedCreateWithoutUsuarioInput> | ItemCarritoCreateWithoutUsuarioInput[] | ItemCarritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemCarritoCreateOrConnectWithoutUsuarioInput | ItemCarritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ItemCarritoCreateManyUsuarioInputEnvelope
    connect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ItemCarritoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ItemCarritoCreateWithoutUsuarioInput, ItemCarritoUncheckedCreateWithoutUsuarioInput> | ItemCarritoCreateWithoutUsuarioInput[] | ItemCarritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemCarritoCreateOrConnectWithoutUsuarioInput | ItemCarritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ItemCarritoCreateManyUsuarioInputEnvelope
    connect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FavoritoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUsuarioInput | FavoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUsuarioInput | FavoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUsuarioInput | FavoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ItemCarritoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ItemCarritoCreateWithoutUsuarioInput, ItemCarritoUncheckedCreateWithoutUsuarioInput> | ItemCarritoCreateWithoutUsuarioInput[] | ItemCarritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemCarritoCreateOrConnectWithoutUsuarioInput | ItemCarritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ItemCarritoUpsertWithWhereUniqueWithoutUsuarioInput | ItemCarritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ItemCarritoCreateManyUsuarioInputEnvelope
    set?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    disconnect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    delete?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    connect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    update?: ItemCarritoUpdateWithWhereUniqueWithoutUsuarioInput | ItemCarritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ItemCarritoUpdateManyWithWhereWithoutUsuarioInput | ItemCarritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ItemCarritoScalarWhereInput | ItemCarritoScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUsuarioInput | FavoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUsuarioInput | FavoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUsuarioInput | FavoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ItemCarritoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ItemCarritoCreateWithoutUsuarioInput, ItemCarritoUncheckedCreateWithoutUsuarioInput> | ItemCarritoCreateWithoutUsuarioInput[] | ItemCarritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemCarritoCreateOrConnectWithoutUsuarioInput | ItemCarritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ItemCarritoUpsertWithWhereUniqueWithoutUsuarioInput | ItemCarritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ItemCarritoCreateManyUsuarioInputEnvelope
    set?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    disconnect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    delete?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    connect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    update?: ItemCarritoUpdateWithWhereUniqueWithoutUsuarioInput | ItemCarritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ItemCarritoUpdateManyWithWhereWithoutUsuarioInput | ItemCarritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ItemCarritoScalarWhereInput | ItemCarritoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type FavoritoCreateNestedManyWithoutProductoInput = {
    create?: XOR<FavoritoCreateWithoutProductoInput, FavoritoUncheckedCreateWithoutProductoInput> | FavoritoCreateWithoutProductoInput[] | FavoritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutProductoInput | FavoritoCreateOrConnectWithoutProductoInput[]
    createMany?: FavoritoCreateManyProductoInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ItemPedidoCreateNestedManyWithoutProductoInput = {
    create?: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput> | ItemPedidoCreateWithoutProductoInput[] | ItemPedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProductoInput | ItemPedidoCreateOrConnectWithoutProductoInput[]
    createMany?: ItemPedidoCreateManyProductoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemCarritoCreateNestedManyWithoutProductoInput = {
    create?: XOR<ItemCarritoCreateWithoutProductoInput, ItemCarritoUncheckedCreateWithoutProductoInput> | ItemCarritoCreateWithoutProductoInput[] | ItemCarritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemCarritoCreateOrConnectWithoutProductoInput | ItemCarritoCreateOrConnectWithoutProductoInput[]
    createMany?: ItemCarritoCreateManyProductoInputEnvelope
    connect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<FavoritoCreateWithoutProductoInput, FavoritoUncheckedCreateWithoutProductoInput> | FavoritoCreateWithoutProductoInput[] | FavoritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutProductoInput | FavoritoCreateOrConnectWithoutProductoInput[]
    createMany?: FavoritoCreateManyProductoInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput> | ItemPedidoCreateWithoutProductoInput[] | ItemPedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProductoInput | ItemPedidoCreateOrConnectWithoutProductoInput[]
    createMany?: ItemPedidoCreateManyProductoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemCarritoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ItemCarritoCreateWithoutProductoInput, ItemCarritoUncheckedCreateWithoutProductoInput> | ItemCarritoCreateWithoutProductoInput[] | ItemCarritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemCarritoCreateOrConnectWithoutProductoInput | ItemCarritoCreateOrConnectWithoutProductoInput[]
    createMany?: ItemCarritoCreateManyProductoInputEnvelope
    connect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCategoriaFieldUpdateOperationsInput = {
    set?: $Enums.Categoria
  }

  export type EnumSubcategoriaFieldUpdateOperationsInput = {
    set?: $Enums.Subcategoria
  }

  export type FavoritoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<FavoritoCreateWithoutProductoInput, FavoritoUncheckedCreateWithoutProductoInput> | FavoritoCreateWithoutProductoInput[] | FavoritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutProductoInput | FavoritoCreateOrConnectWithoutProductoInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutProductoInput | FavoritoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: FavoritoCreateManyProductoInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutProductoInput | FavoritoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutProductoInput | FavoritoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ItemPedidoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput> | ItemPedidoCreateWithoutProductoInput[] | ItemPedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProductoInput | ItemPedidoCreateOrConnectWithoutProductoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProductoInput | ItemPedidoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ItemPedidoCreateManyProductoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProductoInput | ItemPedidoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProductoInput | ItemPedidoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemCarritoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ItemCarritoCreateWithoutProductoInput, ItemCarritoUncheckedCreateWithoutProductoInput> | ItemCarritoCreateWithoutProductoInput[] | ItemCarritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemCarritoCreateOrConnectWithoutProductoInput | ItemCarritoCreateOrConnectWithoutProductoInput[]
    upsert?: ItemCarritoUpsertWithWhereUniqueWithoutProductoInput | ItemCarritoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ItemCarritoCreateManyProductoInputEnvelope
    set?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    disconnect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    delete?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    connect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    update?: ItemCarritoUpdateWithWhereUniqueWithoutProductoInput | ItemCarritoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ItemCarritoUpdateManyWithWhereWithoutProductoInput | ItemCarritoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ItemCarritoScalarWhereInput | ItemCarritoScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<FavoritoCreateWithoutProductoInput, FavoritoUncheckedCreateWithoutProductoInput> | FavoritoCreateWithoutProductoInput[] | FavoritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutProductoInput | FavoritoCreateOrConnectWithoutProductoInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutProductoInput | FavoritoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: FavoritoCreateManyProductoInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutProductoInput | FavoritoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutProductoInput | FavoritoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput> | ItemPedidoCreateWithoutProductoInput[] | ItemPedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProductoInput | ItemPedidoCreateOrConnectWithoutProductoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProductoInput | ItemPedidoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ItemPedidoCreateManyProductoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProductoInput | ItemPedidoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProductoInput | ItemPedidoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemCarritoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ItemCarritoCreateWithoutProductoInput, ItemCarritoUncheckedCreateWithoutProductoInput> | ItemCarritoCreateWithoutProductoInput[] | ItemCarritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemCarritoCreateOrConnectWithoutProductoInput | ItemCarritoCreateOrConnectWithoutProductoInput[]
    upsert?: ItemCarritoUpsertWithWhereUniqueWithoutProductoInput | ItemCarritoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ItemCarritoCreateManyProductoInputEnvelope
    set?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    disconnect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    delete?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    connect?: ItemCarritoWhereUniqueInput | ItemCarritoWhereUniqueInput[]
    update?: ItemCarritoUpdateWithWhereUniqueWithoutProductoInput | ItemCarritoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ItemCarritoUpdateManyWithWhereWithoutProductoInput | ItemCarritoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ItemCarritoScalarWhereInput | ItemCarritoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<ProductoCreateWithoutFavoritosInput, ProductoUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutFavoritosInput
    connect?: ProductoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritosInput
    upsert?: UsuarioUpsertWithoutFavoritosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFavoritosInput, UsuarioUpdateWithoutFavoritosInput>, UsuarioUncheckedUpdateWithoutFavoritosInput>
  }

  export type ProductoUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<ProductoCreateWithoutFavoritosInput, ProductoUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutFavoritosInput
    upsert?: ProductoUpsertWithoutFavoritosInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutFavoritosInput, ProductoUpdateWithoutFavoritosInput>, ProductoUncheckedUpdateWithoutFavoritosInput>
  }

  export type UsuarioCreateNestedOneWithoutCarritoInput = {
    create?: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarritoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutItemCarritoInput = {
    create?: XOR<ProductoCreateWithoutItemCarritoInput, ProductoUncheckedCreateWithoutItemCarritoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutItemCarritoInput
    connect?: ProductoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCarritoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarritoInput
    upsert?: UsuarioUpsertWithoutCarritoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCarritoInput, UsuarioUpdateWithoutCarritoInput>, UsuarioUncheckedUpdateWithoutCarritoInput>
  }

  export type ProductoUpdateOneRequiredWithoutItemCarritoNestedInput = {
    create?: XOR<ProductoCreateWithoutItemCarritoInput, ProductoUncheckedCreateWithoutItemCarritoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutItemCarritoInput
    upsert?: ProductoUpsertWithoutItemCarritoInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutItemCarritoInput, ProductoUpdateWithoutItemCarritoInput>, ProductoUncheckedUpdateWithoutItemCarritoInput>
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type EnumEstadoPedidoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoPedido
  }

  export type UsuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type ItemPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutItemsInput = {
    create?: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItemsInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutItemsPedidoInput = {
    create?: XOR<ProductoCreateWithoutItemsPedidoInput, ProductoUncheckedCreateWithoutItemsPedidoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutItemsPedidoInput
    connect?: ProductoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItemsInput
    upsert?: PedidoUpsertWithoutItemsInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItemsInput, PedidoUpdateWithoutItemsInput>, PedidoUncheckedUpdateWithoutItemsInput>
  }

  export type ProductoUpdateOneRequiredWithoutItemsPedidoNestedInput = {
    create?: XOR<ProductoCreateWithoutItemsPedidoInput, ProductoUncheckedCreateWithoutItemsPedidoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutItemsPedidoInput
    upsert?: ProductoUpsertWithoutItemsPedidoInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutItemsPedidoInput, ProductoUpdateWithoutItemsPedidoInput>, ProductoUncheckedUpdateWithoutItemsPedidoInput>
  }

  export type MovimientoStockCreateNestedManyWithoutMateriaPrimaInput = {
    create?: XOR<MovimientoStockCreateWithoutMateriaPrimaInput, MovimientoStockUncheckedCreateWithoutMateriaPrimaInput> | MovimientoStockCreateWithoutMateriaPrimaInput[] | MovimientoStockUncheckedCreateWithoutMateriaPrimaInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutMateriaPrimaInput | MovimientoStockCreateOrConnectWithoutMateriaPrimaInput[]
    createMany?: MovimientoStockCreateManyMateriaPrimaInputEnvelope
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
  }

  export type MovimientoStockUncheckedCreateNestedManyWithoutMateriaPrimaInput = {
    create?: XOR<MovimientoStockCreateWithoutMateriaPrimaInput, MovimientoStockUncheckedCreateWithoutMateriaPrimaInput> | MovimientoStockCreateWithoutMateriaPrimaInput[] | MovimientoStockUncheckedCreateWithoutMateriaPrimaInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutMateriaPrimaInput | MovimientoStockCreateOrConnectWithoutMateriaPrimaInput[]
    createMany?: MovimientoStockCreateManyMateriaPrimaInputEnvelope
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
  }

  export type MovimientoStockUpdateManyWithoutMateriaPrimaNestedInput = {
    create?: XOR<MovimientoStockCreateWithoutMateriaPrimaInput, MovimientoStockUncheckedCreateWithoutMateriaPrimaInput> | MovimientoStockCreateWithoutMateriaPrimaInput[] | MovimientoStockUncheckedCreateWithoutMateriaPrimaInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutMateriaPrimaInput | MovimientoStockCreateOrConnectWithoutMateriaPrimaInput[]
    upsert?: MovimientoStockUpsertWithWhereUniqueWithoutMateriaPrimaInput | MovimientoStockUpsertWithWhereUniqueWithoutMateriaPrimaInput[]
    createMany?: MovimientoStockCreateManyMateriaPrimaInputEnvelope
    set?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    disconnect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    delete?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    update?: MovimientoStockUpdateWithWhereUniqueWithoutMateriaPrimaInput | MovimientoStockUpdateWithWhereUniqueWithoutMateriaPrimaInput[]
    updateMany?: MovimientoStockUpdateManyWithWhereWithoutMateriaPrimaInput | MovimientoStockUpdateManyWithWhereWithoutMateriaPrimaInput[]
    deleteMany?: MovimientoStockScalarWhereInput | MovimientoStockScalarWhereInput[]
  }

  export type MovimientoStockUncheckedUpdateManyWithoutMateriaPrimaNestedInput = {
    create?: XOR<MovimientoStockCreateWithoutMateriaPrimaInput, MovimientoStockUncheckedCreateWithoutMateriaPrimaInput> | MovimientoStockCreateWithoutMateriaPrimaInput[] | MovimientoStockUncheckedCreateWithoutMateriaPrimaInput[]
    connectOrCreate?: MovimientoStockCreateOrConnectWithoutMateriaPrimaInput | MovimientoStockCreateOrConnectWithoutMateriaPrimaInput[]
    upsert?: MovimientoStockUpsertWithWhereUniqueWithoutMateriaPrimaInput | MovimientoStockUpsertWithWhereUniqueWithoutMateriaPrimaInput[]
    createMany?: MovimientoStockCreateManyMateriaPrimaInputEnvelope
    set?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    disconnect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    delete?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    connect?: MovimientoStockWhereUniqueInput | MovimientoStockWhereUniqueInput[]
    update?: MovimientoStockUpdateWithWhereUniqueWithoutMateriaPrimaInput | MovimientoStockUpdateWithWhereUniqueWithoutMateriaPrimaInput[]
    updateMany?: MovimientoStockUpdateManyWithWhereWithoutMateriaPrimaInput | MovimientoStockUpdateManyWithWhereWithoutMateriaPrimaInput[]
    deleteMany?: MovimientoStockScalarWhereInput | MovimientoStockScalarWhereInput[]
  }

  export type MateriaPrimaCreateNestedOneWithoutMovimientosInput = {
    create?: XOR<MateriaPrimaCreateWithoutMovimientosInput, MateriaPrimaUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: MateriaPrimaCreateOrConnectWithoutMovimientosInput
    connect?: MateriaPrimaWhereUniqueInput
  }

  export type EnumTipoMovimientoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMovimiento
  }

  export type MateriaPrimaUpdateOneRequiredWithoutMovimientosNestedInput = {
    create?: XOR<MateriaPrimaCreateWithoutMovimientosInput, MateriaPrimaUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: MateriaPrimaCreateOrConnectWithoutMovimientosInput
    upsert?: MateriaPrimaUpsertWithoutMovimientosInput
    connect?: MateriaPrimaWhereUniqueInput
    update?: XOR<XOR<MateriaPrimaUpdateToOneWithWhereWithoutMovimientosInput, MateriaPrimaUpdateWithoutMovimientosInput>, MateriaPrimaUncheckedUpdateWithoutMovimientosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[]
    notIn?: $Enums.Rol[]
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[]
    notIn?: $Enums.Rol[]
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCategoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[]
    notIn?: $Enums.Categoria[]
    not?: NestedEnumCategoriaFilter<$PrismaModel> | $Enums.Categoria
  }

  export type NestedEnumSubcategoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategoria | EnumSubcategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Subcategoria[]
    notIn?: $Enums.Subcategoria[]
    not?: NestedEnumSubcategoriaFilter<$PrismaModel> | $Enums.Subcategoria
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCategoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[]
    notIn?: $Enums.Categoria[]
    not?: NestedEnumCategoriaWithAggregatesFilter<$PrismaModel> | $Enums.Categoria
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaFilter<$PrismaModel>
    _max?: NestedEnumCategoriaFilter<$PrismaModel>
  }

  export type NestedEnumSubcategoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategoria | EnumSubcategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Subcategoria[]
    notIn?: $Enums.Subcategoria[]
    not?: NestedEnumSubcategoriaWithAggregatesFilter<$PrismaModel> | $Enums.Subcategoria
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubcategoriaFilter<$PrismaModel>
    _max?: NestedEnumSubcategoriaFilter<$PrismaModel>
  }

  export type NestedEnumEstadoPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPedido | EnumEstadoPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPedido[]
    notIn?: $Enums.EstadoPedido[]
    not?: NestedEnumEstadoPedidoFilter<$PrismaModel> | $Enums.EstadoPedido
  }

  export type NestedEnumEstadoPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPedido | EnumEstadoPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPedido[]
    notIn?: $Enums.EstadoPedido[]
    not?: NestedEnumEstadoPedidoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoPedidoFilter<$PrismaModel>
    _max?: NestedEnumEstadoPedidoFilter<$PrismaModel>
  }

  export type NestedEnumTipoMovimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[]
    notIn?: $Enums.TipoMovimiento[]
    not?: NestedEnumTipoMovimientoFilter<$PrismaModel> | $Enums.TipoMovimiento
  }

  export type NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[]
    notIn?: $Enums.TipoMovimiento[]
    not?: NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimientoFilter<$PrismaModel>
  }

  export type FavoritoCreateWithoutUsuarioInput = {
    creadoEn?: Date | string
    producto: ProductoCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    productoId: number
    creadoEn?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritoCreateManyUsuarioInputEnvelope = {
    data: FavoritoCreateManyUsuarioInput | FavoritoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ItemCarritoCreateWithoutUsuarioInput = {
    cantidad: number
    producto: ProductoCreateNestedOneWithoutItemCarritoInput
  }

  export type ItemCarritoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    productoId: number
    cantidad: number
  }

  export type ItemCarritoCreateOrConnectWithoutUsuarioInput = {
    where: ItemCarritoWhereUniqueInput
    create: XOR<ItemCarritoCreateWithoutUsuarioInput, ItemCarritoUncheckedCreateWithoutUsuarioInput>
  }

  export type ItemCarritoCreateManyUsuarioInputEnvelope = {
    data: ItemCarritoCreateManyUsuarioInput | ItemCarritoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutUsuarioInput = {
    total: number
    estado?: $Enums.EstadoPedido
    direccion: string
    creadoEn?: Date | string
    items?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    total: number
    estado?: $Enums.EstadoPedido
    direccion: string
    creadoEn?: Date | string
    items?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoCreateManyUsuarioInputEnvelope = {
    data: PedidoCreateManyUsuarioInput | PedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutUsuarioInput, FavoritoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutUsuarioInput, FavoritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutUsuarioInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: IntFilter<"Favorito"> | number
    usuarioId?: IntFilter<"Favorito"> | number
    productoId?: IntFilter<"Favorito"> | number
    creadoEn?: DateTimeFilter<"Favorito"> | Date | string
  }

  export type ItemCarritoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ItemCarritoWhereUniqueInput
    update: XOR<ItemCarritoUpdateWithoutUsuarioInput, ItemCarritoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ItemCarritoCreateWithoutUsuarioInput, ItemCarritoUncheckedCreateWithoutUsuarioInput>
  }

  export type ItemCarritoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ItemCarritoWhereUniqueInput
    data: XOR<ItemCarritoUpdateWithoutUsuarioInput, ItemCarritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ItemCarritoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ItemCarritoScalarWhereInput
    data: XOR<ItemCarritoUpdateManyMutationInput, ItemCarritoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ItemCarritoScalarWhereInput = {
    AND?: ItemCarritoScalarWhereInput | ItemCarritoScalarWhereInput[]
    OR?: ItemCarritoScalarWhereInput[]
    NOT?: ItemCarritoScalarWhereInput | ItemCarritoScalarWhereInput[]
    id?: IntFilter<"ItemCarrito"> | number
    usuarioId?: IntFilter<"ItemCarrito"> | number
    productoId?: IntFilter<"ItemCarrito"> | number
    cantidad?: IntFilter<"ItemCarrito"> | number
  }

  export type PedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    usuarioId?: IntFilter<"Pedido"> | number
    total?: FloatFilter<"Pedido"> | number
    estado?: EnumEstadoPedidoFilter<"Pedido"> | $Enums.EstadoPedido
    direccion?: StringFilter<"Pedido"> | string
    creadoEn?: DateTimeFilter<"Pedido"> | Date | string
  }

  export type FavoritoCreateWithoutProductoInput = {
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutProductoInput = {
    id?: number
    usuarioId: number
    creadoEn?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutProductoInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutProductoInput, FavoritoUncheckedCreateWithoutProductoInput>
  }

  export type FavoritoCreateManyProductoInputEnvelope = {
    data: FavoritoCreateManyProductoInput | FavoritoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type ItemPedidoCreateWithoutProductoInput = {
    cantidad: number
    precioUnitario: number
    pedido: PedidoCreateNestedOneWithoutItemsInput
  }

  export type ItemPedidoUncheckedCreateWithoutProductoInput = {
    id?: number
    pedidoId: number
    cantidad: number
    precioUnitario: number
  }

  export type ItemPedidoCreateOrConnectWithoutProductoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput>
  }

  export type ItemPedidoCreateManyProductoInputEnvelope = {
    data: ItemPedidoCreateManyProductoInput | ItemPedidoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type ItemCarritoCreateWithoutProductoInput = {
    cantidad: number
    usuario: UsuarioCreateNestedOneWithoutCarritoInput
  }

  export type ItemCarritoUncheckedCreateWithoutProductoInput = {
    id?: number
    usuarioId: number
    cantidad: number
  }

  export type ItemCarritoCreateOrConnectWithoutProductoInput = {
    where: ItemCarritoWhereUniqueInput
    create: XOR<ItemCarritoCreateWithoutProductoInput, ItemCarritoUncheckedCreateWithoutProductoInput>
  }

  export type ItemCarritoCreateManyProductoInputEnvelope = {
    data: ItemCarritoCreateManyProductoInput | ItemCarritoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoUpsertWithWhereUniqueWithoutProductoInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutProductoInput, FavoritoUncheckedUpdateWithoutProductoInput>
    create: XOR<FavoritoCreateWithoutProductoInput, FavoritoUncheckedCreateWithoutProductoInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutProductoInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutProductoInput, FavoritoUncheckedUpdateWithoutProductoInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutProductoInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutProductoInput>
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutProductoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutProductoInput, ItemPedidoUncheckedUpdateWithoutProductoInput>
    create: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutProductoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutProductoInput, ItemPedidoUncheckedUpdateWithoutProductoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutProductoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutProductoInput>
  }

  export type ItemPedidoScalarWhereInput = {
    AND?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    OR?: ItemPedidoScalarWhereInput[]
    NOT?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    productoId?: IntFilter<"ItemPedido"> | number
    cantidad?: IntFilter<"ItemPedido"> | number
    precioUnitario?: FloatFilter<"ItemPedido"> | number
  }

  export type ItemCarritoUpsertWithWhereUniqueWithoutProductoInput = {
    where: ItemCarritoWhereUniqueInput
    update: XOR<ItemCarritoUpdateWithoutProductoInput, ItemCarritoUncheckedUpdateWithoutProductoInput>
    create: XOR<ItemCarritoCreateWithoutProductoInput, ItemCarritoUncheckedCreateWithoutProductoInput>
  }

  export type ItemCarritoUpdateWithWhereUniqueWithoutProductoInput = {
    where: ItemCarritoWhereUniqueInput
    data: XOR<ItemCarritoUpdateWithoutProductoInput, ItemCarritoUncheckedUpdateWithoutProductoInput>
  }

  export type ItemCarritoUpdateManyWithWhereWithoutProductoInput = {
    where: ItemCarritoScalarWhereInput
    data: XOR<ItemCarritoUpdateManyMutationInput, ItemCarritoUncheckedUpdateManyWithoutProductoInput>
  }

  export type UsuarioCreateWithoutFavoritosInput = {
    nombre: string
    correo: string
    contrasena: string
    rol?: $Enums.Rol
    creadoEn?: Date | string
    carrito?: ItemCarritoCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFavoritosInput = {
    id?: number
    nombre: string
    correo: string
    contrasena: string
    rol?: $Enums.Rol
    creadoEn?: Date | string
    carrito?: ItemCarritoUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFavoritosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
  }

  export type ProductoCreateWithoutFavoritosInput = {
    nombre: string
    descripcion: string
    precio: number
    stock: number
    compartido?: boolean
    imagenUrl?: string | null
    categoria: $Enums.Categoria
    subcategoria: $Enums.Subcategoria
    creadoEn?: Date | string
    itemsPedido?: ItemPedidoCreateNestedManyWithoutProductoInput
    itemCarrito?: ItemCarritoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutFavoritosInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    compartido?: boolean
    imagenUrl?: string | null
    categoria: $Enums.Categoria
    subcategoria: $Enums.Subcategoria
    creadoEn?: Date | string
    itemsPedido?: ItemPedidoUncheckedCreateNestedManyWithoutProductoInput
    itemCarrito?: ItemCarritoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutFavoritosInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutFavoritosInput, ProductoUncheckedCreateWithoutFavoritosInput>
  }

  export type UsuarioUpsertWithoutFavoritosInput = {
    update: XOR<UsuarioUpdateWithoutFavoritosInput, UsuarioUncheckedUpdateWithoutFavoritosInput>
    create: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFavoritosInput, UsuarioUncheckedUpdateWithoutFavoritosInput>
  }

  export type UsuarioUpdateWithoutFavoritosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    carrito?: ItemCarritoUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFavoritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    carrito?: ItemCarritoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProductoUpsertWithoutFavoritosInput = {
    update: XOR<ProductoUpdateWithoutFavoritosInput, ProductoUncheckedUpdateWithoutFavoritosInput>
    create: XOR<ProductoCreateWithoutFavoritosInput, ProductoUncheckedCreateWithoutFavoritosInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutFavoritosInput, ProductoUncheckedUpdateWithoutFavoritosInput>
  }

  export type ProductoUpdateWithoutFavoritosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    compartido?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFieldUpdateOperationsInput | $Enums.Subcategoria
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    itemsPedido?: ItemPedidoUpdateManyWithoutProductoNestedInput
    itemCarrito?: ItemCarritoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutFavoritosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    compartido?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFieldUpdateOperationsInput | $Enums.Subcategoria
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    itemsPedido?: ItemPedidoUncheckedUpdateManyWithoutProductoNestedInput
    itemCarrito?: ItemCarritoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type UsuarioCreateWithoutCarritoInput = {
    nombre: string
    correo: string
    contrasena: string
    rol?: $Enums.Rol
    creadoEn?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCarritoInput = {
    id?: number
    nombre: string
    correo: string
    contrasena: string
    rol?: $Enums.Rol
    creadoEn?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCarritoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
  }

  export type ProductoCreateWithoutItemCarritoInput = {
    nombre: string
    descripcion: string
    precio: number
    stock: number
    compartido?: boolean
    imagenUrl?: string | null
    categoria: $Enums.Categoria
    subcategoria: $Enums.Subcategoria
    creadoEn?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutProductoInput
    itemsPedido?: ItemPedidoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutItemCarritoInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    compartido?: boolean
    imagenUrl?: string | null
    categoria: $Enums.Categoria
    subcategoria: $Enums.Subcategoria
    creadoEn?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutProductoInput
    itemsPedido?: ItemPedidoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutItemCarritoInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutItemCarritoInput, ProductoUncheckedCreateWithoutItemCarritoInput>
  }

  export type UsuarioUpsertWithoutCarritoInput = {
    update: XOR<UsuarioUpdateWithoutCarritoInput, UsuarioUncheckedUpdateWithoutCarritoInput>
    create: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCarritoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCarritoInput, UsuarioUncheckedUpdateWithoutCarritoInput>
  }

  export type UsuarioUpdateWithoutCarritoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProductoUpsertWithoutItemCarritoInput = {
    update: XOR<ProductoUpdateWithoutItemCarritoInput, ProductoUncheckedUpdateWithoutItemCarritoInput>
    create: XOR<ProductoCreateWithoutItemCarritoInput, ProductoUncheckedCreateWithoutItemCarritoInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutItemCarritoInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutItemCarritoInput, ProductoUncheckedUpdateWithoutItemCarritoInput>
  }

  export type ProductoUpdateWithoutItemCarritoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    compartido?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFieldUpdateOperationsInput | $Enums.Subcategoria
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutProductoNestedInput
    itemsPedido?: ItemPedidoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutItemCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    compartido?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFieldUpdateOperationsInput | $Enums.Subcategoria
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutProductoNestedInput
    itemsPedido?: ItemPedidoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type UsuarioCreateWithoutPedidosInput = {
    nombre: string
    correo: string
    contrasena: string
    rol?: $Enums.Rol
    creadoEn?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    carrito?: ItemCarritoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    id?: number
    nombre: string
    correo: string
    contrasena: string
    rol?: $Enums.Rol
    creadoEn?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    carrito?: ItemCarritoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type ItemPedidoCreateWithoutPedidoInput = {
    cantidad: number
    precioUnitario: number
    producto: ProductoCreateNestedOneWithoutItemsPedidoInput
  }

  export type ItemPedidoUncheckedCreateWithoutPedidoInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnitario: number
  }

  export type ItemPedidoCreateOrConnectWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateManyPedidoInputEnvelope = {
    data: ItemPedidoCreateManyPedidoInput | ItemPedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    carrito?: ItemCarritoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrito?: ItemCarritoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoCreateWithoutItemsInput = {
    total: number
    estado?: $Enums.EstadoPedido
    direccion: string
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutItemsInput = {
    id?: number
    usuarioId: number
    total: number
    estado?: $Enums.EstadoPedido
    direccion: string
    creadoEn?: Date | string
  }

  export type PedidoCreateOrConnectWithoutItemsInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
  }

  export type ProductoCreateWithoutItemsPedidoInput = {
    nombre: string
    descripcion: string
    precio: number
    stock: number
    compartido?: boolean
    imagenUrl?: string | null
    categoria: $Enums.Categoria
    subcategoria: $Enums.Subcategoria
    creadoEn?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutProductoInput
    itemCarrito?: ItemCarritoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutItemsPedidoInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    stock: number
    compartido?: boolean
    imagenUrl?: string | null
    categoria: $Enums.Categoria
    subcategoria: $Enums.Subcategoria
    creadoEn?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutProductoInput
    itemCarrito?: ItemCarritoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutItemsPedidoInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutItemsPedidoInput, ProductoUncheckedCreateWithoutItemsPedidoInput>
  }

  export type PedidoUpsertWithoutItemsInput = {
    update: XOR<PedidoUpdateWithoutItemsInput, PedidoUncheckedUpdateWithoutItemsInput>
    create: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItemsInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItemsInput, PedidoUncheckedUpdateWithoutItemsInput>
  }

  export type PedidoUpdateWithoutItemsInput = {
    total?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido
    direccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido
    direccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUpsertWithoutItemsPedidoInput = {
    update: XOR<ProductoUpdateWithoutItemsPedidoInput, ProductoUncheckedUpdateWithoutItemsPedidoInput>
    create: XOR<ProductoCreateWithoutItemsPedidoInput, ProductoUncheckedCreateWithoutItemsPedidoInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutItemsPedidoInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutItemsPedidoInput, ProductoUncheckedUpdateWithoutItemsPedidoInput>
  }

  export type ProductoUpdateWithoutItemsPedidoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    compartido?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFieldUpdateOperationsInput | $Enums.Subcategoria
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutProductoNestedInput
    itemCarrito?: ItemCarritoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutItemsPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    compartido?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    subcategoria?: EnumSubcategoriaFieldUpdateOperationsInput | $Enums.Subcategoria
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutProductoNestedInput
    itemCarrito?: ItemCarritoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type MovimientoStockCreateWithoutMateriaPrimaInput = {
    tipo: $Enums.TipoMovimiento
    cantidad: number
    nota?: string | null
    creadoEn?: Date | string
  }

  export type MovimientoStockUncheckedCreateWithoutMateriaPrimaInput = {
    id?: number
    tipo: $Enums.TipoMovimiento
    cantidad: number
    nota?: string | null
    creadoEn?: Date | string
  }

  export type MovimientoStockCreateOrConnectWithoutMateriaPrimaInput = {
    where: MovimientoStockWhereUniqueInput
    create: XOR<MovimientoStockCreateWithoutMateriaPrimaInput, MovimientoStockUncheckedCreateWithoutMateriaPrimaInput>
  }

  export type MovimientoStockCreateManyMateriaPrimaInputEnvelope = {
    data: MovimientoStockCreateManyMateriaPrimaInput | MovimientoStockCreateManyMateriaPrimaInput[]
    skipDuplicates?: boolean
  }

  export type MovimientoStockUpsertWithWhereUniqueWithoutMateriaPrimaInput = {
    where: MovimientoStockWhereUniqueInput
    update: XOR<MovimientoStockUpdateWithoutMateriaPrimaInput, MovimientoStockUncheckedUpdateWithoutMateriaPrimaInput>
    create: XOR<MovimientoStockCreateWithoutMateriaPrimaInput, MovimientoStockUncheckedCreateWithoutMateriaPrimaInput>
  }

  export type MovimientoStockUpdateWithWhereUniqueWithoutMateriaPrimaInput = {
    where: MovimientoStockWhereUniqueInput
    data: XOR<MovimientoStockUpdateWithoutMateriaPrimaInput, MovimientoStockUncheckedUpdateWithoutMateriaPrimaInput>
  }

  export type MovimientoStockUpdateManyWithWhereWithoutMateriaPrimaInput = {
    where: MovimientoStockScalarWhereInput
    data: XOR<MovimientoStockUpdateManyMutationInput, MovimientoStockUncheckedUpdateManyWithoutMateriaPrimaInput>
  }

  export type MovimientoStockScalarWhereInput = {
    AND?: MovimientoStockScalarWhereInput | MovimientoStockScalarWhereInput[]
    OR?: MovimientoStockScalarWhereInput[]
    NOT?: MovimientoStockScalarWhereInput | MovimientoStockScalarWhereInput[]
    id?: IntFilter<"MovimientoStock"> | number
    materiaPrimaId?: IntFilter<"MovimientoStock"> | number
    tipo?: EnumTipoMovimientoFilter<"MovimientoStock"> | $Enums.TipoMovimiento
    cantidad?: FloatFilter<"MovimientoStock"> | number
    nota?: StringNullableFilter<"MovimientoStock"> | string | null
    creadoEn?: DateTimeFilter<"MovimientoStock"> | Date | string
  }

  export type MateriaPrimaCreateWithoutMovimientosInput = {
    nombre: string
    descripcion?: string | null
    cantidad: number
    unidad: string
    creadoEn?: Date | string
  }

  export type MateriaPrimaUncheckedCreateWithoutMovimientosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    cantidad: number
    unidad: string
    creadoEn?: Date | string
  }

  export type MateriaPrimaCreateOrConnectWithoutMovimientosInput = {
    where: MateriaPrimaWhereUniqueInput
    create: XOR<MateriaPrimaCreateWithoutMovimientosInput, MateriaPrimaUncheckedCreateWithoutMovimientosInput>
  }

  export type MateriaPrimaUpsertWithoutMovimientosInput = {
    update: XOR<MateriaPrimaUpdateWithoutMovimientosInput, MateriaPrimaUncheckedUpdateWithoutMovimientosInput>
    create: XOR<MateriaPrimaCreateWithoutMovimientosInput, MateriaPrimaUncheckedCreateWithoutMovimientosInput>
    where?: MateriaPrimaWhereInput
  }

  export type MateriaPrimaUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: MateriaPrimaWhereInput
    data: XOR<MateriaPrimaUpdateWithoutMovimientosInput, MateriaPrimaUncheckedUpdateWithoutMovimientosInput>
  }

  export type MateriaPrimaUpdateWithoutMovimientosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriaPrimaUncheckedUpdateWithoutMovimientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: FloatFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateManyUsuarioInput = {
    id?: number
    productoId: number
    creadoEn?: Date | string
  }

  export type ItemCarritoCreateManyUsuarioInput = {
    id?: number
    productoId: number
    cantidad: number
  }

  export type PedidoCreateManyUsuarioInput = {
    id?: number
    total: number
    estado?: $Enums.EstadoPedido
    direccion: string
    creadoEn?: Date | string
  }

  export type FavoritoUpdateWithoutUsuarioInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCarritoUpdateWithoutUsuarioInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutItemCarritoNestedInput
  }

  export type ItemCarritoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarritoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoUpdateWithoutUsuarioInput = {
    total?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido
    direccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido
    direccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    estado?: EnumEstadoPedidoFieldUpdateOperationsInput | $Enums.EstadoPedido
    direccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateManyProductoInput = {
    id?: number
    usuarioId: number
    creadoEn?: Date | string
  }

  export type ItemPedidoCreateManyProductoInput = {
    id?: number
    pedidoId: number
    cantidad: number
    precioUnitario: number
  }

  export type ItemCarritoCreateManyProductoInput = {
    id?: number
    usuarioId: number
    cantidad: number
  }

  export type FavoritoUpdateWithoutProductoInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemCarritoUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutCarritoNestedInput
  }

  export type ItemCarritoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCarritoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyPedidoInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnitario: number
  }

  export type ItemPedidoUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutItemsPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type MovimientoStockCreateManyMateriaPrimaInput = {
    id?: number
    tipo: $Enums.TipoMovimiento
    cantidad: number
    nota?: string | null
    creadoEn?: Date | string
  }

  export type MovimientoStockUpdateWithoutMateriaPrimaInput = {
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoStockUncheckedUpdateWithoutMateriaPrimaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoStockUncheckedUpdateManyWithoutMateriaPrimaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}