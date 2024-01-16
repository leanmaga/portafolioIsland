import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const formRef = useRef();
  const [ form, setForm ] = useState({ name:'', email:'', message:''});
  const [ isLoading, setIsLoading ] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value })
  }

  const handleFocus = () => {

  }

  const handleBlur = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    //console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID)

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false);
      // TODO: Show succes message
      // TODO: Hide an alert 
    }).catch((error) =>{
      setIsLoading(false);
      console.log(error);
      //TODO: Show error message
    })
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        
        <h1 className="head-text">Pongase en contacto</h1>

        <form 
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >

          <label className="text-black-500 font-semibold">
            Nombre
            <input 
              className="input" 
              type="text" 
              name="name"
              placeholder="Charles Darwin"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >

            </input>
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input 
              className="input" 
              type="email" 
              name="email"
              placeholder="charlesdarwin@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >

            </input>
          </label>

          <label className="text-black-500 font-semibold">
            Mensaje
            <textarea 
              className="textarea"  
              name="message"
              rows={4}
              placeholder="¡Déjame saber cómo puedo ayudarte!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >

            </textarea>
          </label>

          <button 
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

      </div>
      
    </section>
  );
};

export default Contact;