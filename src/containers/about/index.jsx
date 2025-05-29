import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from 'react-simple-animate';
import './styles.scss'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'




const personalDetails = [
    { label: "Name", value: "Jordan Avir" },
    { label: "Age", value: "20" },
    { label: "Address", value: "Bolivia" },
    { label: "Email", value: "burgosjordan194@gmail.com" },
    { label: "Contact", value: "+591 76346429" }
];

const jobSummary = 'Estudiante de Ingeniería de Sistemas con pasión por resolver problemas y crear soluciones innovadoras. En constante búsqueda de aprendizaje y desarrollo de habilidades en tecnología de la información. Una persona responsable y con capacidad de adaptación y dedicación para ofrecer lo mejor en cada situación.';

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about_content">
                <div className="about_content_personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(-900px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <h3>Full Stack Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(500px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about_content_servicesWrapper">
                     <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(600px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >
                    <div className="about_content_servicesWrapper_innerContent">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiApple size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                    </Animate>

                </div>

            </div>
        </section>
    );
};

export default About;
