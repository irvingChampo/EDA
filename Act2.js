class Nodo {
    constructor(usuario) {
      this.usuario = usuario;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  class ArbolUsuarios {
    constructor() {
      this.raiz = null;
    }
  
    buscarPorId(id) {
      return this._buscarPorId(this.raiz, id);
    }
  
    _buscarPorId(nodo, id) {
      if (nodo === null) {
        return null;
      }
      if (id === nodo.usuario.id) {
        return nodo.usuario;
      } else if (id < nodo.usuario.id) {
        return this._buscarPorId(nodo.izquierda, id);
      } else {
        return this._buscarPorId(nodo.derecha, id);
      }
    }
  
    insertar(usuario) {
      this.raiz = this._insertar(this.raiz, usuario);
    }
  
    _insertar(nodo, usuario) {
      if (nodo === null) {
        return new Nodo(usuario);
      }
      if (usuario.id < nodo.usuario.id) {
        nodo.izquierda = this._insertar(nodo.izquierda, usuario);
      } else if (usuario.id > nodo.usuario.id) {
        nodo.derecha = this._insertar(nodo.derecha, usuario);
      }
      return nodo;
    }
  
    eliminarPorId(id) {
      this.raiz = this._eliminarPorId(this.raiz, id);
    }
  
    _eliminarPorId(nodo, id) {
      if (nodo === null) {
        return null;
      }
      if (id < nodo.usuario.id) {
        nodo.izquierda = this._eliminarPorId(nodo.izquierda, id);
      } else if (id > nodo.usuario.id) {
        nodo.derecha = this._eliminarPorId(nodo.derecha, id);
      } else {
        if (nodo.izquierda === null) {
          return nodo.derecha;
        } else if (nodo.derecha === null) {
          return nodo.izquierda;
        }
        nodo.usuario = this._encontrarMinimo(nodo.derecha);
        nodo.derecha = this._eliminarMinimo(nodo.derecha);
      }
      return nodo;
    }
  
    _encontrarMinimo(nodo) {
      while (nodo.izquierda !== null) {
        nodo = nodo.izquierda;
      }
      return nodo.usuario;
    }
  
    _eliminarMinimo(nodo) {
      if (nodo.izquierda === null) {
        return nodo.derecha;
      }
      nodo.izquierda = this._eliminarMinimo(nodo.izquierda);
      return nodo;
    }
  
    actualizarPorId(id, nuevoUsuario) {
      this.eliminarPorId(id);
      this.insertar(nuevoUsuario);
    }
  }
  
  const arbol = new ArbolUsuarios();
  
  const usuario1 = {
    id: 1,
    usuario: "Irving14",
    password: "1234",
    nombre: "Irving",
    apellidos: "Champo"
  };
  
  const usuario2 = {
    id: 2,
    usuario: "Osvaldo14",
    password: "4321",
    nombre: "Osvaldo",
    apellidos: "Narcía"
  };
  
  arbol.insertar(usuario1);
  arbol.insertar(usuario2);
  
  const usuarioEncontrado = arbol.buscarPorId(1);
  console.log(usuarioEncontrado);
  
  arbol.actualizarPorId(1, {
    id: 1,
    usuario: "Irving14(2)",
    password: "1234(2)",
    nombre: "Irving(2)",
    apellidos: "Champo(2)"
  });
  
  const usuarioActualizado = arbol.buscarPorId(1);
  console.log(usuarioActualizado);
  
  arbol.eliminarPorId(2);
  const usuarioEliminado = arbol.buscarPorId(2);
  console.log(usuarioEliminado);
  