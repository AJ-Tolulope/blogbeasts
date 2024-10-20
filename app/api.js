import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "./lib/firebaseConfig";

export const RegisterUser = async (userData) => {
  const { email, password, username } = userData;

  try {
    // Register the user with Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const userDocRef = doc(db, "blogbeastsusers", user.uid);
    await setDoc(userDocRef, {
      uid: user.uid,
      username,
      email,
      createdAt: new Date().toISOString(),
    });

    return {
      message: "User Registered Successfully",
      userData: {
        uid: user.uid,
        email: user.email,
        username,
      },
    };
  } catch (error) {
    let errorMessage = "An error occurred while registering.";
    if (error.code === "auth/email-already-in-use") {
      errorMessage = "This email is already in use.";
    } 
    throw new Error(errorMessage);
  }
};

export const LoginUser = async (userData) => {
  const { email, password } = userData;

  try {
    const userQuery = query(
      collection(db, "blogbeastsusers"),
      where("email", "==", email)
    );

    const userRef = await getDocs(userQuery);

    const userDataFromDB = userRef.docs[0].data();

    // Log the user in with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const userToken = await user.getIdToken();

    return {
      uid: user.uid,
      email: user.email,
      username: userDataFromDB.username,
      token: userToken,
    };
  } catch (error) {
    if (error.code === "auth/invalid-credential") {
      throw {
        message: "Incorrect credentials. Please try again.",
        statusCode: 401,
      };
    } else {
      throw {
        message: "Something went wrong. Please try again later.",
        statusCode: 500,
      };
    }
  }
};
