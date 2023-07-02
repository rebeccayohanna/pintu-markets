import {ReactComponent as Logo} from '../../assets/icons/logo.svg';

const Navbar = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return(
    <nav className="flex items-center justify-between flex-wrap py-6">
      <div>
        <Logo />
      </div>
      <div className="flex items-center flex-shrink-0 text-red-500 mr-6">
        <p>This page is for simulation purposes only. Please perform transactions on the authorized website.</p>
      </div>
      {/* <div>
        <button onClick={toggleTheme}>
          {isDarkMode ? <LightIcon className="w-5 h-5" /> : <DarkIcon className="w-5 h-5"/>}
        </button>
      </div> */}
    </nav> 
  )
}

export default Navbar;
