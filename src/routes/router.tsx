import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SigninPage } from "@/pages/signin/page";
import { SignupPage } from "@/pages/signup/page";
import BaseLayout from "@/layouts/base-layout";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<p>Esqueci a senha</p>} />
        </Route>

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
