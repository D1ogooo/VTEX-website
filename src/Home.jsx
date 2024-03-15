import { Header } from './components/Header/index.jsx'
import { TopContent } from './components/TopHeader/index.jsx'
import { PrincipalEscolha } from './components/PrincipalEscolha/index.jsx'
import { SecondEscolha } from './components/SecondEscolha/index.jsx'
import { PrincipalImage } from './components/PrincipalImage/index.jsx'

function App() {
  return (
   <>
    <TopContent />
    <Header />
    <PrincipalEscolha/>
    <PrincipalImage/>
    <SecondEscolha/>
   </>
  )
}

export default App
