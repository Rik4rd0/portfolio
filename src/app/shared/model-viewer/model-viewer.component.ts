import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Importar OrbitControls

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.scss']
})
export class ModelViewerComponent implements AfterViewInit {
 
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.init3DScene();
    } else {
      console.warn('El entorno actual no soporta APIs del navegador.');
    }
  }

  private init3DScene(): void {
    
    const container = this.el.nativeElement;

    // Crear la escena
    const scene = new THREE.Scene();

    // Crear la cámara
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(0, 2, 5); // Elevar la cámara en el eje Y
    camera.lookAt(0, 0, 0); // Hacer que la cámara mire hacia el centro de la escena

    // Crear el renderizador
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Habilitar transparencia
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0); // Fondo transparente (color negro con 0 de opacidad)
    container.appendChild(renderer.domElement);
    
    // Crear un cubo más "teclado 1"
    const geometry = new THREE.BoxGeometry(3.2, 0.1, 1.50); // Ancho = 5, Alto = Profundidad = 3
    const material = new THREE.MeshBasicMaterial({ color: 0x0000000 }); // Marrón
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Resaltar los bordes del cubo
    const edges = new THREE.EdgesGeometry(geometry); // Geometría de los bordes
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x333333 }); // Material para los bordes (blanco)
    const edgesMesh = new THREE.LineSegments(edges, edgesMaterial);
    scene.add(edgesMesh);

    // Crear un cubo horizontal (cubo monitor)
    const m1Geometry = new THREE.BoxGeometry(4, 2.5, 0.2); // Ancho = 4, Alto = 0.1, Profundidad = 2
    const m1Material = new THREE.MeshBasicMaterial({ color: 0x000000})// Marrón
    const mCube1 = new THREE.Mesh(m1Geometry, m1Material);
    mCube1.position.set(0, 1.70, -2); // Posicionar el cubo horizontal centrado arriba del cubo base
    scene.add(mCube1);
    // Crear un cubo horizontal (cubo monitor)
    const m3Geometry = new THREE.BoxGeometry(3, 2, 0.3); // Ancho = 4, Alto = 0.1, Profundidad = 2
    const m3Material = new THREE.MeshBasicMaterial({ color: 0x272B2A})// Marrón
    const mCube3 = new THREE.Mesh(m3Geometry, m3Material);
    mCube3.position.set(0, 1.70, -2.2); // Posicionar el cubo horizontal centrado arriba del cubo base
    scene.add(mCube3);

    // Crear un cubo horizontal (cubo monitor)
    const m2Geometry = new THREE.BoxGeometry(3.5, 2.2, 0.1); // Ancho = 4, Alto = 0.1, Profundidad = 2
    const m2Material = new THREE.MeshBasicMaterial({ color: 0x1F2020 }); // Gris oscuro para simular una pantalla apagada
    const mCube2 = new THREE.Mesh(m2Geometry, m2Material);
    mCube2.position.set(0, 1.70, -1.92); // Posicionar el cubo horizontal centrado arriba del cubo base
    scene.add(mCube2);

    // Crear un cubo horizontal (cubo monitor)
    const m4Geometry = new THREE.CylinderGeometry(0.70, 0.70, 0.15, 20); // Radio superior e inferior = 0.25, Altura = 0.25, Segmentos = 32
    const m4Material = new THREE.MeshBasicMaterial({ color: 0x1F2020 }); // Gris oscuro para simular una pantalla apagada
    const mCube4 = new THREE.Mesh(m4Geometry, m4Material);
    mCube4.rotation.z = Math.PI / 120; // Rotar para que quede acostado
    mCube4.position.set(0, 0, -2.16); // Posicionar el cilindro horizontal centrado
    scene.add(mCube4);

    // Crear un cubo horizontal (cubo monitor)
    const m5Geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.90, 20); // Radio superior e inferior = 0.25, Altura = 0.25, Segmentos = 32
    const m5Material = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Gris oscuro para simular una pantalla apagada
    const mCube5 = new THREE.Mesh(m5Geometry, m5Material);
    mCube5.rotation.z = Math.PI / 120; // Rotar para que quede acostado
    mCube5.position.set(0, 0.4, -2.16); // Posicionar el cilindro horizontal centrado
    scene.add(mCube5);
    
    // Crear un lienzo para simular la terminal
    const terminalCanvas = document.createElement('canvas');
    terminalCanvas.width = 512; // Mayor resolución para texto más claro
    terminalCanvas.height = 256;
    const terminalContext = terminalCanvas.getContext('2d')!;

    // Estilo de la terminal
    terminalContext.fillStyle = '#0D0D0D'; // Fondo gris más oscuro simulando pantalla
    terminalContext.fillRect(0, 0, terminalCanvas.width, terminalCanvas.height);
    terminalContext.fillStyle = '#FFFFFF'; // Texto blanco (estilo terminal)
    terminalContext.font = '20px Courier New'; // Fuente estilo terminal
    terminalContext.textAlign = 'left';
    terminalContext.textBaseline = 'top';

    // Texto simulado de la terminal
    const terminalText = [
      '',
      'C:\\Users\\RICK> npm start',
      'Starting the development server...',
      '',
      'Compiled successfully!',
      'You can now view your app in the browser.',
      '',
      'Local:            http://localhost:4200',
      'On Your Network:  http://192.168.0.10:4200',
      '',
    ];

    // Dibujar el texto línea por línea
    let yOffset = 10; // Margen superior
    terminalText.forEach((line) => {
      terminalContext.fillText(line, 10, yOffset); // Margen izquierdo de 10px
      yOffset += 25; // Espaciado entre líneas
    });

    // Crear una textura a partir del lienzo
    const terminalTexture = new THREE.CanvasTexture(terminalCanvas);

    // Usar la textura como material para el cubo negro
    mCube2.material = new THREE.MeshBasicMaterial({ map: terminalTexture }); // Gris más claro
    terminalContext.fillStyle = '#00FF00'; // Resaltar las letras en verde brillante
    terminalContext.font = 'bold 20px Courier New'; // Letras en negrita

    // Actualizar la textura para que se vea correctamente
    terminalTexture.needsUpdate = true;

    // Crear teclas del teclado
    const keySize = 0.2; // Tamaño uniforme para que los cubos sean cuadrados
    const spacing = 0.02; // Espaciado entre teclas
    const rowSpacing = 0.03; // Espaciado entre filas

    // Disposición de las teclas en un teclado típico de portátil
    const keyboardLayout = [
      14, // // Fila de letras (A-S-D-F-G-H-J-K-L)
      13, // Fila de letras (Z-X-C-V-B...)
      14, // Fila de letras (A-S-D-F-G...)
      14, // Fila de letras (Q-W-E-R-T-Y...)
      14, // Fila de números (1-0, -, =, Backspace)
      14, // Fila de teclas de función (F1-F12, Esc, etc.)
    ];

    // Ajustar la posición base para centrar el teclado dentro del cubo grande
    const baseX = 0; // Centrar horizontalmente dentro del cubo grande
    const baseY = 0.05; // Ajustar para que las teclas estén dentro del cubo grande
    const baseZ = 0.5; // Mantenerlas en el mismo nivel en el eje Z

    keyboardLayout.forEach((keysInRow, rowIndex) => {
      const rowOffsetX = -(keysInRow * (keySize + spacing)) / 2 + (keySize / 2); // Centrar cada fila

      // Ajustar la posición en el eje Z para distribuir las filas uniformemente
      const rowOffsetZ = rowIndex * (keySize + rowSpacing); // Separar filas en el eje Z

      for (let col = 0; col < keysInRow; col++) {
        const keyGeometry = new THREE.BoxGeometry(keySize, keySize, keySize); // Cubos cuadrados

        // Crear un lienzo para renderizar texto
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const context = canvas.getContext('2d')!;
        context.fillStyle = '#000000'; // Fondo negro
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#ffffff'; // Texto blanco
        context.font = '48px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        // Generar texto dinámico para las teclas
        let keyLabel = '';
        if (rowIndex === 0) {
            // Fila de teclas de función
            if (col === 0) {
              keyLabel = 'Ctrl';
            } else if (col === 1) {
              keyLabel = 'Fn';
            } else if (col === 2) {
              keyLabel = 'Win';
            } else if (col === 3) {
              keyLabel = 'Alt';
            } else if (col === 4) {
              keyLabel = ''; // Espacio vacío
               // Hacer la tecla de espacio más larga
            } 
           else if (col === 7) {
            keyLabel = ''; 
          } else if (col === 8) {
            keyLabel = '';// Espacio vacío
          } 
            else if (col === 7) {
              keyLabel = '';
            } else if (col === 8) {
              
              keyLabel = '';
            } else if (col === 9) {
              
              keyLabel = '';
            } else if (col === 10) {
              keyLabel = 'win';
            } else if (col === 11) {
              keyLabel = 'Alt';
            } else if (col === 12) {
              keyLabel = 'Fn';
            }
           else if (col === 13) {
            keyLabel = 'ctrl';
           }
        } else if (rowIndex === 1) {
            // Fila de números
            if (col === 0) {
              keyLabel = 'Shift';
              keyGeometry.scale(2, 1, 1); // Hacer la tecla Shift más grande
            } else {
              keyLabel = 'ZXCVBNM,'[col - 1] || '';
              if (col === 8) {
              keyLabel = ',';
              } else if (col === 9) {
              keyLabel = '.';
              }else if (col === 10) {
                keyLabel = '-';
              }else if (col === 11){
                keyLabel ='Shift'
                keyGeometry.scale(2, 1, 1);
              }
            }
          } 
          else if (rowIndex === 2) {
          // Fila de letras (ASDF)
          keyLabel = col === 0 ? 'Mayús' : 'ASDFGHJKLÑ'[col - 1] || '';
          if (col === 10) {
            keyLabel = '[';
          }
          } else if (rowIndex === 3) {
        // Fila de letras (QWERTY)
        keyLabel = 'QWERTYUIOP,'[col] || '';
        if (col === 10) {
          keyLabel = '+';
        } else if (col === 11) {
          keyLabel = '"';
        } else if (col === 12) {
          keyLabel = 'Enter';
          keyGeometry.scale(1.5, 1, 1.5); // Hacer el botón de "Enter" más grande
        }
        } else if (rowIndex === 4) {
          // Fila de letras (ZXCV)
            if (col < 9) {
              keyLabel = `${col + 1}`;
            } else if (col === 9) {
              keyLabel = '0';
            } else if (col === 10) {
              keyLabel = '?';
            } else if (col === 11) {
              keyLabel = '¿';
            } else if (col === 12) {
              keyLabel = '←';
              keyGeometry.scale(1.5, 1, 1); // Hacer el último botón más grande
            }
        } else if (rowIndex ===5){
          //fila ctrl
            keyLabel = col === 0 ? 'Esc' : col < 13 ? `F${col}` : 'Supr'; // Assign 'Esc' for the first key, F1 to F12 for the next, and 'Supr' for the last key
        }
        
        if (keyLabel) {
          context.fillText(keyLabel, canvas.width / 2, canvas.height / 2); // Dibujar texto en la tecla
        }

        // Crear una textura a partir del lienzo
        const texture = new THREE.CanvasTexture(canvas);

        // Usar la textura como material
        const keyMaterial = new THREE.MeshBasicMaterial({ map: texture });

        const key = new THREE.Mesh(keyGeometry, keyMaterial);

        // Posicionar cada tecla en la fila correspondiente
        key.position.set(
          baseX + rowOffsetX + col * (keySize + spacing), // Posición en X
          baseY, // Posición en Y (todas las teclas están al mismo nivel)
          baseZ - rowOffsetZ // Posición en Z (separar filas uniformemente)
        );

        // Rotar cada tecla en el eje X para que mire hacia arriba
        key.rotation.x = 0; // Sin rotación

        scene.add(key);
      }
    });

    // Variables para controlar la rotación
    let autoRotateAngle = 0; // Ángulo actual de rotación
    let rotateDirection = 1; // Dirección de rotación (1 = hacia adelante, -1 = hacia atrás)
    const maxRotationAngle = Math.PI / 4; // Ángulo máximo permitido (45 grados)
    let isUserInteracting = false; // Bandera para detectar interacción del usuario

    // Agregar controles de órbita para interacción con el mouse
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Suavizar el movimiento
    controls.dampingFactor = 0.05;

    // Limitar el zoom
    controls.minDistance = 2; // Distancia mínima de la cámara al objeto
    controls.maxDistance = 10; // Distancia máxima de la cámara al objeto

    // Configurar rotación automática
    controls.autoRotate = true; // Activar rotación automática por defecto
    controls.autoRotateSpeed = 2; // Velocidad de rotación automática
    controls.enablePan = false; // Deshabilitar paneo
    controls.enableRotate = true; // Permitir rotación manual
    controls.enableZoom = true; // Permitir zoom

    // Detectar cuando el mouse entra y sale del contenedor
    container.addEventListener('mouseenter', () => {
      if (!isUserInteracting) {
        controls.autoRotate = true; // Activar rotación automática al pasar el mouse
      }
    });

    container.addEventListener('mouseleave', () => {
      if (!isUserInteracting) {
        controls.autoRotate = false; // Desactivar rotación automática al salir el mouse
      }
    });

    // Detectar interacción del usuario
    container.addEventListener('mousedown', () => {
      isUserInteracting = true; // El usuario está interactuando
      controls.autoRotate = false; // Desactivar rotación automática mientras interactúa
    });

    container.addEventListener('mouseup', () => {
      isUserInteracting = false; // El usuario dejó de interactuar
      controls.autoRotate = true; // Reactivar rotación automática
    });

    // Animación personalizada para rotación automática
    const animate = () => {
      requestAnimationFrame(animate);

      // Controlar la rotación automática
      if (controls.autoRotate && !isUserInteracting) {
        autoRotateAngle += rotateDirection * 0.01; // Incrementar o decrementar el ángulo

        // Cambiar la dirección si se alcanza el ángulo máximo
        if (autoRotateAngle >= maxRotationAngle || autoRotateAngle <= -maxRotationAngle) {
          rotateDirection *= -1; // Invertir la dirección
        }

        // Aplicar la rotación al control
        controls.object.position.x = Math.sin(autoRotateAngle) * 5; // Ajustar la posición en X
        controls.object.position.z = Math.cos(autoRotateAngle) * 5; // Ajustar la posición en Z
        controls.object.lookAt(0, 0, 0); // Mantener la cámara mirando al centro
      }

      // Actualizar controles
      controls.update();

      // Renderizar la escena
      renderer.render(scene, camera);
    };

    animate();
  }
}
