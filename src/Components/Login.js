import Header from "./Header";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {validations} from '../utils/Validations'
import { useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
const [isSignedin, setIsSignedin] = useState(true)
const [showPassword, setShowPassword] = useState(false)
const [formError, setFormerror] = useState(" ")
const [name,setName] = useState('')

const [emailError, setEmailError] = useState("")
const [passwordError, setPasswordError] = useState("")
const dispatch=useDispatch();

const navigation = useNavigate();


const email = useRef(null);
const password = useRef(null)


function handleShowpassword(){
    setShowPassword(!showPassword)
}

function handleIsSignedin(){
    setIsSignedin(!isSignedin)
}

const handleInput = (e) => {
    setName(e.target.value);
  };

function handleSubmitform() {
    const result = validations(email.current.value, password.current.value);
  
    if (result !== null) {
      result["email"]?setEmailError(result["email"]):setEmailError('')
  
      result["password"]?setPasswordError(result["password"]): setPasswordError('')
    } else {
      setEmailError('');
      setPasswordError('');
    }
  
    if(result !== null) return

    if(!isSignedin){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name
      }).then(() => {
    const {uid, email, displayName} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName}))
      }).catch((error) => {
        // An error occurred
        // ...
      });
    email.current.value = " "
    password.current.value=" "
  })
  .catch((error) => {
    setFormerror("There is technical error, Please try again later")
    
  });
    }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    email.current.value = " "
    password.current.value=" "
  })
  .catch((error) => {
    setFormerror("User doen't exit")
  });

    }
    
  }
  
    return(
        <div>
            <Header/>
           <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_small.jpg"
            alt="bg-image"/>
           </div>
           <div className="flex">
            <form onClick={(e)=> e.preventDefault()} className="text-black bg-opacity-75 rounded-lg absolute h-auto w-3/12 flex-1 items-center my-36 mx-auto right-0 left-0 bg-black p-12">
                <h1 className="p-2 m-4 text-2xl text-white font-bold">{isSignedin?"Sing IN":"Sign UP"}</h1>
                {!isSignedin && <input onChange={handleInput} type="text" placeholder="Full name" required className="w-full p-4 my-4 rounded-md text-white  bg-gray-700"/>}

                <input ref={email} type="email" placeholder="Email" className="w-full p-4 my-4 rounded-md text-white bg-gray-700"/>
                {emailError && <span className="text-base text-red-600">{emailError}</span>}

            <div className="flex flex-row justify-between items-center w-full p-4 my-4 rounded-md text-white  bg-gray-700">
                   <input ref={password} type={showPassword?"text":"password"} placeholder="Password" className="bg-gray-700 outline-none"/>
                    <button
                    type="button"
                    onClick={handleShowpassword}
                        >
                    {showPassword ? (
                    <EyeIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                    <EyeSlashIcon className="w-5 h-5 text-gray-500" />
                    )}
                    </button>
                </div> 
                {passwordError && <span className="text-base text-red-600">{passwordError}</span>}

                <button onClick={handleSubmitform}  className="bg-red-700 w-full p-4 my-4 rounded-md text-white ">{isSignedin?"Sing IN":"Sign UP"}</button>
                {formError && <span className="text-base text-red-600">{formError}</span>}
                <div className="flex flex-row p-2 m-4 ">
                    <p className="text-white text-xl pr-1">{isSignedin?'New to Netflix?':"Already signed UP?"}</p>
                    <p className="text-blue-600 text-xl cursor-pointer" onClick={handleIsSignedin}> {isSignedin?"Sign UP now":"Sign in now"}</p>
                </div>
                
            </form>
           </div>
        </div>
    )
}


export default Login;