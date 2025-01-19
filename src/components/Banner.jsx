import Button from './Button'
import banner from '../assets/banner.webp'
function Banner() {
  return (
    <section className='relative pb-4 md:max-h-[60vh] flex flex-col md:justify-between md:flex-row-reverse justify-end items-center [&>a]:w-auto [&>a]:px-10 gap-4 mt-4 md:mt-8'>
   
      <img className='' src={banner} alt='' width={480} />
      <div className='flex flex-col gap-4 max-w-[60ch] items-start [&>a]:w-auto'>
        <h2 className='text-slate-100 text-5xl'>Challenge React</h2>
        <p>
          Este challenge es una forma de aprendizaje.
          Es un mecanismo donde podrás comprometerte en laresolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
        </p>
        <Button name='Ver' to='/' />
      </div>
    </section>
  )}

export default Banner
