// Import AsyncLocalStorage from Node.js's async_hooks module
import { AsyncLocalStorage } from 'node:async_hooks'

// Create an instance of AsyncLocalStorage to store and access the async scope
const asyncLocalStorage = new AsyncLocalStorage<AsyncScope>()

/**
 * Interface defining the structure of the AsyncScope object.
 * Allows storing arbitrary data with symbols as keys.
 */
export interface AsyncScopes {
  [key: symbol]: unknown
}

/**
 * Class to manage asynchronous scopes using AsyncLocalStorage.
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AsyncScope {
  /**
   * Static method to get the current async scope.
   * @returns The current scope object.
   * @throws Will throw an error if the scope is not found.
   */
  static get (): any {
    // Retrieve the current scope from AsyncLocalStorage
    const scope = asyncLocalStorage.getStore()
    if (!scope) {
      // If no scope is found, throw an error
      throw new Error('Scope not found')
    }

    // Return the found scope
    return scope
  }

  /**
   * Constructor of the AsyncScope class that initializes a new async scope.
   * @param callback - The callback function to be run within the new scope.
   */
  constructor (callback: () => void) {
    // Get the parent scope from AsyncLocalStorage
    const parentScope = asyncLocalStorage.getStore()
    if (parentScope) {
      // If a parent scope exists, set it as the prototype of the current scope
      Object.setPrototypeOf(this, parentScope)
    }

    // Run the callback within the new scope
    asyncLocalStorage.run(this, callback)
  }

  /**
   * Lists all variables in the current async scope.
   * @returns An object containing all variables.
   */
  static listVariables (): Record<string | symbol, unknown> {
    const scope = this.get()
    const variables: Record<string | symbol, unknown> = {}
    Reflect.ownKeys(scope).forEach((key) => {
      variables[key] = scope[key]
    })
    return variables
  }
}
