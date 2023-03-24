import React from "react";
import BodyComponent from '../components/BodyComponent'
import Layout from '../components/Layaut'

const  Main = ()=> {
  const FEATURES = [
    { 
      title: 'Interactiva',
      text: 'La plataforma littleJS ofrece lecciones y proyectos interactivos que hacen que el aprendizaje de la programación sea una experiencia dinámica y emocionante para los estudiantes.',
      img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    { 
      title: 'Educativa',
       text: 'Con su enfoque en la enseñanza de los conceptos básicos de la programación y habilidades avanzadas, littleJS ofrece a los estudiantes una base sólida en la programación que puede prepararlos para futuros trabajos en tecnología.',
      img:'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
    { 
      title: 'Accesible',
       text: 'La plataforma está diseñada para ser accesible para estudiantes de todos los niveles de habilidad y experiencia, lo que significa que cualquier persona interesada en la programación puede aprender y crecer en su conocimiento.',
        img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjY2Vzc2liaWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
      }
  ]
  return (
    <>
      <Layout>
        <BodyComponent features={FEATURES} />
      </Layout>
    </>
  )
}


export default Main
