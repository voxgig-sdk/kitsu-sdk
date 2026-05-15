
import { Context } from './Context'


class KitsuError extends Error {

  isKitsuError = true

  sdk = 'Kitsu'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  KitsuError
}

