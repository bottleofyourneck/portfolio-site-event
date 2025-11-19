import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faPeopleArrows, faSitemap } from "@fortawesome/free-solid-svg-icons";
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

    return (
    <div className="container" id="expertise">
        <Modal open={isEventOpen} onClose={() => {setIsEventOpen(false); document.body.classList.remove("no-scroll")}}>
          <h2>Примеры навыков организации</h2>
        <div className="projects-container" id="eventSkillsContainer">
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
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
                    <Button variant="contained"> {/*onClick=sendMail*/}
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