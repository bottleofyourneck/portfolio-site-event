import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/About.scss';
import Button from '@mui/material/Button';
import { AnimatePresence, motion } from 'framer-motion'
import Modal from "./Modal";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const labelsStrong = [
    "Амбициозность",
    "Ответственность",
    "Сложно вывести из себя",
    "Внимание к деталям",
    "Уверенность в себе"
]

const labelsDo = [
    "Общение с людьми",
    "Тендеры",
    "Публичные выступления",
    "Гранты",
    "Управление коллективами",
    "Таблицы",
    "Управление проектами",
    "Презентации",
    "Эксперты, спикеры",
    "Работа с ИИ",
    "Координация",
    "Подрядчики",
    "Сметы",
    "Концепции мероприятий",
    "Сценарии",
    "Технические задания",
    "Площадки",
    "Анализ данных",
];

const labelsNotDo = [
    "Веб-разработка",
    "Продажи",
    "Маркетинг",
    "SMM",
    "Дизайн",
    "Фотография",
    "Видеосъёмка",
];

function Expertise() {
    const [isFirstExpandableOpen, setIsFirstExpandableOpen] = useState(false);
    const [isSecondExpandableOpen, setIsSecondExpandableOpen] = useState(false);
    const [isThirdExpandableOpen, setIsThirdExpandableOpen] = useState(false);

    const [isVisionOpen, setIsVisionOpen] = useState(false);

    return (
    <>
    <Modal open={isVisionOpen} onClose={() => {setIsVisionOpen(false); document.body.classList.remove("no-scroll")}}>
        <div className="modalStatic">
            <Button onClick={() => {setIsVisionOpen(false); document.body.classList.remove("no-scroll")}}>
                <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
            </Button>
            
            <h2>Моё видение</h2>
        </div>
        
        <div className="modalProjectContainer">
            <p>Каждый проект уникален по-своему и требует гибкости и креативности. Работа состоит в том, чтобы на этот поток творческих идей накладывать сухой прагматичный менеджмент.</p>
            <p>Именно ручная работа организатора во многом состоит в том, чтобы грамотно и много договариваться с людьми. Всеми процессами занимаются люди. Подрядчики, площадки, ведущие, артисты, волонтёры и пр.</p>
            <p>Помимо общения — менеджмент. Сухая организация процессов. Технические задания, календарные планы, графики, формальности, договоры, сметы, отчёты, тайминги, логистика, координация. Сюда же входит подбор команды организаторов, распределение и контроль выполнения задач.</p>
            <p>Постоянно нужно проявлять креативность. Придумывать новые идеи, форматы.</p>
            <p>Невероятно важна командная работа. Масштабные проекты не потянуть в одного, каким бы крутым организатором ты не был.</p>
            <p>И разумеется непосредственное проведение мероприятия в день Х. Здесь важно быть включённым, заряженным. Чётко следовать плану, на ходу решать возникающие проблемы (а они всегда будут, от этого не убежать).</p>
        </div>
    </Modal>

    <div className="container" id="about">
        <div className="skills-container">
            <h1>Обо мне</h1>
            <div className="horizontal-line margin-bottomDIV"></div>
            <div className="skills-grid">
                <div className="skill">
                    <img className="marginIMG" src={require("../assets/images/about-photo-1.png")}></img>
                    <h3>Мышление и характер</h3>
                    <div className="expandable-card">
                        {!isFirstExpandableOpen && <>
                            <div 
                                className="expand-button"
                                onClick={() => setIsFirstExpandableOpen(true)}
                            >
                                <div className="horizontal-line"></div>
                                {document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-down.png")} alt="collapse" />
                                }
                                {!document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-down-light.png")} alt="collapse" />
                                }
                            </div>
                        </>}
                        
                        
                        {isFirstExpandableOpen && (
                            <div>
                                <p>С 3-го класса занимаюсь программированием. Всегда любил математику и технические науки. Мне нравится думать, что благодаря этому я привношу системность и порядок во всё, чем занимаюсь и о чём размышляю.</p>
                                <p>Я глубоко чувственный и романтичный человек. Невероятно ценю людей, которые идут рядом со мной по жизни, и много для них делаю.</p>
                                <p>Мечтаю найти работу, на которой я смог бы хорошо сконнектиться с людьми и стать частью чего-то большего, а не просто 8 часов в сутки просиживать штаны за деньги.</p>
                            </div>
                        )}
                        
                        {isFirstExpandableOpen && <>
                            <div 
                                className="expand-button"
                                onClick={() => setIsFirstExpandableOpen(false)}
                            >
                                <div className="horizontal-line"></div>
                                {document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-up.png")} alt="collapse" />
                                }
                                {!document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-up-light.png")} alt="collapse" />
                                }
                            </div>
                        </>}
                    </div>
                </div>

                <div className="skill">
                    <img className="marginIMG" src={require("../assets/images/about-photo-2.png")}></img>
                    <h3>Университет и Актив</h3>

                    <div className="expandable-card">
                        {!isSecondExpandableOpen && <>
                            <div 
                                className="expand-button"
                                onClick={() => setIsSecondExpandableOpen(true)}
                            >
                                <div className="horizontal-line"></div>
                                {document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-down.png")} alt="collapse" />
                                }
                                {!document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-down-light.png")} alt="collapse" />
                                }
                            </div>
                        </>}
                        
                        
                        {isSecondExpandableOpen && (
                            <div>
                                <p>Когда я поступил в университет, стал участвовать в адаптационных мероприятиях, которые организуются старшекурсниками-активистами для первокурсников.</p>
                                <p>Затем я сам стал активистом и мне предложили попробовать себя в организации мероприятий.
                                Стал помогать с простыми мероприятиями (квизы, театральные постановки, тематические встречи и пр.), впоследствии перебрался на роль главного организатора и стал сам вести крутые проекты.</p>
                                <p>Помимо организации занимался много чем, включая создание и управление студенческим объединением, руководство командами на хакатонах, организацию управления Советом обучающихся и победу в грантовых конкурсах.</p>
                            </div>
                        )}
                        
                        {isSecondExpandableOpen && <>
                            <div 
                                className="expand-button"
                                onClick={() => setIsSecondExpandableOpen(false)}
                            >
                                <div className="horizontal-line"></div>
                                {document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-up.png")} alt="collapse" />
                                }
                                {!document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-up-light.png")} alt="collapse" />
                                }
                            </div>
                        </>}
                    </div>
                </div>

                <div className="skill">
                    <img className="marginIMG" src={require("../assets/images/about-photo-3.png")}></img>
                    <h3>Интересы и хобби</h3>

                    <div className="expandable-card">
                        {!isThirdExpandableOpen && <>
                            <div 
                                className="expand-button"
                                onClick={() => setIsThirdExpandableOpen(true)}
                            >
                                <div className="horizontal-line"></div>
                                {document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-down.png")} alt="collapse" />
                                }
                                {!document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-down-light.png")} alt="collapse" />
                                }
                            </div>
                        </>}
                        
                        
                        {isThirdExpandableOpen && (
                            <div>
                                <p>Большой ценитель китайского чая. После перехода с пакетирванного чая как будто познал какой-то особый дзен. Думаю так же перейти с растворимого на нормальный кофе.</p>
                                <p>Сильно люблю разные видеоигры. От Cyberpunk 2077 до Hollow Knight. Особое место в сердечке занимают игры, в которых надо думать - пошаговые стратегии, Gregtech: New Horizons и Factorio.</p>
                                <p>Интересуюсь наукой и техникой. Смотрю много видеороликов про инженерию, космос, физику и математику. Ну, те самые интересы, которые не с кем обсудить, потому что квантовая физика никому не интересна:)</p>
                            </div>
                        )}
                        
                        {isThirdExpandableOpen && <>
                            <div 
                                className="expand-button"
                                onClick={() => setIsThirdExpandableOpen(false)}
                            >
                                <div className="horizontal-line"></div>
                                {document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-up.png")} alt="collapse" />
                                }
                                {!document.getElementById('portal')?.classList.contains('light-mode') && 
                                    <img id="arrow-img" src={require("../assets/images/arrow-up-light.png")} alt="collapse" />
                                }
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    <div className="container" id="about-work">
      <div className="skills-container">
            <h1>О работе</h1>
            <div className="horizontal-line margin-bottomDIV"></div>
            <div className="skills-grid" id="about-job">
                <div className="skill">
                    <Button id="button-my-vision" variant="contained" onClick={() => {setIsVisionOpen(true); document.body.classList.add("no-scroll")}}> {/*onClick=sendMail*/}
                        Моё видение мероприятий
                    </Button>
                    <span className="clear"></span>

                    <h3>Мои сильные качества</h3>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Посмотреть примеры:</span> */}
                        {labelsStrong.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="horizontal-line marginDIV"></div>

                    <h3 className="marginH2">Чем я <u>хочу</u> заниматься</h3>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Посмотреть примеры:</span> */}
                        {labelsDo.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="horizontal-line marginDIV"></div>

                    <h3 className="marginH2">Чем я <u>не</u> хочу заниматься</h3>
                    <div className="flex-chips">
                        {/* <span className="chip-title">Посмотреть примеры:</span> */}
                        {labelsNotDo.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="horizontal-line marginDIV"></div>
                </div>

                <div className="skill">
                    <h3>Занятость</h3>
                    <p>Для меня в приоритете проектная занятость, но я готов рассмотреть фулл-тайм.</p>
                    <div className="horizontal-line"></div>
                    <h3 className="marginH2">Официальное трудоустройство</h3>
                    <p>Без разницы.</p>
                    <div className="horizontal-line"></div>
                    <h3 className="marginH2">Оплата</h3>
                    <p>Средняя по рынку.</p>
                    <div className="horizontal-line"></div>
                    <h3 className="marginH2">Командировки</h3>
                    <p>Не против, и наоборот, очень хочу поездить.</p>
                    <div className="horizontal-line"></div>
                    <h3 className="marginH2">Работа по выходным / вне рабочих часов</h3>
                    <p>Не в рутинном режиме. Когда этого требует проект (мероприятие через неделю/завтра) — ок.</p>
                    <div className="horizontal-line"></div>
                    <h3 className="marginH2">Отношение к созвонам</h3>
                    <p>Не люблю, когда это превращается в формальность. Созвоны ради созвонов — трата времени всех участников. Если же обсуждаются важные вещи — только за.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    
    );
}

export default Expertise;