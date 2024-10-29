'use client'
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
import { serverTimestamp } from "firebase/firestore"; 

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
      createdAt: serverTimestamp(),
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

    console.error("Registration Error:", error);
    throw {
        message: errorMessage,
        statusCode: 404,
      };
  }
};

export const LoginUser = async (userData) => {
  const { email, password } = userData;

  try {
    // Query Firestore to find user by email
    const userQuery = query(
      collection(db, "blogbeastsusers"),
      where("email", "==", email)
    );

    const userRef = await getDocs(userQuery);

    // Check if any user document exists with that email
    if (userRef.empty) {
      throw { message: "No user found with this email", statusCode: 404 };
    }

    const userDataFromDB = userRef.docs[0].data();

    // Log the user in with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Retrieve Firebase Auth token
    const userToken = await user.getIdToken();

    // Return user data and token
    return {
      uid: user.uid,
      email: user.email,
      username: userDataFromDB.username,
      token: userToken,
    };
  } catch (error) {
    // Handle specific Firebase errors
    if (error.code === "auth/wrong-password") {
      throw {
        message: "Incorrect password. Please try again.",
        statusCode: 401,
      };
    } else if (error.code === "auth/user-not-found") {
      throw {
        message: "No user found with this email. Please sign up.",
        statusCode: 404,
      };
    } else {
      // Handle general errors
      throw {
        message:
          error.message || "Something went wrong. Please try again later.",
        statusCode: error.statusCode || 500,
      };
    }
  }
};