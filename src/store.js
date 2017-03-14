let store = {
  state: {
    count: 1
  },
  actions: {
    increment () {
      store.state.count++
      console.log(store.state.count)
    }
  },
  commit (actionName) {
    this.actions[actionName]()
  }
}

export default store
