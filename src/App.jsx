import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/loginpage/Login.jsx";
import Register from "./pages/Registrationpage/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Colleges from "./pages/Colleges/Colleges.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Students from "./pages/Students/Students.jsx";
import Branches from "./pages/Branches/Branches.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Subjects from "./pages/Subjects/Subjects.jsx";
import CourseSubjects from "./pages/CourseSubjects/CourseSubjects.jsx";
import Faculty from "./pages/Faculty/Faculty.jsx";
import Exams from "./pages/Exams/Exams.jsx";
import Answersheets from "./pages/Answersheets/Answersheets.jsx";
import FacultySubject from "./pages/FacultySubject/FacultySubject.jsx";
import Evaluations from "./pages/Evaluations/Evaluations.jsx";
import Questions from "./pages/Questions/Questions.jsx";
import EditQuestion from "./pages/Questions/EditQuestion.jsx";
import QuestionOption from "./pages/QuestionOption/QuestionOption.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import RevaluationRequests from "./pages/RevaluationRequests/RevaluationRequests.jsx";
import RevaluationAssignments from "./pages/RevaluationAssignments/RevaluationAssignments.jsx";
import ExamSections from "./pages/ExamSections/ExamSections.jsx";
import ExamQuestions from "./pages/ExamQuestions/ExamQuestions.jsx";
import StudentAnswers from "./pages/StudentAnswers/StudentAnswers.jsx";
import StudentExamAssignments from "./pages/StudentExamAssignments/StudentExamAssignments.jsx";
import StudentReport from "./pages/Reports/StudentReports/StudentReports.jsx";
import SubjectReport from "./pages/Reports/SubjectReports/SubjectReports.jsx";
import EvaluationReport from "./pages/Reports/EvaluationReport/EvaluationReport.jsx";
import RevaluationReport from "./pages/Reports/RevaluationReport/RevaluationReport.jsx";
import RevaluationDetails from "./pages/RevaluationDetails/RevaluationDetails.jsx";
import RevaluationMarks from "./pages/RevaluationMarks/RevaluationMarks.jsx";
import QuestionReport from "./pages/Reports/QuestionReport/QuestionReport.jsx";
import DashboardReport from "./pages/Reports/DashboardReport/DashboardReport.jsx";
import ActivityLogs from "./pages/ActivityLogs/ActivityLogs.jsx";
import AuditLogs from "./pages/AuditLogs/AuditLogs.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="colleges" element={<Colleges />} />
            <Route path="students" element={<Students />} />
            <Route path="branches" element={<Branches />} />
            <Route path="courses" element={<Courses />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="coursesubjects" element={<CourseSubjects />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="exams" element={<Exams />} />
            <Route path="answersheets" element={<Answersheets />} />
            <Route path="facultysubjects" element={<FacultySubject />} />
            <Route path="evaluations" element={<Evaluations />} />
            <Route path="questions/edit/:id" element={<EditQuestion />} />
            <Route path="questions" element={<Questions />} />
            <Route path="questionoptions" element={<QuestionOption />} />
            <Route path="revaluationrequests" element={<RevaluationRequests />} />
            <Route path="revaluationassignments" element={<RevaluationAssignments />} />
            <Route path="revaluationdetails" element={<RevaluationDetails />} />
            <Route path="revaluationmarks" element={<RevaluationMarks />} />
            <Route path="examsections" element={<ExamSections />} />
            <Route path="examquestions" element={<ExamQuestions />} />
            <Route path="studentanswers" element={<StudentAnswers />} />
            <Route path="studentexamassignments" element={<StudentExamAssignments />} />
            <Route path="reports/student" element={<StudentReport />} />
            <Route path="reports/subject" element={<SubjectReport />} />
            <Route path="reports/evaluation" element={<EvaluationReport />} />
            <Route path="reports/revaluation" element={<RevaluationReport />} />
            <Route path="reports/question" element={<QuestionReport />} />
            <Route path="reports/dashboard" element={<DashboardReport />} />
            <Route path="activitylogs" element={<ActivityLogs />} />
            <Route path="auditlogs" element={<AuditLogs />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
