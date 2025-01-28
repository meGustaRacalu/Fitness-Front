import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate();
    
    let component: ReactNode

        component = (

            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Treine mais, viva mais!</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Home</Link>
                        <Link to='/temas' className='hover:underline'>Produtos</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Sobre Nós</Link>
                    </div>
                </div>
            </div>

        )

        return (
            <>
                { component }
            </>
        )
    }


export default Navbar