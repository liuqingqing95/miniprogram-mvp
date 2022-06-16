console.log(globalThis.a.b)
Promise.resolve().then(() => {
  throw Error('213221')
})
