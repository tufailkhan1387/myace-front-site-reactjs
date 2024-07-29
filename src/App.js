import { ChakraProvider } from "@chakra-ui/react";
import React, { createContext, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./pages/home/Home";
import NoInternet from "./pages/errors/NoInternet";
import Success from "./pages/home/Success";
import Privacy from "./pages/home/Privacy";
import Terms from "./pages/home/Terms";

export const ModeContext = createContext(null);
export default function App() {
  const [dark, setDark] = useState(false);
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    function handleOnlineStatusChange() {
      setIsOnline(window.navigator.onLine);
    }

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  return (
    <>
      {isOnline ? (
        <section className="font-fiexen">
          <ModeContext.Provider value={{ dark, setDark }}>
            <ToastContainer />
            <ChakraProvider>
              <Router>
                <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route exact path="/success" element={<Success/>} />
                  <Route exact path="/privacy" element={<Privacy/>} />
                  <Route exact path="/terms" element={<Terms/>} />
                  {/* <Route
                    exact
                    path="/"
                    element={<ProtectedRoute Component={Home} />}
                  /> */}
                </Routes>
              </Router>
            </ChakraProvider>
          </ModeContext.Provider>
        </section>
      ) : (
        <NoInternet />
      )}
    </>
  );
}
