import logoLoader from '../../../public/images/loader.png'

const Loader = () => {
    return (
        <section className='min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center font-mono'>
            <div className='h-[350px] aspect-square'>
                <img src={logoLoader} alt="" />
            </div>
            <article className='flex justify-center items-center gap-6'>
                <h1>Lista de tareas</h1>
                <div className='animate-spin inline'>
                    <i className='bx bx-loader-alt'></i>
                </div>
            </article>
        </section>
    )
}

export default Loader