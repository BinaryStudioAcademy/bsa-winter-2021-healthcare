type Constructor = {
  storage: globalThis.Storage;
};

class Storage {
  _storage: globalThis.Storage;

  constructor({ storage }: Constructor) {
    this._storage = storage;
  }

  getItem(key: string): string | null {
    return this._storage.getItem(key);
  }

  setItem(key: string, value: string): void {
    return this._storage.setItem(key, value);
  }

  removeItem(key: string): void {
    return this._storage.removeItem(key);
  }

  clear(): void {
    return this._storage.clear();
  }
}

export { Storage };
