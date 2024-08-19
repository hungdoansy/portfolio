import ThemeToggle from "@/components/ThemeToggle"
import PageContainer from "@/components/layout/PageContainer"

const PageHeader: React.FC = () => {
    return (
        <div className="w-full h-16 flex justify-center bg-muted-foreground">
            <PageContainer className="flex items-center justify-between">
                <div>
                    <a className="rootLink" href="/">
                        /home/hung
                    </a>
                    <span className="animate-pulse">❙</span>
                </div>

                <ThemeToggle />
            </PageContainer>
        </div>
    )
}

export default PageHeader
