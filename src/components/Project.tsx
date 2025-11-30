import React, { useState } from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import Modal from "./Modal";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Project() {

    const [isSkazkiOpen, setIsSkazkiOpen] = useState(false);
    const [isHackathonOpen, setIsHackathonOpen] = useState(false);

    return(
    <div className="projects-container" id="projects">
        <Modal open={isSkazkiOpen} onClose={() => {setIsSkazkiOpen(false); document.body.classList.remove("no-scroll")}}>
            <div className="modalStatic">
                <Button onClick={() => {setIsSkazkiOpen(false); document.body.classList.remove("no-scroll")}}>
                    <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
                </Button>
                <h2>Сказки XVIII</h2>
            </div>
            
            <div className="modalProjectContainer">
                <img id="desktop-pic" src={require('../assets/images/project-skazki.png')} alt="thumbnail" width="100%"/>
                <img id="mobile-pic" src={require('../assets/images/project-skazki-11.png')} alt="thumbnail" width="100%"/>

                <h2 id="firsth2">Описание</h2>
                <div className="horizontal-line"></div>

                <p id="firstP">Фестиваль «Сказки» — это двухнедельный адаптационный интенсив для первокурсников,
                  в рамках которого они под руководством старшекурсников создают и представляют
                  на большой сцене театральные постановки.</p>

                <h3>Моя роль</h3>
                <p>Руководитель проекта (главный организатор)</p>

                <h3>Даты</h3>
                <p><ul>
                  <li>Май 2025: начало подготовки</li>
                  <li>8 сентября 2025: открытие фестиваля</li>
                  <li>21 сентября 2025: концерт</li>
                </ul></p>
                

                <h3>Площадка</h3>
                <p>Концертный зал Главного корпуса ТюмГУ (г. Тюмень, ул. Республики, 9)</p>

                <h3>Ключевые цифры</h3>
                <p><ul>
                    <li>400+ участников</li>
                    <li>150+ гостей концерта</li>
                    <li>4 месяца: длительность проекта (подготовка + реализация)</li>
                    <li>30 часов: суммарное время мероприятий</li>
                    <li>~8100 охват <a href="https://vk.com/skazkixviii">медиа-сообщества</a></li>
                </ul></p>
                
                <img src={require('../assets/images/media-ohvat.jpg')} alt="thumbnail" width="100%"/>

                <h2>Задачи и реализация</h2>
                <div className="horizontal-line"></div>

                <h3>Стратегия и планирование</h3>
                <p>Когда-то я был участником «Сказок», и в то время фестиваль проводился в обычной учебной аудитории университета.
                  Во все свои проекты я стараюсь привносить развитие и инновации, и со «Сказками» я поступил таким же образом.</p>
                <p>Задача — с нуля переработать концепцию мероприятия.</p>
                <p>Что я сделал:</p>
                <p><ul>
                  <li>Провёл комплексный анализ «Сказок» прошлых лет, включая рефлексию над своим опытом участника,
                    общение с предыдущими организаторами и участниками, просмотр архивных записей мероприятий.
                  </li>
                  <li>Провёл <a href="https://forms.gle/55Z8HFiJb4XNTo2D6">опрос</a> среди членов сообщества о том, что они хотели бы видеть на фестивале.</li>
                  <li>Провёл собрание основных организаторов для определения концепции фестиваля. Была выбрана новая площадка и придумано открытие.</li>
                </ul></p>

                <h3>Формирование команды и управление</h3>
                <p>Задача — среди ~100 активистов отобрать инициативных заинтересованных людей
                  и сформировать из них команду. Обеспечить их информацией и мотивировать.
                </p>
                <p>Что я сделал:</p>
                <p><ul>
                  <li>Лично отобрал: своего заместителя, двух основных помощников, куратора медиа, куратора жюри и ведущего.</li>
                  <li>Распределил зоны ответственности и основные задачи среди организаторов.</li>
                  <li>Сформировал комиссию из команды организаторов и руководства Совета обучающихся: совместно мы провели <a href="https://forms.gle/LndDeLfwoPMbnYhY8">отбор семи руководителей творческих групп</a>.</li>
                </ul></p>
                
                <h3>Грант</h3>
                <p>«Сказки» из года в год делались бесплатно. Но на самом деле не бесплатно, а на деньги студентов-активистов.
                  Мы решили впервые подать проект адаптационных мероприятий, включающий «Сказки», на <a href="https://vk.com/wall-196328786_660">конкурс студенческих инициатив</a>.
                </p>
                <p>Задача — получить от университета грантовое финансирование проекта.</p>
                <p>Что я сделал:</p>
                <p><ul>
                  <li>Провёл <a href="https://forms.gle/J42wrR1gVf77AhyG9">опрос</a> среди целевой аудитории. <a href="https://docs.google.com/spreadsheets/d/15wF6rFquKtxmu9OoTPPEaW7UwVM5I0slxDJeLEDVMy4/edit?usp=drive_link">Результаты</a></li>
                  <li>Совместно с инициативной группой с нуля за короткий срок разработал <a href="https://docs.google.com/spreadsheets/d/1a6PJqGADbUK34AJFurgk_nvRYRdUjtOdnnpz3BI6b5k/edit?usp=drive_link">грантовую заявку</a>.</li>
                  <li>Составил <a href="https://drive.google.com/file/d/10OUuPE0MeKYp2uqL1alDfrsAYHEjQSiO/view?usp=drive_link">презентацию проекта</a> для защиты</li>
                </ul></p>
                <p><a href="https://drive.google.com/file/d/1vXxVNdoQcRL8jeFKFnMUF5Yicw0qpE0k/view?usp=sharing">Проект одобрили и выделили 156 тысяч рублей.</a></p>

                <h3>Операционное управление и логистика</h3>
                <p>Задача — настроить системную работу процессов фестиваля: взаимодействие с администрацией площадки, команды, медиа, жюри, координаторы, бронирование пространств для репетиций, подготовка конкурсов.
                </p>
                <p>Что я сделал:</p>
                <p><ul>
                  <li>Забронировал площадку на нужные даты: открытие, репетиции, концерт.</li>
                  <li>Организовал перемещение реквизита, распределение пространств для репетиций.</li>
                  <li>Организовал <a href="https://docs.google.com/spreadsheets/d/1nfqCud3djWqejEHVOTeh7iJfK72WyB6RdOp0nwL8ysw/edit?usp=sharing">коммуникацию между организаторами и представителями команд</a>.</li>
                  <li>Провёл более 15 <a href="https://docs.google.com/document/d/1Ov-f7mymm13YTjJA7h-wGlXNci3M3cBfHTNRE5EBBog/edit?usp=sharing">собраний</a> организаторов с кураторами основных процессов.</li>
                  <li>Совместно с ведущим проработал <a href="https://docs.google.com/document/d/1ukX6avEZsq-MYRKqjX33tfgZ8ur_RgZ67TC0HUUM8rU/edit?usp=sharing">сценарий открытия</a> и <a href="https://docs.google.com/document/d/1IO09ywsKrSEm6lcvBjQafTP_6z7_5dgDBLki5zWdQCE/edit?usp=sharing">сценарий концерта</a>.</li>
                </ul></p>

                <h2>Результаты</h2>
                <div className="horizontal-line"></div>

                <p><ul id="margin-bottom-horizontal-line">
                  <li>Комплексный проект реализован чётко по плану: всё прошло в нужные даты, все команды вышли на сцену, тайминги не были нарушены.</li>
                  <li>Успешное финальное событие: 7-часовой концерт прошёл без проблем при полном зале (400+ зрителей).</li>
                  <li>Беспрецедентная для «Сказок» медиа-кампания: создано отдельное <a href="https://vk.com/skazkixviii">сообщество в ВК</a>, набраны хорошие
                    показатели по активности и охватам (8100+ уникальных пользователей, 150000+ просмотров контента).</li>
                  <li>Была проведена экстенсивная кампания по сбору и анализу обратной связи: <a href="https://forms.gle/1msx5i1W8KMpHaoUA">общий опрос</a> среди участников и гостей, <a href="https://docs.google.com/spreadsheets/d/1vuEgKPyPOf6yNKFSh4ib4gQp5JSyR7a4u-I25NKoNzg/edit?usp=sharing">собрание режиссёров и организаторов</a>, а также ряд собраний организаторов.</li>
                  <li>93% участников отметили важность того, что они нашли на фестивале новых друзей, что подтверждает успешность адаптации.</li>
                  
                </ul><img id="skazki-survey-good-img" src={require('../assets/images/skazki-survey-good.png')} alt="thumbnail" width="100%"/></p>

                <h2>Трудности, вызовы, проблемы</h2>
                <div className="horizontal-line"></div>

                <h3>Отбор режиссёров</h3>
                <p>Отбор был полностью придуман и проведён мной: я как главный организатор, мой заместитель, мой помощник, председатель Совета обучающихся и его заместитель впятером собрались, объективно оценили анкеты и вынесли коллективное решение.</p>
                <p>Однако, оказалось, что сообщество <i>крайне недовольно</i> нашим выбором. Настолько, что дело не решилось
                  разговорами, и нам пришлось делать перевыбор режиссёров в формате всеобщего голосования активистов.</p>
                <p>По результатам перевыборов поменялась только 1 команда из 7.</p>
                <p>Несмотря на огромный объём негатива со стороны сообщества в сторону меня и моей команды, я сохранил авторитет и контроль над ситуацией. Я не стал вступать в ненужные перепалки и просто продолжил работать с новым составом режиссёров.</p>
                
                <h3>Площадка</h3>
                <p>В этом году мы вступали на неизведанную территорию. Наш университет построил новый корпус, а в нём большой современный концертный зал.</p>
                <p>Однако, из-за новизны площадки, администрация ещё не сформировала систему работы. Мы не понимали, что от нас хотят, а иногда приходилось всё переделывать, потому что на площадке всё поменялось.</p>
                <p>За сутки до главного концерта нам сообщили, что у нас будет совершенно другой вход в здание, будут открыты другие двери внутри здания, а ещё, что у нас не будет сотрудника в гардеробе. Из-за этого
                  пришлось срочно переделывать всю логистику декораций и расстановку координаторов. Пришлось так же отдельно контактировать с гостями, чтобы сообщить им о том, что надо заходить с другой стороны,
                  т.к. в медиа уже на тот момент был пост с анонсом.
                </p>

                <img style={{marginTop: '16px'}} src={require('../assets/images/project-skazki-4.jpg')} alt="thumbnail" width="100%"/>

                <h2>Чему я научился</h2>
                <div className="horizontal-line"></div>

                <p id="firstP2"><ul>
                  <li>Вывел <a href="https://docs.google.com/spreadsheets/d/1kW9zl86rFToWWEJi4y4wmJ5zvHYBJjb5daJ0uwENz8k/edit?usp=sharing">ряд важных принципов организации и управления</a>.</li>
                  <li>Понял, что такое быть лидером и руководителем, когда все ждут именно моего решения, когда если я чего-то не сделал или не делегировал, этого просто не случится, когда я несу ответственность за всё происходящее.</li>
                  <li>Укрепил своё понимание управления масштабными комплексными проектами от идеи до пост-анализа.</li>
                  <li>Научился мотивировать и вести за собой очень разных людей, делать из них команду, которая работает над одним делом.</li>
                  <li>Прокачал навыки работы и решения проблем под большим давлением и в условиях ограниченных ресурсов.</li>
                  <li>Понял, как выстраивать эффективную коммуникацию между разными категориями людей (первокурсники, активисты, сотрудники университета, жюри).</li>
                  <li>Понял, насколько важно реально работающее медиа мероприятия. Вывел принцип: если чего-то не было в медиа-пространстве, значит этого просто не было.</li>
                </ul></p>

                <h2>Отчётный видеоролик</h2>
                <div className="horizontal-line"></div>

                <div className="video-wrapper" style={{marginTop: '32px'}}>
                    <iframe 
                        src="https://vkvideo.ru/video_ext.php?oid=-232472991&id=456239029&autoplay=0&t=85"
                        allowFullScreen
                        style={{ 
                          border: 'none',
                          borderRadius: '4px', // Optional: rounded corners
                        }}
                      ></iframe>
                </div>
                <a className="note" href="https://t.me/prodKORSHUN">Видеограф — Артём Коршун</a>
            </div>
        </Modal>

        <Modal open={isHackathonOpen} onClose={() => {setIsHackathonOpen(false); document.body.classList.remove("no-scroll")}}>
            <div className="modalStatic">
                <Button onClick={() => {setIsHackathonOpen(false); document.body.classList.remove("no-scroll")}}>
                    <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
                </Button>
                <h2>Хакатон 2025</h2>
            </div>
            
            <div className="modalProjectContainer">
                <img id="desktop-pic" src={require('../assets/images/project-osv-1.png')} alt="thumbnail" width="100%"/>
                <img id="mobile-pic" src={require('../assets/images/project-osv-1.png')} alt="thumbnail" width="100%"/>

                <h2 id="firsth2">Описание</h2>
                <div className="horizontal-line"></div>

                <p id="firstP">Фестиваль «Студенческая весна» — самое масштабное событие молодёжной политики Тюменской области,
                  в рамках которого студенты и выпускники колледжей и университетов со всего региона раскрывают свои таланты
                  в таких направлениях как: концертные программы, танцевальное, музыкальное,
                  интеллектуальные игры, SMM-проект, <b>хакатон</b> и пр.</p>

                <Button id="btn-project-more" variant="contained" onClick={() => {window.open("https://студвесна72.рф")}} onAuxClick={() => {window.open("https://студвесна72.рф")}}> {/*onClick=sendMail*/}
                    Сайт
                </Button>
                <Button variant="contained" onClick={() => {window.open("https://vk.com/studvesna_72")}} onAuxClick={() => {window.open("https://vk.com/studvesna_72")}}> {/*onClick=sendMail*/}
                    Медиа
                </Button>
                <span className="clear"></span>

                <p>Команда организаторов фестиваля состоит из дирекции и кураторов направлений (главные организаторы отдельных мероприятий).</p>

                <h3>Моя роль</h3>
                <p>Куратор направления (главный организатор)</p>

                <h3>Даты</h3>
                <p><ul>
                  <li>Февраль 2025: начало подготовки</li>
                  <li>5 апреля 2025: открытие</li>
                  <li>6 апреля 2025: защита</li>
                </ul></p>
                

                <h3>Площадка</h3>
                <p>Водонапорная башня (г. Тюмень, ул. Орджоникидзе, 56 к2)</p>

                <h3>Ключевые цифры</h3>
                <p><ul>
                    <li>75+ участников</li>
                    <li>1 месяц: длительность проекта (подготовка + реализация)</li>
                    <li>8 часов: суммарное время мероприятий</li>
                </ul></p>
                
                <h2>Задачи и реализация</h2>
                <div className="horizontal-line"></div>

                <h3>Стратегия и планирование</h3>
                <p>В прошлые годы хакатон проводился полностью в онлайн-формате. Несмотря на крайне ограниченное время, я решил разработать новый гибридный формат.</p>
                <p>Задача — с нуля разработать концепцию продуктового хакатона.</p>
                <p>Что я сделал:</p>
                <p><ul>
                  <li>Изучил мировой опыт организации хакатонов и кейс-чемпионатов.</li>
                  <li>Связался с предыдущими организаторами, изучил опыт прошлых лет.</li>
                  <li>Провёл собрание с командой для определения концепции хакатона. Была выбрана площадка и разработан гибридный формат с открытием и закрытием.</li>
                </ul></p>

                <h3>Формирование команды и управление</h3>
                <p>Задача — найти 2-3 помощников для операционных задач.</p>
                <p>Что я сделал:</p>
                <p><ul>
                  <li>Лично отобрал: двух помощников, ведущего и куратора экспертов.</li>
                  <li>Распределил зоны ответственности и основные задачи внутри команды.</li>
                </ul></p>
                
                <h3>Бюджет</h3>
                <p>Задача — получить от заказчика финансирование проекта.</p>
                <p>Что я сделал:</p>
                <p><ul>
                  <li>Написал смету и согласовал с заказчиком.</li>
                  <li>Написал договор и согласовал с заказчиком.</li>
                  <li>Получил и распределил средства.</li>
                  <li>Написал отчёт по итогам мероприятия.</li>
                </ul></p>

                <h3>Операционное управление и логистика</h3>
                <p>Задача — настроить системную работу процессов фестиваля.
                </p>
                <p>Что я сделал:</p>
                <p><ul>
                  <li>Забронировал площадку на нужные даты.</li>
                  <li>Организовал перемещение реквизита.</li>
                  <li>Организовал коммуникацию между участниками и организаторами в телеграм-чате.</li>
                  <li>Проработал и согласовал с работу служб фестиваля на своём направлении: кейтеринг, медиа, монтаж площадки, печать дипломов, закупка подарков, питьевой режим.</li>
                  <li>Совместно с ведущим проработал <a href="https://docs.google.com/document/d/1rFS2_8C0ECptXMte4fkiPJyJ8nYNez4Shn-5uoQANmQ/edit?usp=sharing">сценарий открытия</a>.</li>
                </ul></p>

                <h2>Результаты</h2>
                <div className="horizontal-line"></div>

                <p><ul id="margin-bottom-horizontal-line">
                  <li>Проект реализован за короткий срок: всё прошло в нужные даты, тайминги не были нарушены.</li>
                  <li>Эксперты отметили активность участников и хорошую работу организаторов.</li>
                  <li>95% опрошенных участников оценили мероприятие на 5 из 5.</li>
                  <li>Заказчик доволен результатами.</li>                  
                </ul></p>

                <h2>Трудности, вызовы, проблемы</h2>
                <div className="horizontal-line"></div>

                <h3>Вовремя не доставили бейджи участников на площадку</h3>
                <p>Я предусмотрел вход по паспорту по списку, а бейджи были выданы участникам в другой удобный момент.</p>
                
                <h3>Кейтеринг приехал невовремя</h3>
                <p>Я перестроил хронологию мероприятия на ходу, чтобы было удобно и участникам, и экспертам, и волонтёрам.
                </p>

                <h3>В последний момент не приехала служба монтажа площадки</h3>
                <p>Я самостоятельно привёз и установил оборудование.
                </p>

                <h3>Привезли диплом с опечаткой</h3>
                <p>Я самостоятельно распечатал и отвёз диплом человеку в удобные для него день и место, а участник остался доволен.
                </p>

                <p className="margin-top-p">По итогам пост-анализа я сделал вывод, что все форс-мажоры так или иначе были следствием плохой коммуникации и нечётких договорённостей.</p>

                

                <h2>Чему я научился</h2>
                <div className="horizontal-line"></div>

                <p id="firstP2"><ul>
                  <li>Получил первый опыт большой организации полного цикла в роли руководителя.</li>
                  <li>Научился работать в условиях ограниченного времени.</li>
                  <li>Получил первый лидерский опыт: именно от меня зависело настроение команды и участников.</li>
                  <li>Вывел принцип работы с подрядчиками: организатору подрядчик важнее, чем подрядчику организатор. Т.е. задача именно организатора сделать всё для того, чтобы все нужные службы приехали во все нужные места в нужное время.</li>
                  <li>Научился совмещать обучение в университете с масштабным проектом: понял важность тайм- и таск-менеджмента, хорошего сна и рациона питания, и в целом собственного настроения.</li>
                </ul></p>

                <img style={{marginTop: '16px'}} src={require('../assets/images/project-osv-3.jpg')} alt="thumbnail" width="100%"/>
                <Button variant="contained" onClick={() => {window.open("https://vk.com/album-89511047_305740019")}} onAuxClick={() => {window.open("https://vk.com/album-89511047_305740019")}}> {/*onClick=sendMail*/}
                    Больше фото
                </Button>
                <span className="clear"></span>
            </div>
        </Modal>
        
        <div id="projects-to-scroll"></div>
        <h1>Мои проекты</h1>
        
        <div className="horizontal-line margin-bottomDIV"></div>
        <div className="projects-grid" id="projects-projects-grid">
            <div className="project">
                <h2 id="no-hver"  className="marginIMG">Фестиваль театральных постановок «Сказки XVIII» (2025)</h2>
                <div className="video-wrapper-wrapper">
                    <div className="video-wrapper">
                        <iframe 
                            src="https://vkvideo.ru/video_ext.php?oid=-234128010&id=456239017&hash=f2545d9d13e163c2&autoplay=0"
                            allowFullScreen
                            style={{ 
                              border: 'none',
                              borderRadius: '4px' // Optional: rounded corners
                            }}
                          ></iframe>
                    </div>
                    <a className="note" href="https://t.me/prodKORSHUN">
                    Видеограф — Артём Коршун
                    </a>
                </div>
                <p>Моя роль — <b>руководитель проекта (главный организатор)</b></p>
                <Button id="btn-project-more" variant="contained" onClick={() => {setIsSkazkiOpen(true); document.body.classList.add("no-scroll")}}> {/*onClick=sendMail*/}
                    Подробнее
                </Button>
                <Button variant="contained" onClick={() => {window.open("https://vk.com/skazkixviii")}} onAuxClick={() => {window.open("https://vk.com/skazkixviii")}}> {/*onClick=sendMail*/}
                    Медиа
                </Button>
                <span className="clear"></span>
            </div>

            <div className="project">
                <h2 id="no-hver"  className="marginIMG">Тюменская областная студенческая весна 2025 — направление хакатон</h2>
                <div className="video-wrapper-wrapper">
                    <img id="project-main-osv-image" src={require('../assets/images/project-osv-2.jpg')} alt="thumbnail" width="100%"/>
                </div>
                <p>Моя роль — <b>куратор направления (главный организатор)</b></p>
                <Button id="btn-project-more" variant="contained" onClick={() => {setIsHackathonOpen(true); document.body.classList.add("no-scroll")}}> {/*onClick=sendMail*/}
                    Подробнее
                </Button>
                <span className="clear"></span>
            </div>
        </div>
    </div>
    );
}

export default Project;