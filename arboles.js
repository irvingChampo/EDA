// Creamos la clase de nodos
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  // Definimos el arbol
  class BinaryTree {
    constructor() {
      this.raiz = null;
    }
  
    // Función del árbol para agregar un valor
    insertar(valor) {
      // Crear nodo
      const nodoNuevo = new Nodo(valor);
      // Si el árbol está vacío
      if (this.raiz === null) {
        this.raiz = nodoNuevo;
        return true;
      } else {
        // Buscar la posición en el árbol si ya tiene datos
        let nodoActual = this.raiz;
        while (true) {
          // Si es menor se va al sub-árbol de la izquierda
          if (valor < nodoActual.valor) {
            // Si el hijo de la izquierda está vacío se inserta un nodo
            if (nodoActual.izquierda === null) {
              nodoActual.izquierda = nodoNuevo;
              return true;
            }
            // Se mueve hacia el nodo de la izquierda
            nodoActual = nodoActual.izquierda;
          } else {
            // Si es mayor o igual te vas a la derecha
            // Si el sub-árbol derecho es nulo, se inserta un nuevo nodo
            if (nodoActual.derecha === null) {
              nodoActual.derecha = nodoNuevo;
              return true;
            }
            // Te mueves al nodo de la derecha
            nodoActual = nodoActual.derecha;
          }
        }
      }
    }
  
    // Función para la búsqueda
    buscar(valor) {
      // Inicializa el array de valores coincidentes
      const coincidencias = [];
  
      // Llama a una función para realizar la búsqueda recursiva
      this.buscarRecursivo(this.raiz, valor, coincidencias);
  
      // Devuelve el array de coincidencias
      return coincidencias;
    }
  
    buscarRecursivo(nodo, valor, coincidencias) {
      if (nodo === null) {
        return;
      }
  
      // Realiza la búsqueda en el sub-árbol izquierdo
      this.buscarRecursivo(nodo.izquierda, valor, coincidencias);
  
      // Compara el valor del nodo actual con el valor buscado
      if (nodo.valor === valor) {
        coincidencias.push(nodo.valor);
      }
  
      // Realiza la búsqueda en el sub-árbol derecho
      this.buscarRecursivo(nodo.derecha, valor, coincidencias);
    }
  }
  
  // Ejemplo de uso
  const binaryTree = new BinaryTree();
  binaryTree.insertar(5);
  binaryTree.insertar(5);
  binaryTree.insertar(6);
  binaryTree.insertar(5);
  
  // Método buscar y notificar si encuentra coincidencias
  console.log(binaryTree.buscar(5));
  console.log(binaryTree.buscar(6));
  