import React from 'react';
import PropTypes from 'prop-types';

export default class Media extends React.Component {
  constructor(props) {
    super(props);
    const { query } = this.props;
    this.state = {
      matches: window.matchMedia(query).matches,
    };
    this.setup = this.setup.bind(this);
  }

  componentDidMount() {
    this.setup();
  }

  componentDidUpdate(prevProps) {
    const { query } = this.props;
    if (prevProps.query !== query) {
      this.removeListener();
      this.setup();
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  setup() {
    const { query } = this.props;
    const { matches } = this.state;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      this.setState({ matches: media.matches });
    }
    const listener = () => this.setState({ matches: media.matches });
    media.addListener(listener);
    this.removeListener = () => media.removeListener(listener);
  }

  render() {
    const { children } = this.props;
    const { matches } = this.state;
    return children(matches);
  }
}

Media.propTypes = {
  query: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};
