import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SigninPage } from "@/pages/signin/page";
import { SignupPage } from "@/pages/signup/page";



export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SigninPage />} />
                <Route path="/signup" element={<SignupPage />} />

                <Route path="*" element={<Navigate replace to="/" />}/>
            </Routes>
        </BrowserRouter>
    )
}