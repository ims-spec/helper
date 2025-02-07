import React, { useEffect, useState } from "react";
import CustomRoutes from "./routers/CustomRoutes";

import Auth from "./pages/auth/Auth";

import  supabase  from "./providers/supabase";




export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [session, setSession] = useState(null);


  useEffect(() => {
     async () => { 
      supabase.auth.getSession()
      .then(({data: {session}})=>(setSession(session), setIsAuth(true)))
    }
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })

    return () => {
      subscription.unsubscribe();
    }
  }, [])

  // return  isAuth ? <CustomRoutes /> : <Login  />;  
  return  isAuth ? <CustomRoutes /> : <Auth  />;  
  // session ? <CustomRoutes /> : <Auth  />;  
}
