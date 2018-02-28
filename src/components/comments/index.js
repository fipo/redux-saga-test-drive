import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from './actions'

import Comment from './Comment'

class Comments extends Component {
  componentDidMount() {
    this.props.getComments()
  }

  render() {
    const { comments } = this.props
    return <div>{comments.map(comment => <Comment key={comment.id} {...comment} />)}</div>
  }
}

const mapStateToProps = store => ({
  comments: store.comments
})

export default connect(mapStateToProps, { getComments })(Comments)
