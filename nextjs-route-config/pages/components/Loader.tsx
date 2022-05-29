import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Paths } from "../../util/Paths";
import { useIsValidPage } from "../../util/useIsValidPage";
import { IRootState } from "../state/store";

export default function Loader() {
    const router = useRouter();
    const [loading, setIsLoading] = useState(false)
    const isLoading = useSelector((state: IRootState) => {
        return state.status === "loading"
    }) || loading;
    useEffect(() => {
        router.events.on("routeChangeComplete", () => {
            setIsLoading(false)
        })
        router.events.on("routeChangeStart", () => {
            setIsLoading(true)
        })
    }, [])

    const { isValid, highestAllowedPage } = useIsValidPage(router.pathname)
    useEffect(() => {
        console.log(isLoading)

        if (!isValid) {
            const destination = highestAllowedPage ?? undefined;
            router.replace(destination ?? Paths.error)
        }
    }, [isValid])

    return (
        <>
            {!isValid || isLoading && <div>loading...</div>}
        </>
    )
}