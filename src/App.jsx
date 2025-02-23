import React, { useEffect, useState} from "react";

import supabase from "./supabase";
import CustomRoutes from "./routers/CustomRoutes";
import Auth from "./pages/auth/Auth";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
// const session = useSelector((state)=>state.auth.session)
// const user = useSelector((state)=>state.auth.user)
  // const dispatch = useDispatch()
  const [session, setSession] = useState()

  useEffect(() => {
    // dispatch(getSession())
    // dispatch(checkAuth())
    // console.log(session)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  
  return session ? <CustomRoutes /> : <Auth />;
  
}
