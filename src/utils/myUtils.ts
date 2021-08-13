import CryptoJS from 'crypto-js'
/**
 * 
 * @param pwd 待加密的参数
 * @returns 已加密的字符串
 */
export const encrypt = (pwd: string): string => {
  const src: CryptoJS.lib.WordArray = CryptoJS.enc.Utf8.parse(pwd)
  const key: CryptoJS.lib.WordArray = CryptoJS.enc.Utf8.parse('abcdefgabcdefg12')
  const iv: CryptoJS.lib.WordArray = CryptoJS.enc.Utf8.parse('abcdefgabcdefg12')
  return CryptoJS.AES.encrypt(src, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).ciphertext.toString().toUpperCase()
}

export const decrypt = (pwd: string): string => {
  const key: CryptoJS.lib.WordArray = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12")
  const iv: CryptoJS.lib.WordArray = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12")
  let baseResult: CryptoJS.lib.WordArray = CryptoJS.enc.Hex.parse(pwd)
  let cipherText: string = CryptoJS.enc.Base64.stringify(baseResult)
  return CryptoJS.AES.decrypt(cipherText, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8).toString()
}