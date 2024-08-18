import ThemeToggle from "@/components/ThemeToggle"

const PageHeader: React.FC = () => {
    return (
        <div className="pageHeader">
            <div className="centerContainer">
                <div className="groups">
                    <div className="group">
                        <a className="rootLink" href="/">
                            /home/hung
                        </a>
                        <span className="current">
                            /notes <span className="indicator">❙</span>
                        </span>
                    </div>

                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

export default PageHeader
