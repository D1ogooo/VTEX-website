import { Header } from './components/Header/index.jsx'
import { TopContent } from './components/TopHeader/index.jsx'
import { PrincipalEscolha } from './components/PrincipalEscolha/index.jsx'
import { SecondEscolha } from './components/SecondEscolha/index.jsx'
import { PrincipalImage } from './components/PrincipalImage/index.jsx'
import { ThirdEscolha } from './components/ThirdEscolha/index.jsx'
import { ForEscolha } from './components/ForEscolha/index.jsx'
import { FiveEscolha } from './components/FiveEscolha/index.jsx'

function App() {
  return (
   <>
    <TopContent />
    <Header />
    <PrincipalEscolha/>
    <PrincipalImage/>
    <SecondEscolha/>
    <ThirdEscolha/>
    <ForEscolha/>
    <FiveEscolha/>
   </>
  )
}

export default App
