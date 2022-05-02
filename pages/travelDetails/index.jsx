import React from "react";
import { useRouter } from "next/router";
import { Grid, Box } from "theme-ui";

const travelDetails = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <Grid gap={1} columns={[1, "1fr"]}>
      <Box bg="primary"  className="travelDetailsInfo" gap={1} columns={[4, "1fr 1fr"]}>
        <div>
          Name 
        </div>
        <div>
          Departed From
        </div>
        <div>
          Date
        </div>
        <div>
          Destination
        </div>
        <div>
          Date
        </div>

      </Box>
      <Box bg="default">Box</Box>
    </Grid>
  );
};

export default travelDetails;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdmYVrE5G2R3yVn6lLGsB7DaBsED3YNAE",
  authDomain: "goodfly-e8001.firebaseapp.com",
  projectId: "goodfly-e8001",
  storageBucket: "goodfly-e8001.appspot.com",
  messagingSenderId: "512620759115",
  appId: "1:512620759115:web:9f3bd17e71f906f71d25ce",
  measurementId: "G-DBJ3T1KP9V",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
