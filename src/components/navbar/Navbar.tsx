import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-emerald-700 text-white'>

                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className='font-bold text-2xl'>
                    Epharmac
                    </Link>
                    <div className='flex gap-4'>
                        Categorias
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
