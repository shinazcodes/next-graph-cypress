import { Paths } from "./Paths";

export const RouteConfig = {
    [Paths.index]: {
        allowedStates: [
            Paths.page1
        ],
        next: Paths.page1
    },
    [Paths.page1]: {
        allowedStates: [
            Paths.page2
        ],
        next: Paths.page2
    },
    [Paths.page2]: {
        allowedStates: [
            Paths.page2, Paths.page1after2, Paths.page3
        ],
        next: Paths.page3
    },
    [Paths.page1after2]: {
        allowedStates: [
            Paths.page2after2
        ],
        next: Paths.page3
    },
    [Paths.page2after2]: {
        allowedStates: [
            Paths.page3
        ],
        next: Paths.page2
    },
    [Paths.page3]: {
        allowedStates: [
            Paths.page4
        ],
        next: Paths.page4
    },
    [Paths.page4]: {
        allowedStates: [
            Paths.page1after4
        ],
        next: Paths.page2
    },
    [Paths.page1after4]: {
        allowedStates: [
            Paths.page4
        ],
        next: Paths.page1after4
    },

}

export const GeneralPages = {
    [Paths.index]: "/"
}