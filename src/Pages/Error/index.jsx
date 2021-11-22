import { Link } from 'react-router-dom'
import '../../Styles/App.css';


export default function Error() {
  return (
    <div>
      <div className="title">
        <h1>ERROR - HRnet</h1>
      </div>
      <div className="title">
        <h2>404</h2>
      </div>
      <div className="title">
        <h3>La page demandée n'existe pas</h3>
      </div>
      <div className="container">
        <Link to="/">Returns to Home Page</Link>
      </div>
    </div>
  )
}