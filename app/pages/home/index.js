import React from 'react'
import withRedux from 'containers/withRedux'
import { connect } from 'react-redux'
import { fetchRepos } from 'data/app/actions'
import { pure, compose } from 'recompose'
import {
  selectRepos,
  selectReposError,
  selectReposLoading,
} from 'data/app/selectors'
import { List, ListItem } from 'components/List'
import styled from 'styled-components'
import Form from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'
import Message from 'components/Message'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import Yup from 'yup'

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  @media screen and (min-width: 992px) {
    width: 65%;
  }
`
const Title = styled.h1`
  text-align: center;
  color: green;
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
    <List>
      {repos && repos.map(repo => <ListItem key={repo.id} repo={repo} />)}
    </List>
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
  error: PropTypes.string,
  getRepos: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    repos: selectRepos(state),
    loading: selectReposLoading(state),
    error: selectReposError(state),
  }
}

const mapDispatchToProps = {
  getRepos: fetchRepos,
}

const enhance = compose(
  withRedux,
  connect(mapStateToProps, mapDispatchToProps),
  pure,
)

export default enhance(HomePage)
