
import Container from './Container'
const CenteredContainer = (props:any)  => {
    return (
          <Container className="relative flex w-full flex-col mt-4 items-center justify-center text-center">
            {props.children}
          </Container>
    )
}

export default CenteredContainer
