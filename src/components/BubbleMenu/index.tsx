"use client";
import { useRef, useEffect, useState } from "react";

// Tipos personalizados
interface Position {
  x: number;
  y: number;
}

interface Bubble {
  id: number;
  label: string;
}

const BubbleMenu: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCenter, setVisibleCenter] = useState<Position>({ x: 0, y: 0 });

  // Array de nombres
  const names: string[] = [
    "John", "Sofia", "Carlos", "Emily", "Daniel", "Laura", "Miguel", "Sara",
    "Lucia", "Pedro", "Ana", "Diego", "Elena", "Mario", "Isabel", "Victor",
    "Clara", "Gabriel", "Paula", "Fernando", "Valeria", "Luis", "Carmen",
    "Javier", "Andrea", "Alberto", "Cristina", "Roberto", "Patricia", "Tomás",
    "Rosa", "Alba", "Iván", "Beatriz", "David", "Angela", "Hugo", "Natalia",
    "Oscar", "Marta", "Enrique", "Julia", "Ramiro", "Noelia", "Lucas", "Silvia",
    "Diego", "Marina", "Jorge", "Emma",
  ];

  // Crear las burbujas mapeando nombres (ciclo si hay más burbujas que nombres)
  const bubbles: Bubble[] = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    label: names[i % names.length],
  }));

  const updateVisibleCenter = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollTop = container.scrollTop;
      const visibleWidth = container.offsetWidth;
      const visibleHeight = container.offsetHeight;

      // Calcular el centro visible del contenedor
      setVisibleCenter({
        x: scrollLeft + visibleWidth / 2,
        y: scrollTop + visibleHeight / 2,
      });
    }
  };

  useEffect(() => {
    updateVisibleCenter(); // Inicializa el centro al montar
    const container = containerRef.current;

    // Actualizar el centro al hacer scroll
    if (container) {
      container.addEventListener("scroll", updateVisibleCenter);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateVisibleCenter);
      }
    };
  }, []);

  useEffect(() => {
    const centerScrollPosition = () => {
      const container = containerRef.current;
      if (container) {
        const scrollX = (container.scrollWidth - container.clientWidth) / 2;
        const scrollY = (container.scrollHeight - container.clientHeight) / 2;
        container.scrollLeft = scrollX;  // Centra el scroll horizontal
        container.scrollTop = scrollY;   // Centra el scroll vertical
      }
    };

    centerScrollPosition(); // Centrar el contenido cuando se monta el componente

    // También puedes volver a centrar cuando se redimensiona la ventana
    window.addEventListener("resize", centerScrollPosition);

    return () => {
      window.removeEventListener("resize", centerScrollPosition);
    };
  }, []);


  const calculateScale = (bubbleX: number, bubbleY: number): number => {
    const distance = Math.sqrt(
      Math.pow(visibleCenter.x - bubbleX, 2) +
      Math.pow(visibleCenter.y - bubbleY, 2)
    );
    return Math.max(0.5, 3 - distance / 200); // Diferencia de tamaño más notable
  };

  return (
    <div ref={containerRef} className="container-bubble-menu">
      {bubbles.map((bubble, index) => {
        const row = Math.floor(index / 10); // Fila
        const col = index % 10; // Columna

        // Aumentamos la separación entre las burbujas y los bordes
        const marginX = 50; // margen en X
        const marginY = 20; // margen en Y

        // Posiciones con efecto ladrillo y mayor separación
        const bubbleX = col * 88 + (row % 2 === 0 ? 0 : 40) + marginX; // Alterna la posición X según la fila
        const bubbleY = row * 85 + marginY; // Más separación entre filas y bordes

        const scale = calculateScale(bubbleX, bubbleY);

        return (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              left: `${bubbleX}px`,
              top: `${bubbleY}px`,
              transform: `scale(${scale})`,
            }}
          >
            {bubble.label}
          </div>
        );
      })}
    </div>
    
  );
};

export default BubbleMenu;
