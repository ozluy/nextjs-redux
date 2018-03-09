import styled from 'styled-components'

const Message = styled.p`
  color: ${props => props.color || 'red'};
  margin: 15px 0;
`

export default Message
