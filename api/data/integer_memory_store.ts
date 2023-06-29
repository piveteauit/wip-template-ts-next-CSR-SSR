class InMemoryStore {
  _value: any

  constructor() {
    this._value = 3
  }

  incr() {
    this._value = (this._value + 1) % 100000
  }

  decr() {
    this._value--
    if (this._value < -100000) {
      this._value = 0
    }
  }

  get value() {
    return this._value
  }
}

export default new InMemoryStore()
