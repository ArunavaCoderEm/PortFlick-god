import React, { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { useNavigate } from "react-router-dom";

export default function ClerkConfig({
  children,
}: PropsWithChildren<{}>): React.ReactNode {
  const PUBLISHABLE_KEY: string | null =
    import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "";

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }
  const navigate = useNavigate();
  return (
    <>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: {
            colorBackground: "#000",
            colorInputText: "#fff",
            fontFamily: "barlow",
          },
          elements: {
            formButtonPrimary: "bg-purple-700 text-white border-none ring-none outline-none hover:bg-purple-800 transition-all duration-200",
          }
        }}
        publishableKey={PUBLISHABLE_KEY}
        routerPush={(to: string) => navigate(to)}
        routerReplace={(to: string) => navigate(to, { replace: true })}
        signInUrl="/login"
        signUpUrl="/signup"
        signInFallbackRedirectUrl="/dashboard"
        signUpFallbackRedirectUrl="/dashboard"
        afterSignOutUrl="/"
        domain="http://localhost:5173/"
        isSatellite={false}
      >
        {children}
      </ClerkProvider>
    </>
  );
}
