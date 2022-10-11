import { startFirebase } from "./firebase";
import React from "react";
import { ref, onValue } from "firebase/database";

const db = startFirebase();
