import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from "./data/feedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from './pages/About'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'

function App(){
    const [feedback,setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) =>{
        if(window.confirm('are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }
    const addFeedback = (newFeedback)=>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback,...feedback])

    }

    return (
    <Router>  
        <Header/>
        <div className='container'>
            <Routes>
                <Route exact path='/' element={<>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                <AboutIconLink/>
               
                </>}>
                
                </Route>
                <Route path='/about' element={<About/>}/>
            </Routes>
            
        </div>
       
    </Router>

    )
}

export default App