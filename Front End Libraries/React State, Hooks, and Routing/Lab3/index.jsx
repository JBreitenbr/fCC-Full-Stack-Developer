const { useState } = React;

export function EventRSVPForm() {
  const [name,setName]=useState("");
  const [diPref,setDiPref]=useState("");
  const [mail,setMail]=useState("");
  const [num,setNum]=useState(0);
  const [ch,setCh]=useState(false);
  const [isSubmitted,setIsSubmitted]=useState(false);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
              };
  return (<div><form onSubmit={handleFormSubmit}>
 <label>Name:
 <input type="text" onChange={(e)=>setName(e.target.value)} required placeholder="Your Name" />
  </label>
  <label>Email:
  <input type="email" onChange={(e)=>setMail(e.target.value)} placeholder="Your Email" required/>
  </label>
  <label>Number of Attendees:
  <input type="number" onChange={(e)=>setNum(e.target.value)} placeholder="Number of Attendees" required/></label>
  <label>Dietary Preferences:
  <input type="text" onChange={(e)=>setDiPref(e.target.value)} placeholder="Dietary Preferences (Optional)" /></label>
  <label>Bringing additional guests?
  <input type="checkbox" checked={ch} onChange={()=>setCh(!ch)}/></label>
  </form>
  <div>{name}</div>
  <div>{mail}</div>
  <div>{num}</div>
  <div>{diPref}</div>
  <div>{ch?"Yes":"No"}</div>
  </div>)
}



