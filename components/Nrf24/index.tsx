import { FC } from 'react';
import s from './style.module.scss';

const Nrf24: FC = () => {
    return (
        <main className={s.main}>
            <h1>Radio module nrf24l01</h1>

            <section>
                Important!
                <div>
                    Power have to be 3.3V, if used without adapter! Otherwise
                    nrf could be damaged!
                </div>
            </section>

            <section>
                <h2>Types:</h2>
                Radio module nrf24l01 could be of 2 types:
                <ul style={{ display: 'flex' }}>
                    <li>
                        <h3>With antenna</h3>
                        Up to 1000m distance
                        <img
                            src="/static/images/my-diy-doc/nrf24l01/nrf_with_antenna.jpg"
                            alt="radio module with antenna"
                        />
                    </li>
                    <li>
                        <h3>And without</h3>
                        Up to 100m distance
                        <img
                            src="/static/images/my-diy-doc/nrf24l01/nrf_no_antenna.jpg"
                            alt="radio module without antenna"
                        />
                    </li>
                    <li>
                        <h3>Adapter to radio module. </h3>
                        Simplify connection, allow connection to 5V
                        <img
                            src="/static/images/my-diy-doc/nrf24l01/nrf_adapter.jpg"
                            alt="adapter for radio module"
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

                <img
                    src="/static/images/my-diy-doc/nrf24l01/nrf_pinout.jpg"
                    alt="radio module pinout"
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

                <img
                    src="/static/images/my-diy-doc/nrf24l01/nrf_arduino_connection.jpg"
                    alt="radio module connection to arduino"
                />
            </section>

            <section>
                <h2>Libraries:</h2>
                <div>RF24</div>
                <div>Import to project</div>
                <code>#include "nRF24L01.h" #include "RF24.h"</code>
                Init
                <code>RF24 radio(CE, CSN);</code>
                Setup for transmitter
                <code>
                    void setup() &#123; Serial.begin(9600); //открываем порт для
                    связи с ПК radio.begin(); //активировать модуль
                    radio.setAutoAck(1); //режим подтверждения приёма, 1 вкл 0
                    выкл radio.setRetries(0,15); //(время между попыткой
                    достучаться, число попыток) radio.enableAckPayload();
                    //разрешить отсылку данных в ответ на входящий сигнал
                    radio.setPayloadSize(32); //размер пакета, в байтах
                    radio.openWritingPipe(address[0]); //мы - труба 0, открываем
                    канал для передачи данных radio.setChannel(0x65); //выбираем
                    канал (в котором нет шумов!) radio.setPALevel (RF24_PA_MAX);
                    //уровень мощности передатчика. На выбор RF24_PA_MIN,
                    RF24_PA_LOW, RF24_PA_HIGH, RF24_PA_MAX radio.setDataRate
                    (RF24_1MBPS); //скорость обмена. На выбор RF24_2MBPS,
                    RF24_1MBPS, RF24_250KBPS //должна быть одинакова на
                    приёмнике и передатчике! //при самой низкой скорости имеем
                    самую высокую чувствительность и дальность!! // ВНИМАНИЕ!!!
                    enableAckPayload НЕ РАБОТАЕТ НА СКОРОСТИ 250 kbps!
                    radio.powerUp(); //начать работу radio.stopListening(); //не
                    слушаем радиоэфир, мы передатчик &#125;
                </code>
                Loop for transmitter
                <code>
                    void loop(void) &#123; byte gotByte;
                    Serial.print("Sending... ");Serial.println(counter);
                    unsigned long last_time = micros(); //запоминаем время
                    отправки if ( radio.write(&amp;counter,1) ) &#123;
                    //отправляем значение counter if(!radio.available()) &#123;
                    //если получаем пустой ответ Serial.print("Empty, ");
                    Serial.print(" Time: "); Serial.print(micros()-last_time);
                    Serial.println(" microseconds"); Serial.println(); &#125;
                    else &#123; while(radio.available() ) &#123; // если в
                    ответе что-то есть radio.read( &amp;gotByte, 1 ); // читаем
                    Serial.print("Anser: "); Serial.print(gotByte);
                    Serial.print(" Time: "); Serial.print(micros()-last_time);
                    Serial.println(" microseconds"); Serial.println();
                    counter++; &#125; &#125; &#125; else &#123;
                    Serial.println("Fail"); &#125; delay(1000); &#125;
                </code>
                Setup for resiever
                <code>
                    void setup() &#123; Serial.begin(9600); //открываем порт для
                    связи с ПК radio.begin(); //активировать модуль
                    radio.setAutoAck(1); //режим подтверждения приёма, 1 вкл 0
                    выкл radio.setRetries(0,15); //(время между попыткой
                    достучаться, число попыток) radio.enableAckPayload();
                    //разрешить отсылку данных в ответ на входящий сигнал
                    radio.setPayloadSize(32); //размер пакета, в байтах
                    radio.openReadingPipe(1,address[0]); //хотим слушать трубу 0
                    radio.setChannel(0x60); //выбираем канал (в котором нет
                    шумов!) radio.setPALevel (RF24_PA_MAX); //уровень мощности
                    передатчика. На выбор RF24_PA_MIN, RF24_PA_LOW,
                    RF24_PA_HIGH, RF24_PA_MAX radio.setDataRate (RF24_1MBPS);
                    //скорость обмена. На выбор RF24_2MBPS, RF24_1MBPS,
                    RF24_250KBPS //должна быть одинакова на приёмнике и
                    передатчике! //при самой низкой скорости имеем самую высокую
                    чувствительность и дальность!! // ВНИМАНИЕ!!!
                    enableAckPayload НЕ РАБОТАЕТ НА СКОРОСТИ 250 kbps!
                    radio.powerUp(); //начать работу radio.startListening();
                    //начинаем слушать эфир, мы приёмный модуль &#125;
                </code>
                Loop for resiever
                <code>
                    void loop(void) &#123; byte pipeNo, gotByte; while(
                    radio.available(&amp;pipeNo)) &#123; // слушаем эфир со всех
                    труб radio.read( &amp;gotByte, 1 ); // чиатем входящий
                    сигнал radio.writeAckPayload(pipeNo,&amp;gotByte, 1 ); //
                    отправляем обратно то что приняли Serial.print("Recieved:
                    "); Serial.println(gotByte); &#125; &#125;
                </code>
            </section>
        </main>
    );
};

export default Nrf24;
