import {} from 'react'
import Layout from './components/Layaut'

function App () {
  return (
    <>
      <Layout>
        <div className=' p-4'>
        <div className="w-full bg-neutral-800 m-0 mb-4 text-white shadow-lg shadow-purple-300">
      <h1 className="text-center py-5">TaskMaster</h1>
    </div>
        <div className="flex space-x-6 w-full ">
      <div className="w-1/3 max-w-400 bg-neutral-800 p-4 rounded-lg text-center ">
        <h2 className="text-lg font-bold text-purple-700 mb-4">Title 1</h2>
        <hr className="border-purple-800 my-2" />
        <img src="" alt="Image 1" className="w-full h-auto my-4" />
        <p className="text-sm text-white leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, lorem vitae eleifend ornare, ante ex cursus est, quis
          volutpat felis sapien in eros. Phasellus ut felis pulvinar, gravida
          enim vel, blandit est. Nulla iaculis urna ut posuere fermentum.
        </p>
      </div>
      <div className="w-1/3 max-w-400 bg-neutral-800 p-4 rounded-lg text-center">
        <h2 className="text-lg font-bold text-purple-700 mb-4">Title 2</h2>
        <hr className="border-purple-800 my-2" />
        <img src="" alt="Image 2" className="w-full h-auto my-4" />
        <p className="text-sm text-white leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, lorem vitae eleifend ornare, ante ex cursus est, quis
          volutpat felis sapien in eros. Phasellus ut felis pulvinar, gravida
          enim vel, blandit est. Nulla iaculis urna ut posuere fermentum.
        </p>
      </div>
      <div className="w-1/3 max-w-400 bg-neutral-800 p-4 rounded-lg text-center">
        <h2 className="text-lg font-bold text-purple-700 mb-4">Title 3</h2>
        <hr className="border-purple-800 my-2" />
        <img src="" alt="Image 3" className="w-full h-auto my-4" />
        <p className="text-sm text-white leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, lorem vitae eleifend ornare, ante ex cursus est, quis
          volutpat felis sapien in eros. Phasellus ut felis pulvinar, gravida
          enim vel, blandit est. Nulla iaculis urna ut posuere fermentum.
        </p>
      </div>
    </div>
    
          
        </div>
      </Layout>
    </>
  )
}

export default App




