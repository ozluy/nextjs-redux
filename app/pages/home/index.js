import React from 'react'
import withRedux from 'containers/withRedux'
import { connect } from 'react-redux'
import { pure, compose } from 'recompose'
import { selectRepos } from 'data/app/selectors'
import { List, ListItem } from 'components/List'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #ccc;
`

export const HomePage = ({ repos }) => (
  <Wrapper>
    <List>{repos.map(repo => <ListItem key={repo.id} repo={repo} />)}</List>
  </Wrapper>
)

function mapStateToProps(state) {
  return {
    repos: selectRepos(state),
  }
}

const enhance = compose(withRedux, connect(mapStateToProps), pure)

export default enhance(HomePage)
