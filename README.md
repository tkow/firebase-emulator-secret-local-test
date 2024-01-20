
This is demonstration that .secret.env cannot contain variable name that secret name accepts but dotenv don't .

## Summary

If you don't prepare .env.local firebase emulator can't load secrect value even though you locate .secret.local in deployed folder,
and request secret manager API of google services.
In addition, .env.local have unavailable characters like  '-',  crush starting emulator.

## Demo

### Error Reproduction

Clone this project and run

```
npm run start
```

First, you'll see a followed by error occurs,

```
...
✔  functions: Using node@18 from host.
⬢  functions: Failed to load function definition from source: FirebaseError: Failed to load environment variables from .env.local.
```

### Expected Behavior

Using accepted character names in .env.local work correctory, so it should work to use characters secret manager accepts, too.

### Work Correctly Demo

Then you replace .env.local contents with .env.local.work's and change secret name, demo-project-secret to FOO_BAR in functions/example.ts.
Trigger the emulated task queue function with http client. This demo uses curl.

```
curl -X POST -H "content-type: application/json" "http://localhost:5001/demo-project/asia-northeast1/backend-example" -d '{"data": { "foo": "bar" }}'
```

You'll see `FROM ENV` string in your emulator log.

Next, replace .secret.local contents with .secret.local.work's and trigger the emulated task queue function in the prevrious way.

You'll see `FROM SECRET` string in your emulator log.
