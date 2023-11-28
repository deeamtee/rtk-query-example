import { Cards } from "@components/Cards";
import { Form } from "@components/Form";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};
