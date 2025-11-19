import React from "react";
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

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Мои проекты</h1>
        <div className="projects-grid" id="projects-projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="70%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Фестиваль театральных постановок «Сказки XVIII»</h2></a>
                <p>Двухнедельный фестиваль, в рамках которого первокурсники под началом старшекурсников готовят театральные постановки и выступают с ними в концертном зале.</p>
                <p>Это некоммерческое мероприятие, которое проводится Советом обучающихся (Активом) Школы компьютерных наук ТюмГУ, частью которого я являюсь.</p>
                <p>Со мной в роли <b>главного организатора</b> проект прошёл весь цикл от задумки до благодарственных писем.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="70%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Областная студенческая весна 2025 — направление хакатон</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="70%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="70%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;