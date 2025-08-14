import { PlusIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return <header className="bg-base-100 border-b border-base-content/10">
    <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white-500 font-montserrat tracking-normal">Hai, Rafathin</h1>
            <div className="flex items-center gap-4">
                <Link to ="/create" className="btn btn-primary">
                    <PlusIcon className="size-5" />
                    <span>New Note</span>
                </Link>
            </div>
        </div>
    </div>
      
    </header>
  
}

export default Navbar
