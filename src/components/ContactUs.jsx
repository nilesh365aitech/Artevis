export default function ContactUs() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="max-w-7xl mx-auto py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                    <p className="text-zinc-600">Stay ahead in a rapidly changing world. Subscribe to Artevis Consulting, for latest  updates</p>
                </div>
                <div>
                    <form action="#">
                        <div  className="mb-4">
                            <input style={{backgroundColor: "#F0F3F8"}} type="text" name="name" placeholder="Name" className="w-full p-3  placeholder-blue-900" />
                        </div>
                        <div className="mb-4">
                            <input style={{backgroundColor: "#F0F3F8"}} type="email" name="email" placeholder="Email" className="w-full p-3  placeholder-blue-900" />
                        </div>
                        <div className="mb-6">
                            <textarea style={{backgroundColor: "#F0F3F8"}} name="message" rows="4" placeholder="Tell us about your company" className="w-full p-3  placeholder-blue-900"></textarea>
                        </div>
                        <button onClick={handleSubmit} className="bg-black text-start text-red-600 px-6 py-3 mb-3 w-full  hover:bg-zinc-800 transition-colors">
                            Submit <span className="ml-1">➜</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
