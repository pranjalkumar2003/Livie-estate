import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <header className='bg-slate-800 shadow-md sticky top-0 w-full z-50'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
       <Link to='/'>
       <h1 className='font-bold text-sm sm:text-3xl flex flex-wrap'>
            <span className='text-sky-500'>Livie</span>
            <span className='text-sky-600'>Estate</span>
        </h1>
       </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder="Search..." 
            className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-800'/>
        </form>
        <ul className='flex gap-5'>

            <Link to='/'>
            <li className='hidden sm:inline text-sky-600 text-sm sm:text-xl hover:underline'>Home</li>
            </Link>

            <Link to='/about'>
            <li className='hidden sm:inline text-sky-600 text-sm sm:text-xl hover:underline'>About</li>
            </Link>
           
           <Link to='/profile'>

           {currentUser ? (
            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='Profile Image' />
            ) : (
              <li className='text-sky-600  text-sm sm:text-xl hover:underline'>Sign In</li>
            )}
           
           </Link>
           
        </ul>
        </div>
      
    </header>
  )
}
