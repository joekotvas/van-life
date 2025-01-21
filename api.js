import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD1q3PdG1QCCCVBVQN2U1n54PUwinGgGcc",
  authDomain: "vanlife-5e5f4.firebaseapp.com",
  projectId: "vanlife-5e5f4",
  storageBucket: "vanlife-5e5f4.firebasestorage.app",
  messagingSenderId: "977043796860",
  appId: "1:977043796860:web:6eac869ba453105a31aaf9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansRef = collection(db, "vans");
const usersRef = collection(db, "users");

export async function getVans() {
  const snapshot = await getDocs(vansRef);
  return snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw {
      message: "Van not found.",
      status: 404,
    };
  }
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

export async function getHostVans(hostId) {
  if (!hostId) {
    throw {
      message: "Host ID is required.",
      status: 400,
    };
  }
  hostId = String(hostId);
  const q = query(vansRef, where("hostId", "==", hostId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
