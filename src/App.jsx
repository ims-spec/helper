import React, { useEffect, useState } from "react";
import CustomRoutes from "./routers/CustomRoutes";

import Auth from "./pages/auth/Auth";

import supabase from "./providers/supabase";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () =>
      await supabase.auth
        .getSession()
        .then(({ data: { session } }) => setSession(session));
    getSession();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    console.log(session);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <div>{!session ? <Auth /> : <CustomRoutes />}</div>;
}
