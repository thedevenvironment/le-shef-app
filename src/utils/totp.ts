import { Buffer } from 'buffer'
import { totpToken, totpOptions, KeyEncodings } from '@otplib/core'
import { keyDecoder } from '@otplib/plugin-base32-enc-dec'
import { createDigest } from '@otplib/plugin-crypto-js'
import { parse } from 'querystring'

// Set Buffer
global.Buffer = Buffer

/**
 * Generate TOTP
 * -
 */
export function generateTotp(data: string): { totp: string; issuer: string } {
  const { issuer = '', secret } = parse(data.split('?')[1]) as unknown as { issuer: string; secret: string }
  return {
    issuer,
    totp: totpToken(
      keyDecoder(secret, KeyEncodings.HEX),
      totpOptions({
        createDigest,
        encoding: KeyEncodings.HEX
      })
    )
  }
}
