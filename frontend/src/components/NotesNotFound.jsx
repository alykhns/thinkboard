import { NotebookIcon } from "lucide-react"
import { Link } from "react-router-dom"

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
        <div className="bg-primary/10 p-8 rounded-full">
            <NotebookIcon className="size-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">No notes yet</h3>
        <p className="text-base-content/70">Ready to organize your thoughts? Start writing notes here!</p>
        <Link to="/create" className="btn btn-primary">Create your first note</Link>
    </div>
  )
}

export default NotesNotFound
