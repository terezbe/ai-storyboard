@echo off
REM ===================================================================
REM  Photo slideshow 9:16 - one-click runner for Windows
REM
REM  Usage:   run.bat "C:\path\to\photos" [seconds]
REM  Example: run.bat "C:\Users\baazo\Downloads\drive-download-20260714T154905Z-1-001" 600
REM ===================================================================
setlocal

set "PHOTOS=%~1"
set "SECONDS=%~2"
if "%SECONDS%"=="" set "SECONDS=600"

if "%PHOTOS%"=="" (
  echo.
  echo   Usage: run.bat "C:\path\to\photos-folder" [seconds]
  echo   Example: run.bat "%%USERPROFILE%%\Downloads\drive-download-20260714T154905Z-1-001" 600
  echo.
  exit /b 1
)
if not exist "%PHOTOS%" (
  echo   Photo folder not found: %PHOTOS%
  exit /b 1
)

set "HERE=%~dp0"
set "WORK=%HERE%workspace"

echo.
echo === checking Python ===
python --version >nul 2>&1
if errorlevel 1 (
  echo   Python not found. Install from https://python.org ^(check "Add to PATH"^)
  exit /b 1
)
python --version

echo === checking ffmpeg ===
ffmpeg -version >nul 2>&1
if errorlevel 1 (
  echo   ffmpeg not found. Install with:  winget install Gyan.FFmpeg
  echo   Then CLOSE and REOPEN this terminal and run again.
  exit /b 1
)
echo   ffmpeg OK

echo === installing Pillow if needed ===
python -c "import PIL" 2>nul || python -m pip install --quiet pillow
if errorlevel 1 (
  echo   Failed to install Pillow.
  exit /b 1
)

echo.
echo === step 1/2: preparing slides ===
echo   photos: %PHOTOS%
echo   work:   %WORK%
python "%HERE%prep.py" "%PHOTOS%" "%WORK%"
if errorlevel 1 exit /b 1

echo.
echo === step 2/2: rendering %SECONDS%s video (this takes a while) ===
python "%HERE%build.py" "%WORK%" %SECONDS%
if errorlevel 1 exit /b 1

echo.
echo ============================================================
echo   Done!  Video:  %WORK%\slideshow_9x16.mp4
echo ============================================================
echo.
echo   To re-render with different settings, delete these folders
echo   first:  %WORK%\clips  and  %WORK%\chunks
echo.
endlocal
