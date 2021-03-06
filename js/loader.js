// ASSEMBLYSCRIPT LOADER WITH HELPER FUNCTIONS

class WasmLoader {
  constructor() {
    this._imports = {
      env: {
        abort() {
          throw new Error("abort called from wasm file");
        },
      },
      index: {
        log(a, b) {
          console.log(a, b);
        },
      },
    };
  }

  async wasm(path, imports = this._imports) {
    console.log(`Fetching ${path}`);

    if (!loader.instantiateStreaming) {
      return this.wasmFallback(path, imports);
    }

    const instance = await loader.instantiateStreaming(fetch(path), imports);
    return instance?.exports;
  }

  async wasmFallback(path, imports) {
    console.log(`Using fallback ${path}`);
    const response = await fetch(path);
    const bytes = await response?.arrayBuffer();
    const instance = loader.instantiate(bytes, imports);

    return instance?.exports;
  }
}
