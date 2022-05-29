import { useRouter } from "next/router"
import { Paths } from "../util/Paths";

export default function ErrorPage() {
    const router = useRouter();
    return (<>
        <div>error page</div>
        <button onClick={() => {
            router.push(Paths.page1)
        }} >back to start</button>
    </>

    )
}

