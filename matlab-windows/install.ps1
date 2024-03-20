Write-Output "Docker inside Docker"
sleep 5

docker build -f Dockerfile -t yeonsoopark/matlab-windows-smb:R2022b .
Write-Output "Build Complete"
docker login -u yeonsoo.park@ipg-automotive.com -p Vlskffp1!
Write-Output "Logged in as yeonsoopark@ipg-automotive.com"
docker push yeonsoopark/matlab-windows-smb:R2022b
Write-Output "Pushed image to remote repository"
Write-Output "Done"