import styled from "styled-components"

const StyledDiv = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 20px 0 0 0;
`

// eslint-disable-next-line react/prop-types
function Center({children}) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default Center
