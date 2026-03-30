declare module 'klaro/dist/klaro-no-css' {
  export function setup(config: import('./klaro-types').KlaroConfig): void
  export function getManager(config?: import('./klaro-types').KlaroConfig): import('./klaro-types').KlaroManager
}
