import ClerkConfig from "@/config/clerk-config";
import React, { PropsWithChildren } from "react";
import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export default function CustomContext({
  children,
}: PropsWithChildren<{}>): React.ReactNode {
  return (
    <>
      <StrictMode>
        <Router>
          <ClerkConfig>
            {children}
          </ClerkConfig>
        </Router>
      </StrictMode>
    </>
  );
}