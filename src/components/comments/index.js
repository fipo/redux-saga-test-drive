import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from './actions'

class Comments extends Component {
  componentDidMount() {
    this.props.getComments()
  }

  render() {
    const { comments } = this.props
    return <div>{JSON.stringify(comments, null, 2)}</div>
  }
}

const mapStateToProps = store => ({
  comments: store.comments
})

export default connect(mapStateToProps, { getComments })(Comments)
