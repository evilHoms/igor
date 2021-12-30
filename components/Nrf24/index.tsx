import Image from 'next/image';
import Code from 'common/Code';
import { FC } from 'react';
import s from './style.module.scss';

const Nrf24: FC = () => {
    return (
        <main className={s.main}>
            <h1>Radio module nrf24l01</h1>

            <section>
                Important!
                <div>Power have to be 3.3V, if used without adapter! Otherwise nrf could be damaged!</div>
            </section>

            <section className={s.types}>
                <h2>Types:</h2>
                Radio module nrf24l01 could be of 2 types:
                <ul>
                    <li>
                        <h3>With antenna</h3>
                        <div>Up to 1000m distance</div>
                        <Image
                            src="/static/images/my-diy-doc/nrf24l01/nrf_with_antenna.jpg"
                            alt="radio module with antenna"
                            width={150}
                            height={150}
                            objectFit="contain"
                        />
                    </li>
                    <li>
                        <h3>And without</h3>
                        <div>Up to 100m distance</div>
                        <Image
                            src="/static/images/my-diy-doc/nrf24l01/nrf_no_antenna.jpg"
                            alt="radio module without antenna"
                            width={150}
                            height={150}
                            objectFit="contain"
                        />
                    </li>
                    <li>
                        <h3>Adapter to radio module. </h3>
                        <div>Simplify connection, allow connection to 5V</div>
                        <Image
                            src="/static/images/my-diy-doc/nrf24l01/nrf_adapter.jpg"
                            alt="adapter for radio module"
                            width={150}
                            height={150}
                            objectFit="contain"
                        />
                    </li>
                </ul>
            </section>

            <section>
                <h2>Pinout:</h2>

                <ul>
                    <li>IRQ: signal for interruption</li>
                    <li>M1: MISO, transfer data to controller</li>
                    <li>M0: MOSI, get data from controller</li>
                    <li>SCK: SPI frequency, 10 MHz maximum</li>
                    <li>CSN: low board level, to react on SPI commands</li>
                    <li>CE: high board level</li>
                    <li>GRD: ground</li>
                    <li>VCC: power</li>
                </ul>

                <Image
                    src="/static/images/my-diy-doc/nrf24l01/nrf_pinout.jpg"
                    alt="radio module pinout"
                    width={250}
                    height={250}
                    objectFit="contain"
                />
            </section>

            <section>
                <h2>Connection to Arduino:</h2>

                <ul>
                    <li>IRQ</li>
                    <li>M1: to 12 pin of UNO/Nano, or 50 Mega</li>
                    <li>M0: to 11 pin of UNO/Nano, or 51 Mega</li>
                    <li>SCK: to 13 pin of UNO/Nano, or 52 Mega</li>
                    <li>CSN: to digital pin (defined in scetch)</li>
                    <li>CE: to digital pin (defined in scetch)</li>
                    <li>GRD: to ground</li>
                    <li>VCC: to 3.3V or to 5V if connected via adapter</li>
                </ul>

                <Image
                    src="/static/images/my-diy-doc/nrf24l01/nrf_arduino_connection.jpg"
                    alt="radio module connection to arduino"
                    width={800}
                    height={500}
                    objectFit="contain"
                />
            </section>

            <section>
                <h2>Libraries:</h2>
                <div>RF24</div>
                <div>Import to project</div>
                <Code>{'#include "nRF24L01.h" #include "RF24.h"'}</Code>
                Init
                <Code>{'RF24 radio(CE, CSN);'}</Code>
                Setup for transmitter
                <Code>
                    {`
void setup() {
    ; Serial.begin(9600); //открываем порт для связи с ПК
    radio.begin(); //активировать модуль
    radio.setAutoAck(1); //режим подтверждения приёма, 1 вкл 0 выкл
    radio.setRetries(0,15); //(время между попыткой достучаться, число попыток)
    radio.enableAckPayload(); //разрешить отсылку данных в ответ на входящий сигнал
    radio.setPayloadSize(32); //размер пакета, в байтах
    radio.openWritingPipe(address[0]); //мы - труба 0, открываем канал для передачи данных
    radio.setChannel(0x65); //выбираем канал (в котором нет шумов!)
    radio.setPALevel (RF24_PA_MAX); //уровень мощности передатчика. На выбор RF24_PA_MIN, RF24_PA_LOW, RF24_PA_HIGH, RF24_PA_MAX
    radio.setDataRate (RF24_1MBPS); //скорость обмена. На выбор RF24_2MBPS, RF24_1MBPS, RF24_250KBPS
    //должна быть одинакова на приёмнике и передатчике!
    //при самой низкой скорости имеем самую высокую чувствительность и дальность!!
    // ВНИМАНИЕ!!! enableAckPayload НЕ РАБОТАЕТ НА СКОРОСТИ 250 kbps!
    radio.powerUp(); //начать работу
    radio.stopListening(); //неслушаем радиоэфир, мы передатчик
}
                `}
                </Code>
                Loop for transmitter
                <Code>
                    {`
void loop(void) {
    byte gotByte;
    Serial.print("Sending... ");
    Serial.println(counter);
    unsigned long last_time = micros(); //запоминаем время отправки
    if ( radio.write(&amp;counter,1) ) { //отправляем значение counter
        if(!radio.available()) { //если получаем пустой ответ
            Serial.print("Empty, ");
            Serial.print(" Time: ");
            Serial.print(micros()-last_time);
            Serial.println("microseconds");
            Serial.println();
        } else {
            while(radio.available()) { // если в ответе что-то есть
                radio.read( &amp;gotByte, 1 ); // читаем
                Serial.print("Anser: ");
                Serial.print(gotByte);
                Serial.print(" Time: ");
                Serial.print(micros()-last_time);
                Serial.println("microseconds");
                Serial.println();
                counter++;
            }
        }
    } else {
        Serial.println("Fail");
    }
    delay(1000);
}
                    `}
                </Code>
                Setup for resiever
                <Code>
                    {`
void setup() {;
    Serial.begin(9600); //открываем порт для связи с ПК
    radio.begin(); //активировать модуль
    radio.setAutoAck(1); //режим подтверждения приёма, 1 вкл 0 выкл
    radio.setRetries(0,15); //(время между попыткой достучаться, число попыток)
    radio.enableAckPayload(); //разрешить отсылку данных в ответ на входящий сигнал
    radio.setPayloadSize(32); //размер пакета, в байтах
    radio.openReadingPipe(1,address[0]); //хотим слушать трубу 0
    radio.setChannel(0x60); //выбираем канал (в котором нет шумов!)
    radio.setPALevel(RF24_PA_MAX); //уровень мощности передатчика. На выбор RF24_PA_MIN, RF24_PA_LOW, RF24_PA_HIGH, RF24_PA_MAX radio.setDataRate (RF24_1MBPS);
    //скорость обмена. На выбор RF24_2MBPS, RF24_1MBPS, RF24_250KBPS
    //должна быть одинакова на приёмнике и передатчике!
    //при самой низкой скорости имеем самую высокую чувствительность и дальность!!
    // ВНИМАНИЕ!!! enableAckPayload НЕ РАБОТАЕТ НА СКОРОСТИ 250 kbps! radio.powerUp();
    //начать работу radio.startListening();
    //начинаем слушать эфир, мы приёмный модуль
};
                    `}
                </Code>
                Loop for resiever
                <Code>
                    {`
void loop(void) {
    byte pipeNo, gotByte;
    while( radio.available(&amp;pipeNo)) { // слушаем эфир со всех труб
        radio.read( &amp;gotByte, 1 ); // чиатем входящий сигнал
        radio.writeAckPayload(pipeNo,&amp;gotByte, 1 ); // отправляем обратно то что приняли
        Serial.print("Recieved: ");
        Serial.println(gotByte);
    }
}
                    `}
                </Code>
            </section>
        </main>
    );
};

export default Nrf24;
