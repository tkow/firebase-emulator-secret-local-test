import { initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export const initialize = () => {
  // TODO https://firebase.google.com/docs/functions/beta-v1-diff
  if (!getApps().length) {
    initializeApp();
    try {
      getFirestore().settings({
        ignoreUndefinedProperties: true,
      });
    } catch (e) {
      console.warn(e);
    }
  }
};

initialize();
