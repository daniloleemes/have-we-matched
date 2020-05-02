function Spinner({ label }) {
    return (
        <>
            {label && (
                <div className="text-center text-muted mb-4">
                    <small>{label}</small>
                </div>
            )}
            <div className="text-center text-muted mb-4">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </>
    )
}

export default Spinner