import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { gql } from "apollo-boost";

const query = gql`
     {
        viewer {
          email
          name
        }
      }
    `;
const query2 = gql`
  {
    viewer {
      repositories(first: 10) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

const mapNameToProps = ({ data }) => {
    if (!data.viewer)
        return {
            loading: data.loading,
        };
    const {name} = data.viewer;

    return {
      name
    }

};

const mapRepoToProps = ({ data }) => {
    if (!data.viewer)
        return {
            loading: data.loading,
        };
    const repositories = data.viewer.repositories.edges;

    return {
        repositories
    }

};
//
// const mapPropsToOptions = () => {
//     return {
//         pollInterval:  1000 * 60,
//
//     };
// };

class Graphql extends Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProps = {
    classes: {}
  };
  
  render() {
    const { loading, name, repositories } = this.props;
    if(loading) {
      return (<p>loading</p>)
    }
    return (
        <div>
            <p>{name}</p>
            {repositories.map(el => <p key={el.node.name}>{el.node.name}</p>)}
        </div>
    );
  }
}

const block1 = graphql(query, {props: mapNameToProps});
const block2 = graphql(query2, {props: mapRepoToProps});

const GraphqlContainer = compose(block2, block1)(Graphql);

export {GraphqlContainer, Graphql};