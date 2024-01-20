/* eslint-disable turbo/no-undeclared-env-vars */
import { defineSecret } from "firebase-functions/params";
import { https } from "firebase-functions/v2";
import { onTaskDispatched, Request } from "firebase-functions/v2/tasks";

// NOTE: if you use secret variable names which not contains `-` and
// prepare .env.local contains them and can overried them with .secret.local files
// in `dist` folder which deployed to emulator, it should work like a next line.
// const secretValue = defineSecret("FOO_BAR");
const secretValue = defineSecret("demo-project-secret");

type RequestArgs = {
  cache?: boolean;

  files: {
    bookId: string;
    fromBucketPath: string;
    outBucketPath: string;
    userId: string;
  }[];
};

export const example = onTaskDispatched(
  {
    memory: '512MiB',
    cpu: 1,
    maxInstances: 10,
    minInstances: 0,
    region: "asia-northeast1",
    secrets: [secretValue.name],
  },
  async (req: Request<RequestArgs>): Promise<void> => {
    console.log("request start");

    try {
      console.log(secretValue.value());
    } catch (e) {
      throw new https.HttpsError("failed-precondition", "Encrption failed.");
    }
  },
);
