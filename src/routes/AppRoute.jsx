import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import LandingPage from "../pages/guest/LandingPage";
import NotFound from "../pages/NotFound";
import Unauthorized from "../pages/Unauthorized";
import StudentLayout from "../layouts/StudentLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import AdminLayout from "../layouts/AdminLayout";
import ChooseRole from "../pages/auth/ChooseRole";
import AuthenLayout from "../layouts/AuthenLayout";
import Login from "../pages/auth/Login";
import StudentInfo from "../pages/student/StudentInfo";
import StudentEnroll from "../components/student/StudentEnroll";
import EnrollmentFlow from "../components/student/CourseNode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "unauthorization", element: <Unauthorized /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/authentication",
    element: <AuthenLayout />,
    children: [
      { index: true, element: <ChooseRole /> },
      { path: "login", element: <Login /> },
      { path: "unauthorization", element: <Unauthorized /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/student",
    element: <StudentLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "profile", element: <StudentInfo /> },
      { path: 'enroll', element: <EnrollmentFlow /> },
      { path: "unauthorization", element: <Unauthorized /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/teacher",
    element: <TeacherLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "unauthorization", element: <Unauthorized /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "unauthorization", element: <Unauthorized /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
