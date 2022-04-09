import './navbar.css'
const Navbar = () => {
    return ( 
        <div className='px-4   md:px-10 lg:px-16 py-4  flex justify-between'>
            <div className='flex items-start'>
                <h2 className='mr-6 text-4xl' style={{fontFamily: 'Galada', color:'var(--red)' }}>AlphaSounds</h2>
                <button className='px-6 py-1 mr-3 rounded-full   text-xl bg-c-blue text-c-black' >learn</button>
                <button className='px-6 py-1 mr-3 rounded-full  text-xl bg-c-red text-c-black' >quiz</button>
            </div>

            <button className='px-6 py-1 mr-3 rounded-full font-bold text-xl bg-slate-50 text-c-red'>account</button>
        </div>
     );
}
 
export default Navbar;