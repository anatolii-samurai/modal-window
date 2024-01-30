import { useState } from 'react';
import './App.css'
import Modal from './Modal/Modal.jsx';

 const App =  () => {
  const [userSignIn, setModalActive] = useState(true);
  const [registration,setRegistrationActive] = useState(true)
  const [userNameSighIn, setUserNameSignIn] = useState('');
  const [passwordSighIn, setPasswordSignIn] = useState('');
  return(
    <div className='app'>
      <main>
        <button className='open-modal' onClick={() => setModalActive(true)}>Sign in</button>
        <button className='open-registration' onClick={() => setRegistrationActive(true)}>Sign up</button>
      </main>
     
        <Modal active = {userSignIn} setActive = {setModalActive}>
        <h1 className='form__title' style={{fontWeight:600}}>Sign in</h1>
          <Form setUserName={setUserNameSignIn} setPassword={setPasswordSignIn} firstName={userNameSighIn} secondName={passwordSighIn}>
                    <Username idName={'user__in'} onchange={event => setUserNameSignIn(event.target.value)} value={userNameSighIn}/>
                    <Password idName={'password__in'} onchange={event => setPasswordSignIn(event.target.value)} value={passwordSighIn}/>
                    <BtnLogin id={'sign__in'} >Sign in</BtnLogin>
          </Form>       
        </Modal>
        <Modal active = {registration} setActive = {setRegistrationActive}>
        <h1 className='form__title' style={{fontWeight:600}}>Sign up</h1>
          <Form setUserName={setUserNameSignIn} setPassword={setPasswordSignIn} firstName={userNameSighIn} secondName={passwordSighIn}>
                  <Username idName={'user__up'} onchange={event => setUserNameSignIn(event.target.value)} value={userNameSighIn}/>
                  <Email idName={'user__email'}  />
                  <Password idName={'password__up'} onchange={event => setPasswordSignIn(event.target.value)} value={passwordSighIn} ></Password>
                  <BtnLogin id={'sign__up'}>Sign up</BtnLogin> 
          </Form>
        
                      
        </Modal>
      
      
     
    </div>
  )
}
const Form = ({firstName,secondName,setUserName,setPassword,children}) =>{
    const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh
    // 👇️ access input values here
    console.log('firstName 👉️', firstName);
    console.log('password 👉️', secondName);
    // 👇️ clear all input values in the form
    setUserName('');
    setPassword('');
  };
  return(
    <div>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  )
}
const Email = ({idName}) =>{
return(
  <input
  type="email" id={idName} name="email" autoComplete='email' placeholder="Email" required/>
  );
}
const Username = ({idName,onchange,value}) => {
  return(
    <input
  type="text" id={idName} name="username" autoComplete='username' placeholder="User" onChange={onchange}
  value={value}  required 
   />
  ); 
 }
const Password = ({idName,onchange,value}) => {
  return(<input
  type="password" id={idName} name="password"  minLength={8} placeholder="Password" onChange={onchange}
  value={value} required
  />)
 }
export   const BtnLogin = ({children,id}) => {
    return(
      <button id={id} type="submit">{children}</button>
    )
 }

export default App;