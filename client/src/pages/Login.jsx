import React from 'react'
import { FaGoogle ,FaGithub} from "react-icons/fa";
import { getAuth,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,   
    signOut}
 from "firebase/auth";
 import { ToastContainer,toast } from 'react-toastify';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/flexedgeSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth();
    const provider=new GoogleAuthProvider();

    const handleGoogle= (e) => {
        e.preventDefault();
        signInWithPopup(auth,provider)
        .then((result) => {
            const user= result.user;
            dispatch(addUser({
                id:user.uid,
                name:user.displayName,
                email:user.email,
                image:user.photoURL,
            }));
            setTimeout(() => {
                navigate("/")
            },1500)
        })
        .catch((error) => {
            console.log(error)
        });
    }
    const handleGithub= (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;
            dispatch(addUser({
                id:user.uid,
                name:user.displayName,
                email:user.email,
                image:user.photoURL,
            }));
            setTimeout(() => {
                navigate("/")
            },1500)
       
        }).catch((error) => {
            // Handle Errors here.
            console.log(error)
            
        });

    }
    const handleSignout=() => {
        signOut(auth)
        .then(() =>{
            toast.success("log out successfully");
            dispatch(removeUser())
        })
        .catch((error) => {
            
            console.log(error)
        });
    }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
        <div className="w-full flex items-center justify-center gap-10">
            <div onClick={handleGoogle} className="text-base w-52 h-12 tracking-wide border-[1px] border-gray-400
            rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
            cursor-pointer duration-300 sm:w-60 sm:text-base">
                <FaGoogle className='w-8 text-xl sm:text-2xl' />
                <span className="text-sm text-gray-900 sm:text:base"> Sign in with Google</span>
            </div>
            <button onClick={handleSignout} className="bg-black text-white text-xs py-3 px-5 tracking-wide
            rounded-md hover:bg-gray-800 duration-300 sm:text-base sm:px-8">
            Sign Out
            </button>
        </div>
        <div className="w-full flex items-center justify-center gap-10">
            <div onClick={handleGithub} className="text-base w-52 h-12 tracking-wide border-[1px] border-gray-400
            rounded-md flex items-center justify-center gap-2 hover:border-blue-600
            cursor-pointer duration-300 sm:w-60 sm:text-base">
                <FaGithub className='w-8 text-xl sm:text-2xl' />
                <span className="text-sm text-gray-900 sm:text-base"> Sign in with Github</span>
            </div>
            <button onClick={handleSignout} className="bg-black text-white text-xs py-3 px-5 tracking-wide
            rounded-md hover:bg-gray-800 duration-300 sm:text-base sm:px-8">
            Sign Out
            </button>
            
        </div>
        <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Login