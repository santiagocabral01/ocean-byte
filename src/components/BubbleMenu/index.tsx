"use client";
import { useRef, useEffect, useState } from "react";

const BubbleMenu = () => {
  const containerRef = useRef(null);
  const [visibleCenter, setVisibleCenter] = useState({ x: 0, y: 0 });

  // Array de nombres
  const names = [
    "John", "Sofia", "Carlos", "Emily", "Daniel", "Laura", "Miguel", "Sara",
    "Lucia", "Pedro", "Ana", "Diego", "Elena", "Mario", "Isabel", "Victor",
    "Clara", "Gabriel", "Paula", "Fernando", "Valeria", "Luis", "Carmen",
    "Javier", "Andrea", "Alberto", "Cristina", "Roberto", "Patricia", "Tomás",
    "Rosa", "Alba", "Iván", "Beatriz", "David", "Angela", "Hugo", "Natalia",
    "Oscar", "Marta", "Enrique", "Julia", "Ramiro", "Noelia", "Lucas", "Silvia",
    "Diego", "Marina", "Jorge", "Emma"
  ];

  // Crear las burbujas mapeando nombres (ciclo si hay más burbujas que nombres)
  const bubbles = Array.from({ length: 50 }, (_, i) => ({
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
    container.addEventListener("scroll", updateVisibleCenter);

    return () => container.removeEventListener("scroll", updateVisibleCenter);
  }, []);

  const calculateScale = (bubbleX, bubbleY) => {
    const distance = Math.sqrt(
      Math.pow(visibleCenter.x - bubbleX, 2) +
      Math.pow(visibleCenter.y - bubbleY, 2)
    );
    return Math.max(0.5, 3 - distance / 300); // Diferencia de tamaño más notable
  };

  return (
    <div ref={containerRef} className="container-bubble-menu">
      {bubbles.map((bubble, index) => {
        const row = Math.floor(index / 10); // Fila
        const col = index % 10; // Columna

        // Posiciones con efecto ladrillo y mayor separación
        const bubbleX = col * 220 + (row % 2 === 0 ? 0 : 75); // Alterna la posición X según la fila
        const bubbleY = row * 220; // Más separación entre filas

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