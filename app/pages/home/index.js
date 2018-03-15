import React from 'react'
import withRedux from 'containers/withRedux'
import { connect } from 'react-redux'
import { fetchRepos } from 'data/home/actions'
import { pure, compose, lifecycle } from 'recompose'
import {
  selectOrderedRepos,
  selectReposError,
  selectReposLoading,
} from 'data/home/selectors'
import { List, ListItem } from 'components/List'
import styled from 'styled-components'
import Form from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'
import Message from 'components/Message'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import Yup from 'yup'
import reducer from 'data/home/reducer'
import saga from 'data/home/sagas'
import injectReducer from 'common/injectReducer'
import injectSaga from 'common/injectSaga'
import { mq } from 'common/media'

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  ${mq.tablet`
    margin-top: 30px;
  `};
`
const Title = styled.h1`
  text-align: center;
  color: green;
`
const UserLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: red;
  img {
    padding: 25px;
    width: 150px;
    height: 150px;
  }
  span {
    font-size: 24px;
    padding: 25px;
  }
`

const HomePage = ({ repos, error, loading, getRepos }) => (
  <Wrapper>
    <Title>Playing with NextJS </Title>
    <Formik
      initialValues={{
        username: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false)
        const { username } = values
        getRepos(username)
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required!'),
      })}
      render={({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="type an Github username"
            name="username"
            type="text"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          <Button disabled={isSubmitting || loading} type="submit">
            fetch repos
          </Button>
          {errors.username
            && touched.username && <Message>{errors.username}</Message>}
        </Form>
      )}
    />
    {loading && <Message color="green">Loading repos</Message>}
    {!error
      && repos
      && repos.length < 1
        && <Message color="grey">This user is quite lazy!</Message>
    }
    {repos
      && repos.length > 0 && (
        <div>
          <UserLink target="_blank" href={repos[0].owner.html_url}>
            <img
              src={`${repos[0].owner.avatar_url}&s=100`}
              alt={repos[0].owner.login}
            />
            <span>@{repos[0].owner.login}</span>
          </UserLink>
          <List>
            {repos.map(repo => <ListItem key={repo.id} repo={repo} />)}
          </List>
        </div>
      )}
    {error && <Message>{error.message}</Message>}
  </Wrapper>
)

HomePage.defaultProps = {
  loading: false,
  repos: null,
  error: null,
  getRepos: {},
}
HomePage.propTypes = {
  repos: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  getRepos: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    repos: selectOrderedRepos(state),
    loading: selectReposLoading(state),
    error: selectReposError(state),
  }
}

const mapDispatchToProps = {
  getRepos: fetchRepos,
}
const withReducer = injectReducer({ key: 'home', reducer })
const withSaga = injectSaga({ key: 'home', saga })
const withConnect = connect(mapStateToProps, mapDispatchToProps)

const enhance = compose(
  withRedux,
  withReducer,
  withSaga,
  withConnect,
  lifecycle({
    componentDidMount() {
      this.props.getRepos('ozluy')
    },
  }),
  pure,
)

export default enhance(HomePage)
