import Header from "./Header"

function MessageDetail() {
    return (
        <>
            <div className="p-4 sticky-top bg-black pb-3">
                <Header />
            </div>
            {/* message here */}
            <div className="p-4 mb-3 h-75 d-flex justify-content-center align-items-center">
                <h2>
                No Message
                </h2>
            </div>
        </>
    )
}

export default MessageDetail