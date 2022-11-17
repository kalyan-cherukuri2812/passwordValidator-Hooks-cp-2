import './index.css'

import {useState} from 'react'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const passwordInput = event => {
    setPassword(event.target.value)
  }

  console.log(password)
  return (
    <div className="bg-container">
      <div className="bg-card">
        <h1>Password Validator</h1>
        <p>Check how strong and secure is your password</p>
        <input value={password} onChange={passwordInput} type="password" />
        <p className="password-error">
          {password.length < 8
            ? 'Your password must be at least 8 characters'
            : null}
        </p>
      </div>
    </div>
  )
}

export default PasswordValidator
