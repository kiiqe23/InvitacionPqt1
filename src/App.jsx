import { useEffect } from 'react'
            import Portada from './components/Portada'
            import Historia from './components/Historia'
            import Ubicacion from './components/Ubicacion'
            import Confirmacion from './components/Confirmacion'
            import MesaRegalos from './components/MesaRegalos'
            import Galeria from './components/Galeria'
            
function App() {
  useEffect(() => {
      const audio = new Audio('/music.mp3')
          audio.play().catch(() => {
                console.log('Autoplay bloqueado')
                    })
                      }, [])
                      
  return (
      <>
            <Portada />
                  <Historia />
                        <Ubicacion />
                              <Confirmacion />
                                    <MesaRegalos />
                                          <Galeria />
                                              </>
                                                )
                                                }
                                                
export default App
