import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="m-4">
      <div className="divider">OR</div>

      <button onClick={handleGoogleSignIn} className="btn">
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
