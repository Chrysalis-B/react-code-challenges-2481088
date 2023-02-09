import { useState } from 'react';

export default function FormValidator() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [displayedMessages, setDisplayedMessages] = useState([]);

  const messages = {
    required: 'Please fill in all fields',
    email: 'Email must include exactly one @-sign',
    passwordLength: 'Password must be at least 8 characters',
    passwordMatch: 'Passwords must match',
    valid: 'Form is valid'
  }

  const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
  const validator = (condition, msg) => msgs => condition() ? msgs : [...msgs, msg];

  const validateRequired = () => !!(email && password && passwordConfirm);
  const validateEmail = () => email.indexOf('@') !== -1 && email.indexOf('@') === email.lastIndexOf('@');
  const validatePasswordLength = () => password.length >= 8;
  const validatePasswordMatch = () => password === passwordConfirm;

  const handleSubmit = event => {
    event.preventDefault();
    const msgs = pipe(
      validator(validateRequired, messages.required),
      validator(validateEmail, messages.email),
      validator(validatePasswordLength, messages.passwordLength),
      validator(validatePasswordMatch, messages.passwordMatch),
      msgs => msgs.length === 0 ? [messages.valid] : msgs,
    )([])
    setDisplayedMessages(msgs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <input type='submit' value='Submit' />
      <span className='message'>{displayedMessages.join(', ')}</span>
    </form>
  )
}
