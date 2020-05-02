function Content({ children }) {
    return (
        <div className="container mt--8 pb-5">
            <div className="row justify-content-center">
                {children}
            </div>
        </div>
    )
}

export default Content