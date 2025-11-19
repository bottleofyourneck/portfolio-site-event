import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faCircleXmark, faPeopleArrows, faSitemap } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import Button from '@mui/material/Button';
import { useState } from "react";
import Modal from "./Modal";

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

const labelsFirst = [
    "Подборки",
    "Переговоры",
    "Логистика",
    "Списки",
    "Формы",
    "Таблицы",
    "Детали",
    "Сценарии",
];

const labelsSecond = [
    "Планирование",
    "Управление ресурсами",
    "Отчётность",
    "Ведение документации",
    "Составление презентаций",
    "Организация информации",
];

const labelsThird = [
    "Английский язык",
    "Грамотная речь",
    "Публичные выступления",
    "Лидерство",
    "Решение проблем",
    "Системное мышление",
    "Работа под давлением",
];

function Expertise() {

    const [isEventOpen, setIsEventOpen] = useState(false);
    const [isManagerOpen, setIsManagerOpen] = useState(false);

    return (
    <div className="container" id="expertise">
        <Modal open={isEventOpen} onClose={() => {setIsEventOpen(false); document.body.classList.remove("no-scroll")}}>
            <div className="modalStatic">
                <Button onClick={() => {setIsEventOpen(false); document.body.classList.remove("no-scroll")}}>
                    <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
                </Button>
                <h2>Примеры навыков организации</h2>
            </div>
              
            <div className="projects-container" id="eventSkillsContainer">
                <div className="projects-grid">
                    <div className="project">
                        <a href="https://docs.google.com/spreadsheets/d/1yEPprwTb6uw1ixVbbdSwFmKtKOCKOR3s5QeuY1RDXoU/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/organization-skills/skill-1-lom.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://docs.google.com/spreadsheets/d/1yEPprwTb6uw1ixVbbdSwFmKtKOCKOR3s5QeuY1RDXoU/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Подборка ЛОМов Екатеринбурга</h2></a>
                        <p>Сделал при помощи различных инструментов, таких как tg-stat и ChatGPT, а также экстенсивного поиска в google.</p>
                    </div>
                    <div className="project">
                        <a href="https://docs.google.com/spreadsheets/d/1nfqCud3djWqejEHVOTeh7iJfK72WyB6RdOp0nwL8ysw/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/organization-skills/skill-2-comm.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://docs.google.com/spreadsheets/d/1nfqCud3djWqejEHVOTeh7iJfK72WyB6RdOp0nwL8ysw/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Деловая коммуникация</h2></a>
                        <p>По ходу организации театрального фестиваля было необходимо взаимодействовать с режиссёрами (основные лица фестиваля). В итоге получился скрипт (лог) из более чем 80 сообщений.</p>
                    </div>
                    <div className="project">
                        <a href="https://docs.google.com/spreadsheets/d/1eAjh8vBSt8qr-KpIwyXZK5obhXoPFLKU_euVLhXhLkw/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/organization-skills/skill-5-logistic.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://docs.google.com/spreadsheets/d/1eAjh8vBSt8qr-KpIwyXZK5obhXoPFLKU_euVLhXhLkw/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Логистика мероприятий фестиваля</h2></a>
                        <p>В ходе организации фестиваля грамотно распределил тайминги, задачи и ответственных людей.</p>
                    </div>
                    <div className="project">
                        <a href="https://forms.gle/JBuoXetmQv7bcYWNA" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/organization-skills/skill-6-form.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://forms.gle/JBuoXetmQv7bcYWNA" target="_blank" rel="noreferrer"><h2>Форма обратной связи</h2></a>
                        <p>Я умею составлять структурированные формы и анкеты, и это пример. И соответственно структурированно собираю обратную связь.</p>
                    </div>
                    <div className="project">
                        <a href="https://docs.google.com/document/d/1IO09ywsKrSEm6lcvBjQafTP_6z7_5dgDBLki5zWdQCE/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/organization-skills/skill-7-scenario.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://docs.google.com/document/d/1IO09ywsKrSEm6lcvBjQafTP_6z7_5dgDBLki5zWdQCE/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Сценарий ведущего для концерта</h2></a>
                        <p>Накидал скелет сценария, затем проработал совместно с ведущим и структурировал инструкции для техников концертного зала.</p>
                    </div>
                    <div className="project">
                        <a href="https://docs.google.com/document/d/1wRpyLt2zBSCpyWxQbzIKl8mv9msIRGjrJ7dNmDlwzK4/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/organization-skills/skill-3-comm.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://docs.google.com/document/d/1wRpyLt2zBSCpyWxQbzIKl8mv9msIRGjrJ7dNmDlwzK4/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Скрипт для волонтёров форума</h2></a>
                    </div>
                    <div className="project">
                        <a href="https://docs.google.com/spreadsheets/d/1CDTV_jbZWt670T3szD84008231-OvvSVaDG9RY9Y3gA/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/organization-skills/skill-4-list.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://docs.google.com/spreadsheets/d/1CDTV_jbZWt670T3szD84008231-OvvSVaDG9RY9Y3gA/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Список гостей концерта фестиваля</h2></a>
                    </div>
                </div>
            </div>
        </Modal>

        <Modal open={isManagerOpen} onClose={() => {setIsManagerOpen(false); document.body.classList.remove("no-scroll")}}>
            <div className="modalStatic">
                <Button onClick={() => {setIsManagerOpen(false); document.body.classList.remove("no-scroll")}}>
                    <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
                </Button>
                <h2>Примеры навыков управления</h2>
            </div>
              
            <div className="projects-container" id="managerSkillsContainer">
                <div className="projects-grid">
                    <div className="project">
                        <a href="https://docs.google.com/spreadsheets/d/103vmB8WK-sw373NGlYkQUg0PTbNEVe8HTWLOg56SxzA/edit?gid=0#gid=0&range=A1" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/manager-skills/skill-1-plan.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://docs.google.com/spreadsheets/d/103vmB8WK-sw373NGlYkQUg0PTbNEVe8HTWLOg56SxzA/edit?gid=0#gid=0&range=A1" target="_blank" rel="noreferrer"><h2>Дорожная карта проекта</h2></a>
                        <p>Мероприятие, которое проводится ежегодно. Практически за год составил дорожную карту. Она находится внутри большой таблицы-планировщика.</p>
                    </div>
                    <div className="project">
                        <a href="https://docs.google.com/document/d/1M9V-BDZuU3ubu6rDMWMOGZRWrK9DBK9UL8Ux6wHuTRY/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/manager-skills/skill-2-doc.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://docs.google.com/document/d/1M9V-BDZuU3ubu6rDMWMOGZRWrK9DBK9UL8Ux6wHuTRY/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Положение Совета обучающихся</h2></a>
                        <p>В команде с инициативными активистами разработал и согласовал с руководством университета основополагающий документ СО.</p>
                    </div>
                    <div className="project">
                        <a href="https://docs.google.com/spreadsheets/d/1a6PJqGADbUK34AJFurgk_nvRYRdUjtOdnnpz3BI6b5k/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/manager-skills/skill-4-grant.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://docs.google.com/spreadsheets/d/1a6PJqGADbUK34AJFurgk_nvRYRdUjtOdnnpz3BI6b5k/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Грантовая заявка</h2></a>
                        <p>В команде из двух человек с нуля проработал проект адаптационных мероприятий в своём институте и составил грантовую заявку, которую практически полностью одобрили.</p>
                    </div>
                    <div className="project">
                        <a href="https://drive.google.com/file/d/10OUuPE0MeKYp2uqL1alDfrsAYHEjQSiO/view?usp=sharing" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/manager-skills/skill-3-presentation.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://drive.google.com/file/d/10OUuPE0MeKYp2uqL1alDfrsAYHEjQSiO/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Презентация грантовой заявки</h2></a>
                        <p>Была разработана мной для защиты грантовой заявки, которую в итоге одобрили.</p>
                    </div>
                    <div className="project">
                        <a href="https://www.figma.com/board/WGrivmAWQophczOtejBrTV/%D0%92%D0%B8%D0%B7%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8?node-id=0-1&t=iNxrdi6rHXmktEEB-1" target="_blank" rel="noreferrer"><img src={require('../assets/images/skills-mocks/manager-skills/skill-5-visual.png')} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="https://www.figma.com/board/WGrivmAWQophczOtejBrTV/%D0%92%D0%B8%D0%B7%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8?node-id=0-1&t=iNxrdi6rHXmktEEB-1" target="_blank" rel="noreferrer"><h2>Схема</h2></a>
                        <p>Я умею приподносить информацию в визуальном формате. Это пример схемы, составленной с помощью FigJam.</p>
                    </div>
                </div>
            </div>
        </Modal>

        <div className="skills-container">
            <h1>Навыки</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCalendarDay} size="3x" height="100%"/>
                    <h3>Организация мероприятий</h3>
                    <p>Я участвовал в организации разных событий на разных позициях - от помощника до главного организатора.</p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Посмотреть примеры:</span> */}
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>

                    <Button variant="contained" onClick={() => {setIsEventOpen(true); document.body.classList.add("no-scroll")}}> {/*onClick=sendMail*/}
                        Посмотреть примеры
                    </Button>
                    <span className="clear"></span>
                </div>

                <div className="skill">
                    
                    <FontAwesomeIcon icon={faSitemap} size="3x" height="100%"/>
                    <h3>Управление проектами</h3>
                    <p>Эти навыки я развиваю не только через организацию мероприятий, но в целом занимаясь различного рода проектами.</p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Посмотреть примеры:</span> */}
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <Button variant="contained" onClick={() => {setIsManagerOpen(true); document.body.classList.add("no-scroll")}}> {/*onClick=sendMail*/}
                        Посмотреть примеры
                    </Button>
                    <span className="clear"></span>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faPeopleArrows} size="3x" height="100%"/>
                    <h3>Гибкие навыки</h3>
                    <p>Отношусь к этому не как к дополнению, а как к отдельной категории скиллов, которые влияют на тот результат, который я выдаю.</p>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Посмотреть примеры:</span> */}
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;