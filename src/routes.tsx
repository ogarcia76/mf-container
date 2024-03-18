import React from "react"
import { Route, Routes } from "react-router-dom";
import { Base } from "mfmicro/Base";
import { Counter } from "mfmicro/Counter";
import { ButtonMicro } from "mfmicro/ButtonMicro";

/* const Mfmicro = React.lazy(() => import("mfmicro/MfmicroApp")); */

export const AppRoutes = () => {
    return (
        <>
        <div>
            <p> prueba </p>
        </div>
        <Routes>
            <Route path="/" element={<Base />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/bmicro" element={<ButtonMicro />} />
        </Routes>
        </>

    )
}