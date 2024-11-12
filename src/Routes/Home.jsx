import PropTypes from 'prop-types';
import Layout from '../Layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  )
}

Home.propTypes = {
  children: PropTypes.children,
}