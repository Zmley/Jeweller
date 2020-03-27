CREDENTIAL_FILE="town.pem " #The path to the credential file
UPLOAD_FILE="package.json" #Can be mutilple files, just add space between each file name
DESTINATION_URL="root@142.93.253.195"
DESTINATION_PATH="/var/www/app/"

sudo scp -i $CREDENTIAL_FILE -r "migrations" $DESTINATION_URL:$DESTINATION_PATH
sudo scp -i $CREDENTIAL_FILE $UPLOAD_FILE $DESTINATION_URL:$DESTINATION_PATH 
sudo scp -i $CREDENTIAL_FILE -r "dist" $DESTINATION_URL:$DESTINATION_PATH
sudo scp -i $CREDENTIAL_FILE 'ca-certificate.crt' $DESTINATION_URL:$DESTINATION_PATH
