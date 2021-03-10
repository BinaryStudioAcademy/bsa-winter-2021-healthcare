type Constructor = {
  storage: globalThis.Storage;
};

class Storage {
  #storage: globalThis.Storage;

  constructor({ storage }: Constructor) {
    this.#storage = storage;
  }

  getItem(key: string): string | null {
    return this.#storage.getItem(key);
  }

  setItem(key: string, value: string): void {
    return this.#storage.setItem(key, value);
  }

  removeItem(key: string): void {
    return this.#storage.removeItem(key);
  }

  clear(): void {
    return this.#storage.clear();
  }
}

export { Storage };
