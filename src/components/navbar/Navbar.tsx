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
                        <Link to='/categoria' className='hover:underline'>Categorias</Link>
                        <Link to= '/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
