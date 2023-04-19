import React , {useState} from 'react'

const Form = (props) => {
    
    const [Text, setText] = useState('default');
const Clickhandler = () => {
    console.log("ccc");
    setText(Text.toUpperCase());
}

const Changehandler = (e) => {
    setText(e.target.value);
}

     
  return (

    <div className="form-group">
    <h1>{props.heading}</h1>
      <textarea className="form-control" rows="8" value={Text} onChange={Changehandler}></textarea>
      <button className="btn btn-primary" onClick={Clickhandler}>CLK</button>
    </div>

  )
}

export default Form