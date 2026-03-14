import { useState } from "react"

export default function Validation() {
  // 1. Always start with empty strings for text inputs to avoid .trim() errors
  const [namefield, setnamefield] = useState("")
  const [emailfield, setemailfield] = useState("")
  const [countryfield, setcountryfield] = useState("MA")
  const [messagefield, setmessagefield] = useState("")
  const [acceptfiled, setacceptfiled] = useState(false)
  
  const [isformsubmitted, setisformsubmitted] = useState(false)
  const [errors, seterrors] = useState([])

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isNameValid = namefield.trim().length >= 3;
  const isEmailValid = emailPattern.test(emailfield);
  const isMessageValid = messagefield.trim().length >= 10;
  const isAcceptValid = acceptfiled === true;

  const isFormValid = isNameValid && isEmailValid && isMessageValid && isAcceptValid;

  // 2. Derive the button status (No need for extra state!)
   /* const isInvalid = 
    namefield.trim().length < 3 || 
    !emailPattern.test(emailfield) || 
    messagefield.trim().length < 10 || 
    !acceptfiled;  */

  /* const messagevalid = () => {
    // Only show the character count if they have started typing
    if(messagefield.length > 0 && messagefield.length < 10) {
      return (
        <div className="text-danger mb-2">
          <small>Keep typing... {messagefield.length}/10</small>
        </div>
      )
    }
    return null;
  } */

    /////// REAL TIME VALIDATION LOGIC ///////
    /////// This is optional but provides a better user experience by giving immediate feedback as they fill out the form.
    /////// the messages are not shown because we used hints instead of errors for real-time feedback, but you can easily switch to using errors if you prefer that approach.
  const validateform = () => {
    let localerrors = []

    if(namefield.trim().length < 3) {
      localerrors.push({field: "name", message: "Enter a name with at least 3 characters"})
    }

    if(emailfield.trim() === "") {
      localerrors.push({field: "email", message: "Enter an email"})
    } else if(!emailPattern.test(emailfield)) {
      localerrors.push({field: "email", message: "Enter a valid email"})
    }

    if(messagefield.trim().length < 10) {
      localerrors.push({field: "message", message: "Enter a message with at least 10 characters"})
    }

    if(!acceptfiled) {
      localerrors.push({field: "accept", message: "Accept our conditions"})
    }

    seterrors(localerrors)
    return localerrors.length === 0
  }

  const haserror = (fieldname) => errors.some(error => error.field === fieldname)

  const clearerrors = (fieldname) => {
    seterrors(prev => prev.filter(error => error.field !== fieldname))
  }

  ////// the error message isn't shown because we used hints instead of errors for real-time feedback, but you can easily switch to using errors if you prefer that approach.
  const displayfieldinfo = (fieldname) => {
    const error = errors.find(error => error.field === fieldname)
    if(error) {
      return <div className="invalid-feedback">{error.message}</div>
    }
  }

  const resetform = () => {
    setnamefield("")
    setemailfield("")
    setcountryfield("MA")
    setmessagefield("")
    setacceptfiled(false)
    seterrors([]) // Clear errors on reset too!
  }

  const submitform = (e) => {
    e.preventDefault()
    if(validateform()) {
      setisformsubmitted(true)
      resetform()
    }
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-12 col-md-6 col-lg-4 border p-4 shadow-sm rounded bg-white">
        <h2 className="text-center mb-4">Contact Us</h2>

        {isformsubmitted && (
          <div className="alert alert-success py-2 text-center" role="alert">
            <small><strong>Message sent successfully!</strong></small>
          </div>
        )}
        
        <form onSubmit={submitform}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              value={namefield} // Linked to state
              onChange={(e) => {setnamefield(e.target.value); clearerrors("name")}} 
              className={`form-control ${haserror("name") ? "is-invalid" : ""}`} 
            />
            {displayfieldinfo("name")}
            {!isNameValid && namefield.length > 0 && (
        <div className="text-muted mt-1">
          <small>Tip: Use at least 3 characters</small>
        </div>
      )}
          </div> 

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="text" 
              value={emailfield} // Linked to state
              onChange={(e) => {setemailfield(e.target.value); clearerrors("email")}} 
              className={`form-control ${haserror("email") ? "is-invalid" : ""}`} 
            />
            {displayfieldinfo("email")}
            {!isEmailValid && emailfield.length > 0 && (
              <div className="text-muted mt-1">
                <small>Tip: Enter a valid email format (e.g. user@example.com)</small>
              </div>
            )}

          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea 
              value={messagefield} // Linked to state
              className={`form-control ${haserror("message") ? "is-invalid" : ""}`} 
              onChange={(e) => {setmessagefield(e.target.value); clearerrors("message")}}
            ></textarea>
            {/* messagevalid() */}
            {!isMessageValid && messagefield.length > 0 && (
              <div className="text-muted mt-1">
                <small>Tip: Message must be at least 10 characters long</small>
              </div>
            )}
            {displayfieldinfo("message")}
          </div>

          <div className="mb-3">
            <label className="form-label">Country</label>
            <select className="form-select" value={countryfield} onChange={(e) => setcountryfield(e.target.value)}>
              <option value="MA">Morocco</option>
              <option value="US">United States</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="mb-3 form-check">
            <input 
              type="checkbox" 
              checked={acceptfiled} // Linked to state
              onChange={(e) => {setacceptfiled(e.target.checked); clearerrors("accept")}} 
              className={`form-check-input ${haserror("accept") ? "is-invalid" : ""}`} 
              id="rules" 
            />
            <label className="form-check-label" htmlFor="rules">Accept our rules</label>
            {displayfieldinfo("accept")}
            {!isAcceptValid && (
              <div className="text-muted mt-1">
                <small>Tip: You must accept our rules to proceed</small>
              </div>
            )}
          </div>

          {/* Button is disabled LIVE as the user types */}
          <button type="submit" disabled={!isFormValid} className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}