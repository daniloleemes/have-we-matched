export default function ProgressBar({ label, progress }) {
    return (
        <div className="progress-wrapper">
            <div className="progress-info">
                <div className="progress-label">
                    <span>{label}</span>
                </div>
                <div className="progress-percentage">
                    <span>{progress}%</span>
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}