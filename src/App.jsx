import {} from 'react'
import BodyComponent from './components/BodyComponent'
import Layout from './components/Layaut'

function App () {
  const FEATURES = [
    { title: 'hola', text: '      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore accusamus reiciendis ullam, voluptas eveniet, ratione quidem beatae saepe, totam nostrum mollitia nemo velit qui vel perspiciatis veniam inventore asperiores ut pariatur aspernatur quod nobis laudantium autem! Ex repellat at exercitationem quas, officia facere quia distinctio sequi accusamus consequuntur excepturi eum voluptatum. Voluptatem nemo eius pariatur quas sed qui deserunt aliquam nesciunt obcaecati voluptatibus a quasi consequuntur doloribus, explicabo laboriosam omnis quos, doloremque cupiditate! Possimus debitis harum porro illum id, cum aut, voluptate at sint dolores quis repellendus exercitationem iure qui vitae dicta iusto veniam doloremque. Tempora animi delectus commodi possimus.' },
    { title: 'hola1', text: 'lorem' },
    { title: 'hola3', text: 'lorem' }
  ]
  return (
    <>
      <Layout>
        <BodyComponent features={FEATURES} />
      </Layout>
    </>
  )
}

export default App
