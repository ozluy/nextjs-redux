import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledListItem = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-bottom-width: 0;
  &:last-child {
    border-bottom-width: 1px;
  }
`
const Title = styled.div`
  color: #333;
  font-size: 18px;
  text-transform: uppercase;
`
const Description = styled.div`
  color: #333;
  font-size: 16px;
`

const List = styled.div`
  background-color: #fafafa;
  width: 65%;
  margin: 0 auto;
  min-width: 300px;
`

const ListItem = props => (
  <StyledListItem {...props}>
    <Title>{props.repo.name}</Title>
    <Description>{props.repo.description}</Description>
  </StyledListItem>
)

ListItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export { List, ListItem }
