import { AsyncScope } from './hooks/async-scope'
import { LoadStorage } from '../application/contracts/load-storage'
import { SetStorage } from '../application/contracts/set-storage'

/**
 * Class to manage asynchronous variables using AsyncLocalStorage.
 * @template T - The type of the variable value.
 */
export class AsyncStorage implements LoadStorage, SetStorage {
  // A unique symbol for the variable name
  private readonly symbol = Symbol(this.name);

  /**
   * Constructor of the AsyncVar class.
   * @param name - The name of the variable.
   */
  constructor (readonly name: string) {}

  /**
   * Sets the value of the variable in the current async scope.
   * @param value - The value to be set.
   */
  set <R>(varName: R): void {
    // Get the current async scope
    const scope = AsyncScope.get()
    // Set the value in the scope using the unique symbol
    scope[this.symbol] = varName
  }

  /**
   * Gets the value of the variable from the current async scope.
   * @template R - The expected return type.
   * @returns The value of the variable.
   * @throws Will throw an error if the variable does not exist in the scope.
   */
  get <R>(): R {
    // Check if the variable exists in the scope
    if (!this.exists()) {
      throw new Error(`Variable "${this.name}" not found`)
    }

    // Get the current async scope
    const scope = AsyncScope.get()
    // Return the value from the scope, cast to the expected return type
    return scope[this.symbol] as R
  }

  /**
   * Checks if the variable exists in the current async scope.
   * @returns True if the variable exists, false otherwise.
   */
  exists (): boolean {
    // Get the current async scope
    const scope = AsyncScope.get()
    // Check if the symbol for the variable exists in the scope
    return this.symbol in scope
  }
}
