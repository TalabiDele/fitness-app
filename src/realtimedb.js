import { startFirebase } from "./Context";
import React from "react";
import { ref, onValue } from "firebase/database";

const db = startFirebase();
