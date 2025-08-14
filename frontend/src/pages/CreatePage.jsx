import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios"; 

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            toast.error("Title and content are required");
            return;
        }
        setLoading(true);
        try {
            await api.post("/notes", {
                title,
                content
            });
            toast.success("Note created successfully");
            navigate("/"); 
        } catch (error) {
            console.log("Error creating note:", error);
            if(error.response?.status === 429) {
                toast.error("Slow down! You're creating notes too fast.",{
                    duration: 4000,
                    position: "top-center"
                });
            }

        } finally {
            setLoading(false);
        }
            
    }

  return <div className="min-h-screen bg-base-100">
        <div className="container mx-auto p-4 py-8"> 
            <div className="max-w-2xl mx-auto">
                <Link to="/" className="btn btn-ghost mb-6">
                    <ArrowLeft className="size-5" />
                    Back to Home
                </Link>

                <div className="card bg-stone-900">
                    <div className="card-body">
                        <h1 className="card-title text2xl mb-4">Create New Note</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Note Title"
                                    className="input input-bordered"
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Content</span>
                                </label>
                                <textarea 
                                    className="textarea textarea-bordered h-32" 
                                    placeholder="Write your note here..."
                                    value={content} 
                                    onChange={(e) => setContent(e.target.value)} 
                                    required
                                />
                            </div>
                            <div className="card-action justify-end">
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? "Creating..." : "Create Note"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
}

export default CreatePage
