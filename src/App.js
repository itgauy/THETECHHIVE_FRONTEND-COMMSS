import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingBar2 from './loadingbars/LoadingBar2';
import WSLandingPage from './working student/WSLandingPage/WSLandingPage';
import ContactUs from './working student/WSContactUs/ContactUs';
import WSAboutUs from './working student/WSAboutUs/WSAboutUs';
import WSAboutUs2 from './working student/WSAboutUs/WSAboutUs2';
import WSAboutUs3 from './working student/WSAboutUs/WSAboutUs3';
import WSAboutUs4 from './working student/WSAboutUs/WSAboutUs4';
import WSAboutUs5 from './working student/WSAboutUs/WSAboutUs5';
import SignUpSignIn from './working student/WSSignUpSignIn/SignUpSignIn';
import SignUp from './working student/WSSignUpSignIn/SignUp';
import SuccessfullyRegistered from './working student/WSSignUpSignIn/SuccessfullyRegistered';
import SignIn from './working student/WSSignUpSignIn/SignIn';
import WSHomepage from './working student/WSHomepage/WSHomepage';
import WSComment from './working student/WSHomepage/WSComment';
import WSReport from './working student/WSReport/WSReport';
import PopUpReport from './working student/WSReport/PopUpReport';
import PopUpConfirm from './working student/WSReport/PopUpConfirm';
import WSLeaderboards from './working student/WSLeaderboards/WSLeaderboards';
import WSProfile from './working student/WSProfile/WSProfile';
import UpdatedPopUp from './working student/WSProfile/UpdatedPopUp';
import WSLogout from './working student/WSProfile/WSLogout';
import ConfirmLogout from './working student/WSProfile/ConfirmLogout';
import PopUpReportFinal from './working student/WSReport/PopUpReportFinal';
import PopUpPermission from './working student/WSReport/PopUpPermission';
import PopUpPermissionLoc from './working student/WSReport/PopUpPermissionLoc';
import WSInsightAnalytics from './working student/WSInsight/WSInsightAnalytics';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/loadingbar2" />} />
        <Route path="/loadingbar2" element={<LoadingBar2 />} />
        <Route path="/wslandingpage" element={<WSLandingPage />} />
        <Route path="/wscontactus" element={<ContactUs />} />
        <Route path="/wsaboutus" element={<WSAboutUs />} />
        <Route path="/wsaboutus2" element={<WSAboutUs2 />} />
        <Route path="/wsaboutus3" element={<WSAboutUs3 />} />
        <Route path="/wsaboutus4" element={<WSAboutUs4 />} />
        <Route path="/wsaboutus5" element={<WSAboutUs5 />} />
        <Route path="/wssignupsignin" element={<SignUpSignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/successfullyregistered" element={<SuccessfullyRegistered />} />
        <Route path="/wshomepage" element={<WSHomepage />} />
        <Route path="/wscomment" element={<WSComment />} />
        <Route path="/wsreport" element={<WSReport />} />
        <Route path="/popupreport" element={<PopUpReport />} />
        <Route path="/popupfinal" element={<PopUpReportFinal />} />
        <Route path="/popuppermission" element={<PopUpPermission />} />
        <Route path="/popuppermissionloc" element={<PopUpPermissionLoc />} />

        <Route path="/popupconfirm" element={<PopUpConfirm />} />
        <Route path="/wsleaderboards" element={<WSLeaderboards />} />

        <Route path="/insightanalytics" element={<WSInsightAnalytics />} />


        <Route path="/wsprofile" element={<WSProfile />} />
        <Route path="/updatedpopup" element={<UpdatedPopUp />} />
        <Route path="/wslogout" element={<WSLogout />} />
        <Route path="/confirmlogout" element={<ConfirmLogout />} />
      </Routes>
    </Router>
  );
};

export default App;
