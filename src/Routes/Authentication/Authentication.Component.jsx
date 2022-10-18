import LogIn from "../../Components/LogIn/LogIn.Compoenent";
import SignIn from "../../Components/SignIn/SignIn.Compoenent"

import './Authentication.Styles.scss';

const Authentication = () => {
    return (
        <div className="authentication-container">
            <LogIn />
            <SignIn />
        </div>
    )
}

export default Authentication;