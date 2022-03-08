import Card from "../shared/Card"
import {Link} from 'react-router-dom'

function About() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is about page</p>
            <p>
                <Link to='/'>Back to home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About