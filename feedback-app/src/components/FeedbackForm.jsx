import Card from "../shared/Card"
import Button from "../shared/Button"
import { useContext,useState,useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"
import RatingSelect from "./RatingSelect"


function FeedbackForm() {
    const{addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    const [text,setText] = useState('')
    const[rating,setRating] = useState(10)
    const[btnDisabled,setBtnDisabled] = useState(true)
    const[message,setMessage] = useState('')

    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setBtnDisabled(true)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])
    const inputHandler = (e)=>{
        if(text===''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text!==' ' && text.trim().length<=10){
            setBtnDisabled(true)
            setMessage('must have at least 10 chars')

        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback ={
                text,
                rating
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }
            else{
            addFeedback(newFeedback)
            }

            
        }
        setText('')
        setBtnDisabled(true)
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={setRating}/>
          <div className="input-group">
              <input onChange={inputHandler} type="text" placeholder="Write a review" value={text}/>
              <Button type="submit" isDisabled={btnDisabled}>Send</Button>
          </div>
          {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
