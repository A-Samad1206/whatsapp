import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "#utils/firebaseConfig";
import Login from "./login";
import Loading from "#compo/Loading";
import { updateLastSeen } from "#utils/firebaseFun";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    user && updateLastSeen(user);
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
