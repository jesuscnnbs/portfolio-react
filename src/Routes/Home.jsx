import * as React from 'react';
import Layout from '../Layouts/Layout';
import Hero from '../components/Home/Hero';
import Timeline from '../components/Home/Timeline';
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 100)
  }, [])

  return (
    <Layout>
      {!loading && (
        <React.Fragment>
          <Hero />
          <Timeline />
        </React.Fragment>
      )}
    </Layout>
  )
}


Home.Planet = function Planet() {
  return (
    <motion.div className="solar-system">
      <div className="planet"></div>
      <div className="satellite_1"></div>
    </motion.div>
  )
}
