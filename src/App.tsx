import React from "react"
import MainRoute from "./router/main-route"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App(): React.ReactNode {

  return (
    <>
     <MainRoute />
     <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
