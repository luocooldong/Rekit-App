
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class RedditListPage extends Component {
  static propTypes = {
    demo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="demo-reddit-list-page">
        <button disabled={this.props.demo.fetchRedditListPending} onClick={this.props.actions.fetchRedditList}>
         {this.props.demo.fetchRedditListPending ? 'Fetching ....' : 'Fetch Topics'}
        </button>
        <br />
        <br />
         {this.props.demo.fetchRedditListError && (
           <div style={{color: 'red'}}> Error: {this.props.demo.fetchRedditListError.stack} </div>
         )}
        <ul>
          {
            this.props.demo.redditList.map(item => (
              <li key={item.id}>
                <a href={item.url}> {item.title} </a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    demo: state.demo,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RedditListPage);
