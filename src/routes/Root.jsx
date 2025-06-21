import { Navigate, Route, Routes } from "react-router-dom";
import Templates from "../container/list";
import Editor from "../container/editor";
import NotFound from "./NotFound";

const Root = () => {
  return (
    <Routes>
      <Route path="/templates" element={<Templates />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/editor/:id" element={<Editor />} />
      <Route path="/" element={<Navigate to="/templates" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Root;
