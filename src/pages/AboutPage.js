import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillSection from '../components/SkillSection';
import ServiceSection from '../components/ServiceSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title='About Me' span="About Me" />
            <ImageSection />
            <div className="skillsContainer">
                <SkillSection skill="HTML5/CSS3" progress={'70%'} />
                <SkillSection skill="JavaScript" progress={'70%'} />
                <SkillSection skill="D3JS" progress={'70%'} />
                <SkillSection skill="Jquery" progress={'70%'} />
                <SkillSection skill="Python" progress={'70%'} />
                <SkillSection skill="Pandas" progress={'70%'} />
                <SkillSection skill="UI/UX Design" progress={'70%'} />
                <SkillSection skill="Graphic Design" progress={'70%'} />
            </div>

            <div className="servives-container">
                <ServiceSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                <ServiceSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                <ServiceSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />   
            </div>
        </div>
    )
}

export default AboutPage
