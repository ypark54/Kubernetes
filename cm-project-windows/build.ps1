&"C:\Program Files\Docker\Docker\DockerCli.exe" -SwitchWindowsEngine
docker build -f Dockerfile -t yeonsoopark/cm-windows:v1.0-ltsc2019 .
Write-Output "Build Complete"
# TODO: Need to fix the password input to be stdin
docker login -u yeonsoo.park@ipg-automotive.com -p Vlskffp1!
Write-Output "Logged in as yeonsoopark@ipg-automotive.com"
docker push yeonsoopark/cm-windows:v1.0-ltsc2019
Write-Output "Pushed image to remote repository"
Write-Output "Done"