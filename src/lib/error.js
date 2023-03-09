

export class AuthorizatsionError extends Error {
  constructor(message) {
    super()
    this.status = 401
    this.message = message,
      this.name = 'AuthorizatsionError'
  }
}

export class ValidationError extends Error {
  constructor(message) {
    super()
    this.status = 401
    this.message = message,
      this.name = 'ValidationError'
  }
}

export class ForbiddineError extends Error {
  constructor(message) {
    super()
    this.status = 403
    this.message = message,
      this.name = 'ForbiddineError'
  }
}

export class InternalServerError extends Error {
  constructor() {
    super()
    this.status = 500
    this.message = "InternalServerError",
      this.name = 'InternalServerError'
  }
}

export class BedRequest extends Error {
  constructor(message) {
    super()
    this.status = 400
    this.message = message,
      this.name = 'BedRequest'
  }
}