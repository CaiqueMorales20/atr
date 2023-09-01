// Styled Components
import Header from '../Header'
import { ContainerS, ContentS } from './style'

// Types
import { ContainerType } from './types'

// Functional Component
export default function Container({ children }: ContainerType) {
  // Rendering
  return (
    <ContainerS>
      <ContentS>
        <Header />
        {children}
      </ContentS>
    </ContainerS>
  )
}
