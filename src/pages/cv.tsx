export default function Page() {
    return <span>Redirecting...</span>
}

export async function getServerSideProps(context) {
    return {
        redirect: {
            destination: "/cv_doan_sy_hung.pdf",
            permanent: false,
        },
    }
}
