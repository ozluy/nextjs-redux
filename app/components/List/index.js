import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledListItem = styled.a`
  border: solid 1px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-bottom-width: 0;
  display: block;
  text-decoration: none;
  background-color: skyblue;
  &:nth-child(even) {
    background-color: #bababa;
  }
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
  &:before {
    clear: both;
    display: table;
    content: '';
  }
`

const ListItem = props => (
  <StyledListItem target="_blank" href={props.repo.html_url}>
    <Title>{props.repo.name}</Title>
    <Description>{props.repo.description}</Description>
  </StyledListItem>
)

ListItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export { List, ListItem }
