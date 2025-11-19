import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/About.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="about">
        <div className="skills-container">
            <h1>Обо мне</h1>
            <div className="skills-grid">
                <div className="skill">
                    <img src={require("../assets/images/about-photo-1.png")}></img>
                    <h3>Мышление и характер</h3>
                    <p>С 3-го класса занимаюсь программированием. Всегда любил математику и технические науки. Мне нравится думать, что благодаря этому я привношу системность и порядок во всё, чем занимаюсь и о чём размышляю.</p>
                    <p>Я глубоко чувственный и романтичный человек. Невероятно ценю людей, которые идут рядом со мной по жизни, и много для них делаю.</p>
                    <p>Мечтаю найти работу, на которой я смог бы хорошо сконнектиться с людьми и стать частью чего-то большего, а не просто 8 часов в сутки просиживать штаны за деньги.</p>
                </div>

                <div className="skill">
                    <img src={require("../assets/images/about-photo-2.png")}></img>
                    <h3>Университет и Актив</h3>
                    <p>Когда я поступил в университет, стал участвовать в адаптационных мероприятиях, которые организуются старшекурсниками-активистами для первокурсников.</p>
                    <p>Затем я сам стал активистом и мне предложили попробовать себя в организации мероприятий.
                    Стал помогать с простыми мероприятиями (квизы, театральные постановки, тематические встречи и пр.), впоследствии перебрался на роль главного организатора и стал сам вести крутые проекты.</p>
                    <p>Помимо организации занимался много чем, включая создание и управление студенческим объединением, руководство командами на хакатонах, организацию управления Советом обучающихся и победу в грантовых конкурсах.</p>
                </div>

                <div className="skill">
                    <img src={require("../assets/images/about-photo-3.png")}></img>
                    <h3>Интересы и хобби</h3>
                    <p>Большой ценитель китайского чая. После перехода с пакетирванного чая как будто познал какой-то особый дзен. Думаю так же перейти с растворимого на нормальный кофе.</p>
                    <p>Сильно люблю разные видеоигры. От Cyberpunk 2077 до Hollow Knight. Особое место в сердечке занимают игры, в которых надо думать - пошаговые стратегии, Gregtech: New Horizons и Factorio.</p>
                    <p>Интересуюсь наукой и техникой. Смотрю много видеороликов про инженерию, космос, физику и математику. Ну, те самые интересы, которые не с кем обсудить, потому что квантовая физика никому не интересна:)</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;