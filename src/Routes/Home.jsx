import PropTypes from 'prop-types';
import Layout from '../Layouts/Layout';
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <motion.div className="card bg-primary size-20" animate={{ x: 100 }} />
    </Layout>
  )
}

Home.propTypes = {
  children: PropTypes.children,
}