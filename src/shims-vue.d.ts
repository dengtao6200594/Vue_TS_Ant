declare module '*.vue' {
  import Vue from 'vue'
  declare global {
    namespace User{
      interface UserInfo {
        username: string,
        password: string
      }
    }
  }
  export default Vue
}
