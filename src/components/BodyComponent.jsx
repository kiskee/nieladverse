import React from "react";
import { BoxText } from "./BoxText";
import { ProductBody } from "./ProductBody";
import TitleComponent from "./TitleComponent";
import { ButtonContact } from './ButtonContact'
 
const BodyComponent = ({ features }) => {
  return (
    <div>
      <div className="p-4 h-full">
        <TitleComponent title="LittleJS" />
        <BoxText
          text="littleJS es una plataforma de aprendizaje en línea diseñada para enseñar a niños y jóvenes los conceptos básicos de programación utilizando el lenguaje JavaScript. Con una interfaz amigable y fácil de usar, los estudiantes pueden aprender a codificar en un entorno divertido y educativo.
A través de lecciones interactivas, juegos y proyectos prácticos, los estudiantes adquieren habilidades esenciales de programación, como el pensamiento lógico, la resolución de problemas y la creatividad. Además, los estudiantes también aprenden conceptos avanzados, como estructuras de datos y algoritmos.
La plataforma está diseñada para ser accesible para todos los niveles de habilidad y experiencia, desde principiantes hasta estudiantes más avanzados. Los estudiantes pueden avanzar a su propio ritmo y recibir retroalimentación instantánea para ayudarlos a comprender los conceptos.
littleJS también cuenta con una comunidad en línea donde los estudiantes pueden colaborar y compartir sus proyectos con otros miembros de la comunidad. Los padres y educadores también pueden acceder a herramientas y recursos para ayudar a sus estudiantes a aprender y crecer en la programación.
En resumen, littleJS es una plataforma de aprendizaje en línea completa y atractiva para enseñar programación a niños y jóvenes mediante el uso del lenguaje JavaScript."
        />
        <ProductBody features={features} />
        <ButtonContact text="Contactanos" back="bg-neutral-800 hover:bg-neutral-700"/>
        <ButtonContact text="Registrate" back="bg-purple-700 hover:bg-neutral-700" target="/registro"/>
      </div>
    </div>
  );
};

export default BodyComponent;
