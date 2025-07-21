const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
    
    const [password, setPassword] = useState("")
    const [count, setCount] = useState(null)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const timerRef = useRef()
  
  function generatePassword() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    let digits = []
    const numbers = "1234567890"
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      digits.push(numbers[randomIndex])
    }
    setPassword(digits.join(""))
    setCount(5)
    setIsButtonDisabled(prevDisabled => !prevDisabled)
    setShowMessage(false)
    

      timerRef.current = setInterval(()=>{
          setCount(prevCount => {
        if (prevCount === 1) {
          clearInterval(timerRef.current);
          setIsButtonDisabled(prevDisabled => !prevDisabled)
          setShowMessage(true)
          return null;
        }
        return prevCount - 1;
      });
    }, 1000);
  }
    
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
        }
    }, [])
  
  const timer = count !== null ? `Expires in ${count}: seconds` : ""
  
  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{password.length > 0 ? password : "Click 'Generate OTP' to get a code"}</h2>
      <button 
        id="generate-otp-button"
        onClick={generatePassword}
        disabled={isButtonDisabled}
      >Generate OTP</button>
      {count !==null && <p id="otp-timer">{timer}</p>}{showMessage && <p id="otp-timer"></p>OTP expired. Click the button to generate a new OTP.</p>}
    </div>
  )
};
