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

    return(
    <div className="projects-container" id="projects">
        <Modal open={isSkazkiOpen} onClose={() => {setIsSkazkiOpen(false); document.body.classList.remove("no-scroll")}}>
            <div className="modalStatic">
                <Button onClick={() => {setIsSkazkiOpen(false); document.body.classList.remove("no-scroll")}}>
                    <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
                </Button>
                <h2>Фестиваль театральных постановок «Сказки XVIII»</h2>
            </div>
            
            <div className="modalProjectContainer">
                <h2 id="firsth2">Описание</h2>
                <div className="horizontal-line"></div>

                <p>Фестиваль «Сказки» — это двухнедельный адаптационный интенсив для первокурсников,
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
                <p>Концертный зал Главного корпуса ТюмГУ</p>

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
                <p>
                </p>
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

                <h2>Трудности, вызовы, проблемы</h2>
                <div className="horizontal-line"></div>
            </div>
        </Modal>

        <h1>Мои проекты</h1>
        <div className="projects-grid" id="projects-projects-grid">
            <div className="project">
                <h2>Фестиваль театральных постановок «Сказки XVIII»</h2>
                <div className="video-wrapper">
                    <iframe 
                        src="https://vkvideo.ru/video_ext.php?oid=-232472991&id=456239029&autoplay=0&t=85"
                        allowFullScreen
                        style={{ 
                          border: 'none',
                          borderRadius: '4px' // Optional: rounded corners
                        }}
                      ></iframe>
                </div>
                <a className="note" href="">Видеограф — Артём Коршун</a>
                <p>Моя роль — <b>руководитель проекта (Главный организатор)</b></p>
                <p>Полностью управлял проектом от разработки концепции до сбора обратной связи.</p>
                <p>Масштаб: 400+ участников и 150+ гостей.</p>
                <p>Сформировал команду и организовал работу 7 творческих групп (по 60-70 человек), координируя работу режиссеров, сценаристов, актеров и организаторов.</p>
                <p>Руководил всеми процессами от медиа-освещения и логистики до взаимодействия с администрацией концертного зала и координации жюри.</p>
                <p>Результат: успешно провел двухнедельный фестиваль, ключевым событием которого стал 7-часовой концерт. Мероприятие достигло целей по адаптации первокурсников и сплочению студенческого сообщества.</p>
                <Button variant="contained" onClick={() => {setIsSkazkiOpen(true); document.body.classList.add("no-scroll")}}> {/*onClick=sendMail*/}
                    Подробнее
                </Button>
                <span className="clear"></span>
            </div>

            <div className="project">
                <h2>Областная студенческая весна 2025 — направление хакатон</h2>
                <div className="video-wrapper">
                    <iframe 
                        src="https://vkvideo.ru/video_ext.php?oid=-232472991&id=456239029&autoplay=0&t=85"
                        allowFullScreen
                        style={{ 
                          border: 'none',
                          borderRadius: '4px' // Optional: rounded corners
                        }}
                      ></iframe>
                </div>
                <a className="note" href="">Видеограф — Артём Коршун</a>
                <p><b>Руководитель проекта (Главный организатор)</b></p>
                <p>Полностью управлял проектом от разработки концепции до сбора обратной связи.</p>
                <p>Масштаб: 400+ участников и 150+ гостей.</p>
                <p>Сформировал команду и организовал работу 7 творческих групп (по 60-70 человек), координируя работу режиссеров, сценаристов, актеров и организаторов.</p>
                <p>Руководил всеми процессами: от медиа-освещения и логистики до взаимодействия с администрацией концертного зала и координации жюри.</p>
                <p>Результат: успешно провел двухнедельный фестиваль, ключевым событием которого стал 7-часовой концерт. Мероприятие достигло целей по адаптации первокурсников и сплочению студенческого сообщества.</p>
                <Button variant="contained" onClick={() => {setIsSkazkiOpen(true); document.body.classList.add("no-scroll")}}> {/*onClick=sendMail*/}
                    Подробнее
                </Button>
                <span className="clear"></span>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="90%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Областная студенческая весна 2025 — направление хакатон</h2></a>
                <p>Студвесна — это самое масштабное событие молодёжной политики Тюменской области.</p>
                <p>Студвесна — это самое масштабное событие молодёжной политики Тюменской области.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="90%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="90%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;