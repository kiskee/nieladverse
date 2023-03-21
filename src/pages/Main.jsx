import {} from 'react'
import BodyComponent from '../components/BodyComponent'
import Layout from '../components/Layaut'

function Main () {
  const FEATURES = [
    { title: 'Interactiva', text: 'La plataforma littleJS ofrece lecciones y proyectos interactivos que hacen que el aprendizaje de la programación sea una experiencia dinámica y emocionante para los estudiantes.' },
    { title: 'Educativa', text: 'Con su enfoque en la enseñanza de los conceptos básicos de la programación y habilidades avanzadas, littleJS ofrece a los estudiantes una base sólida en la programación que puede prepararlos para futuros trabajos en tecnología.' },
    { title: 'Accesible', text: 'La plataforma está diseñada para ser accesible para estudiantes de todos los niveles de habilidad y experiencia, lo que significa que cualquier persona interesada en la programación puede aprender y crecer en su conocimiento.' }
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
