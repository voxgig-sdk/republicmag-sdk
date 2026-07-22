
import { Context } from './Context'


class RepublicmagError extends Error {

  isRepublicmagError = true

  sdk = 'Republicmag'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RepublicmagError
}

