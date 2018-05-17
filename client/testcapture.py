import numpy as np
import time
import cv2
import requests
import win32api
import random

def emotion_analysis( visage_data ):

	face_one = visage_data[0]
	face_attributes = face_one["faceAttributes"]
	print(face_attributes)
	emotion_data = face_attributes["emotion"]
	
	anger = emotion_data["anger"]
	disgust = emotion_data["disgust"]
	fear = emotion_data["fear"]
	sadness = emotion_data["sadness"]
	surprise = emotion_data["surprise"]
	neutral = emotion_data["neutral"]
	happiness = emotion_data["happiness"]

	age_data = face_attributes["age"] 
	gender_data = face_attributes["gender"]
	 
	#win32api.MessageBox(0,"gender : "+  gender_data+ "\n age : "+ str(age_data) +"\n emotion : \n"+ "\t anger : "+ str(anger)+ "\n \t disgust : "+str(disgust)+ "\n \t fear : "+str(fear) + "\n \t sadness : "+str(sadness)+ "\n \t neutral : "+str(neutral)+ "\n \t happiness : "+str(happiness), 'test')

	analyse = {
	"anger" : anger,
	"disgust":disgust,
	"fear":fear,
	"sadness":sadness,
	"surprise":surprise,
	"terminal":random.randrange(1, 2, 3) 
	}
	return analyse

def get_emotions():
    image_path = "frame.jpg"
    with open(image_path, "rb") as image:
        image_data = image.read()
        subscription_key = "9e077e52ae2c4eceba10ce5e79ab0216"
        assert subscription_key
        emotion_recognition_url = "https://westeurope.api.cognitive.microsoft.com/face/v1.0/detect"
        payload = {"returnFaceId":"true","returnFaceLandmarks":"false","returnFaceAttributes":"emotion,age,gender"}
        headers = {'Ocp-Apim-Subscription-Key': subscription_key,"Content-Type": "application/octet-stream" }
        r = requests.post(emotion_recognition_url, headers=headers,params = payload, data = image_data)
        #print(r.json())
        return r.json()
        #win32api.MessageBox(0,  str(r.json()), 'test')


cap = cv2.VideoCapture(0)

def send_analyse(data):
	api_url = "http://45.32.104.249:3000/emotion"
	headers = {"Content-Type": "application/x-www-form-urlencoded" }
	print(data)
	r = requests.post(api_url, headers=headers, data = data)
	print (r.text)
        
while True:
	# Capture frame-by-frame
	ret, frame = cap.read()

	# Our operations on the frame come here
	gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
	
	cv2.imshow("frame",gray)
	# Display the resulting frame
	if cv2.waitKey(1) & 0xFF == ord('q'):
		break
	if cv2.waitKey(1) & 0xFF == ord('a'):
		print("capture")
		cv2.imwrite('frame.jpg',frame)
		analyse_data = emotion_analysis( get_emotions() )
		send_analyse(analyse_data)
	
# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()


    


