import Card from "../shared/Card"
import Button from "../shared/Button"
import { useState } from "react"
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}) {
    const [text,setText] = useState('')
    const[rating,setRating] = useState(10)
    const[btnDisabled,setBtnDisabled] = useState(true)
    const[message,setMessage] = useState('')

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

            handleAdd(newFeedback)

            
        }
        setText('')
        setBtnDisabled(true)
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={setRating} selected={rating}/>
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
