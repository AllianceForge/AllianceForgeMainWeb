setlocal
if NOT "%UE_SDKS_ROOT%"=="" (call %UE_SDKS_ROOT%\HostWin64\Android\SetupEnvironmentVars.bat)
set ANDROIDHOME=%ANDROID_HOME%
if "%ANDROIDHOME%"=="" set ANDROIDHOME=C:/Users/fklab/AppData/Local/Android/Sdk
set ADB=%ANDROIDHOME%\platform-tools\adb.exe
set DEVICE=
if not "%1"=="" set DEVICE=-s %1
for /f "delims=" %%A in ('%ADB% %DEVICE% shell "echo $EXTERNAL_STORAGE"') do @set STORAGE=%%A
@echo.
@echo Uninstalling existing application. Failures here can almost always be ignored.
%ADB% %DEVICE% uninstall com.YourCompany.AllianceForge
@echo.
echo Removing old data. Failures here are usually fine - indicating the files were not on the device.
%ADB% %DEVICE% shell rm -r %STORAGE%/UnrealGame/AllianceForge
%ADB% %DEVICE% shell rm -r %STORAGE%/UnrealGame/UECommandLine.txt
%ADB% %DEVICE% shell rm -r %STORAGE%/obb/com.YourCompany.AllianceForge
%ADB% %DEVICE% shell rm -r %STORAGE%/Android/obb/com.YourCompany.AllianceForge
@echo.
@echo Uninstall completed
