import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';
import * as movieActions from './movie-browser.actions';
import * as movieHelpers from './movie-browser.helpers';
import MovieList from './movie-list/movie-list.component';
import getScrollDownPercentage from '../common/scroll.helpers';
import MovieModal from './movie-modal/movie-modal.container';

class MovieBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getPopularMovies(this.state.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const {popularMovies} = this.props;
    if (!popularMovies.isLoading) {
      let percentageScrolled = getScrollDownPercentage(window);
      if (percentageScrolled > .8) {
        const nextPage = this.state.currentPage + 1;
        this.props.getPopularMovies(nextPage);
        this.setState({currentPage: nextPage});
      }
    }
  }

  render() {
    const {popularMovies} = this.props;
    const movies = movieHelpers.getMoviesList(popularMovies.response);

    return (
      <Fragment>
        <AppBar title='Movie Browser' />
        <Grid>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <MovieList movies={movies} isLoading={popularMovies.isLoading} />
          </Row>
        </Grid>
        <MovieModal />
      </Fragment>
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  (state) => ({
    popularMovies: state.movieBrowser.popularMovies
  }),
  // Map action creators to properties of our component
  { ...movieActions }
)(MovieBrowser);