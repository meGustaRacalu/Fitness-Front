import { Link } from 'react-router-dom';

function CardProduto() {
    return (<>
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
            <header className="py-2 px-6 bg-blue-800 text-white font-bold text-2xl">
                Produto
            </header>
            <p className="p-8 text-3xl bg-gray-200 h-full">Descrição</p>
            
            <div className="flex">
                <Link
                    to="/editar"
                    className="w-full text-gray-100 bg-blue-400 hover:bg-blue-800 
                        flex items-center justify-center py-2"
                >
                    <button>Editar</button>
                </Link>

                <Link
                    to="/deletar"
                    className="text-gray-100 bg-red-400 hover:bg-red-700 w-full 
                        flex items-center justify-center"
                >
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default CardProduto;