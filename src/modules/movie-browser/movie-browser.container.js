import React, {Component, Fragment} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';

class MovieBrowser extends Component {
  render() {
    return (
      <Fragment>
        <AppBar title='Movie Browser' />
        <Grid>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <p>Movie list will go here</p>
          </Row>
        </Grid>
      </Fragment>
    );
  }
}

export default MovieBrowser;