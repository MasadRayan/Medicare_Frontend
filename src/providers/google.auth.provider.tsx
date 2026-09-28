"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import type { ReactNode } from "react";
import googleClientId from "@/lib/google-client";

const GoogleAuthProvider = ({ children }: { children: ReactNode }) => {
  if (!googleClientId) {
    console.error(
      "[auth] NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set. Google sign-in is disabled. Add it to .env.local and restart the dev server.",
    );
    return <>{children}</>;
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;
