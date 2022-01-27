# frontend3

## Setup

1. `cd` to the parent of this directory
2. Install Google Cloud SDK if not installed
3. `gcloud auth application-default login`
4. (Recommended) Set up a Python virtualenv and activate it
5. Install Python requirements e.g. `python3 -m pip install -r requirements.txt`

If using Windows, make sure you've cloned this repo with `-c core.symlinks=true`.
At time of writing this is not the default behavior when using GitHub Desktop.

## Run

At time of writing you will need access to the `oss-vdb` project. Without such access,
these commands will allow the server to spin up, but calls to retrieve OSV data will fail.

- Linux, macOS: `(cd frontend3 && npm run build) && (GOOGLE_CLOUD_PROJECT=oss-vdb python3 main.py)`
- Windows PowerShell: `powershell -Command { cd frontend3 ; npm run build } ; $env:GOOGLE_CLOUD_PROJECT='oss-vdb' ; python3 main.py`
