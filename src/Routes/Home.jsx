import Layout from '../Layouts/Layout';
import Hero from '../components/Home/Hero';
import Timeline from '../components/Home/Timeline';
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <Layout>
      <motion.div
        className="bg-primary fixed z-20 h-1 w-full left-0 right-0"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <Timeline />
    </Layout>
  )
}
