

import { CTA } from "../components";
import { experiences, skills } from "../constants";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hola, mi nombre es{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Leandro
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Desarrollador Front-End de Argentina, specializado en tecnologias como React js.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Mis habilidades</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Experiencia laboral</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Trabaje con empresas de diferentes partes del mundo mejorando mis habilidades y asociandome con gente
            muy profesional e inteligente. Aquí les dejo mis resumen: 
          </p>
        </div>

        
      </div>

      <hr className='border-slate-200' />

      <CTA/>
    </section>
  );
};

export default About;