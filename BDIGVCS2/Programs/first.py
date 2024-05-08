import Adafruit_DHT
import time
import RPi.GPIO as GPIO
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


humidificadores = 11
extractores = 13

GPIO.setmode(GPIO.BOARD)
GPIO.setup(humidificadores, GPIO.OUT)
GPIO.setup(extractores, GPIO.OUT)

SENSOR_DHT = Adafruit_DHT.DHT22
SENSOR1 = 4
SENSOR2 = 17
SENSOR3 = 27

tempmin = 25
tempmax = 27
hummin = 50
hummax = 70

hum = 30
temp = 30

@app.route('/update-settings', methods=['POST'])

def update_settings():
    global tempmax, hummax  # Indicar que estamos modificando las variables globales
    data = request.json  # Obtener los datos JSON de la solicitud
    tempmax = data.get('tempmax')
    hummax = data.get('hummax')

def main():
    while True:
        humedad1, temperatura1 = Adafruit_DHT.read(SENSOR_DHT, SENSOR1)
        if humedad1 is not None and temperatura1 is not None:
            humedad_anterior1 = humedad1
            temperatura_anterior1 = temperatura1

        humedad2, temperatura2 = Adafruit_DHT.read(SENSOR_DHT, SENSOR2)
        if humedad2 is not None and temperatura2 is not None:
            humedad_anterior2 = humedad2
            temperatura_anterior2 = temperatura2
        
        humedad3, temperatura3 = Adafruit_DHT.read(SENSOR_DHT, SENSOR3)
        if humedad3 is not None and temperatura3 is not None:
            humedad_anterior3 = humedad3
            temperatura_anterior3 = temperatura3

        temp = ((temperatura_anterior1 + temperatura_anterior2 + temperatura_anterior3) / 3)
        hum = ((humedad_anterior1 + humedad_anterior2 + humedad_anterior3) / 3)

        if temp < tempmin:
            GPIO.output(extractores, False)
        elif temp > tempmax:
            GPIO.output(extractores, True)
        if hum < hummin:
            GPIO.output(humidificadores, True)
        elif hum > hummax:
            GPIO.output(humidificadores, False)
             
        time.sleep(3)
        
        return jsonify({'message': 'Settings updated successfully'})


if __name__ == '__main__':
    main()
