import { useState } from 'react'
import './SignUp.css'
import { signUp } from '../../services/users'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../../components'

const SignUp = (props) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign Up</button>
    }
  }

  const { firstName, lastName, username, email, password, passwordConfirmation } = form
  return (
    <Layout user={props.user}>
          <div className="sign-in-body-2">
      <div className='form-container'>
        <h3>Sign Up</h3>
        <form onSubmit={onSignUp}>
          <label>First Name</label>
          <input
            required
            type='text'
            name='firstName'
            value={firstName}
            placeholder='Enter first name'
            onChange={handleChange}
          />
          <label>Last Name</label>
          <input
            required
            type='text'
            name='lastName'
            value={lastName}
            placeholder='Enter last name'
            onChange={handleChange}
          />
          <label>Username</label>
          <input
            required
            type='text'
            name='username'
            value={username}
            placeholder='Enter username'
            onChange={handleChange}
          />
          <label>Email address</label>
          <input
            required
            type='email'
            name='email'
            value={email}
            placeholder='Enter email'
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            name='password'
            value={password}
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />
          <label>Password Confirmation</label>
          <input
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            type='password'
            placeholder='Confirm Password'
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
        </div>
    </Layout>
  )
}

export default SignUp
