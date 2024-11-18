import Layout from '../Layouts/Layout';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <div className='container'>
        <Link to={`/projects/1`} className='btn btn-link'>Project</Link>
      </div>
    </Layout>
  )
}
