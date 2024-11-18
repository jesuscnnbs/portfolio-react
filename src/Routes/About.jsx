import PropTypes from 'prop-types';
import Layout from '../Layouts/Layout';

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
    </Layout>
  )
}

About.propTypes = {
  children: PropTypes.children,
}