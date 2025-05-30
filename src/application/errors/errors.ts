export class NoSecretFoundError extends Error {
  constructor () {
    super('Not found secret key')
    this.name = 'NoSecretFoundError'
  }
}

export class JwtAdapterError extends Error {
  constructor (error: Error) {
    super(error.message)
    this.name = 'JwtAdapterError'
  }
}
export class ExpiredTokenError extends Error {
  constructor (error: Error) {
    super(error.message)
    this.name = 'ExpiredTokenError'
  }
}
export class CompanyAlreadyExistsError extends Error {
  constructor (fieldName: string) {
    super(`Company already exists with ${fieldName}`)
    this.name = 'CompanyAlreadyExistsError'
  }
}
export class CredentialsNotFoundError extends Error {
  constructor (fieldName: string) {
    super(`Cresdentials not found with ${fieldName}`)
    this.name = 'CredentialsNotFoundError'
  }
}
export class WrongPasswordError extends Error {
  constructor () {
    super(`Wrong password!`)
    this.name = 'WrongPasswordError'
  }
}
export class FirestoreError extends Error {
  constructor (error: Error) {
    super(`Firestore error ${error.message}`)
    this.name = 'FirestoreError'
  }
}