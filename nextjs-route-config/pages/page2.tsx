import { useRouter } from "next/router";
import { Paths } from "../util/Paths";

export default function Page2() {
    const router = useRouter();
    return (<>
        <div>page1</div>
        <button onClick={() => {
            router.push(Paths.page1after2)
        }} >to page 2-1</button>
        <button onClick={() => {
            router.push(Paths.page2after2)
        }} >to page 2-2</button>
    </>

    )
}

