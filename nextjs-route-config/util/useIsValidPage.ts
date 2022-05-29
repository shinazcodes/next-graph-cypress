import { useMemo } from "react"
import { useSelector } from "react-redux"
import { IRootState } from "../pages/state/store"
import { Paths } from "./Paths"
import { GeneralPages, RouteConfig } from "./RouteConfig"

export const useIsValidPage = (page: string) => {
    const highestAllowedPage = useSelector<IRootState, string>((s) => {
        console.log(s.page);
        return s.page.highestAttainedPage;
    })
    console.log(highestAllowedPage)
    return useMemo(() => {
        if (!!GeneralPages[page]) {
            return { isValid: true, highestAllowedPage: page }

        }
        const highestMatch = RouteConfig[highestAllowedPage]?.next ?? undefined;
        const isValid = highestAllowedPage && (page === highestAllowedPage || RouteConfig[highestMatch]?.allowedStates.indexOf(page) !== -1);

        console.log(highestAllowedPage)
        console.log(highestMatch)
        return { isValid, highestAllowedPage }
    }, [page, highestAllowedPage])
}