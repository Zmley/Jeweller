CREDENTIAL_FILE="towntime.pem " #The path to the credential file
UPLOAD_FILE="package.json" #Can be mutilple files, just add space between each file name
DESTINATION_URL="ec2-user@ec2-3-96-217-203.ca-central-1.compute.amazonaws.com"
DESTINATION_PATH="."

sudo scp -i $CREDENTIAL_FILE $UPLOAD_FILE $DESTINATION_URL:$DESTINATION_PATH 
sudo scp -i $CREDENTIAL_FILE -r "dist" $DESTINATION_URL:$DESTINATION_PATH
sudo scp -i $CREDENTIAL_FILE -r "migrations" $DESTINATION_URL:$DESTINATION_PATH


