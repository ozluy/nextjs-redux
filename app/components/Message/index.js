import styled from 'styled-components'

const Message = styled.p`
  color: ${props => 'red' || props.color};
  margin: 15px 0;
`

export default Message
