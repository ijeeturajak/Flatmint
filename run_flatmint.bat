@echo off
title Flatmint - Find Your People. Find Your Space.
echo ========================================================
echo   FLATMINT - Gen-Z Room & Roommate Matching Platform
echo   Tagline: Find Your People. Find Your Space.
echo ========================================================
echo.
echo Starting Vite Development Server on http://localhost:5173 ...
echo.

cd /d "%~dp0"
call npm run dev -- --host
pause

