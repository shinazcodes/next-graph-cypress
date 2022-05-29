import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paths } from "../util/Paths";
import { incrementPageAsync, pageSlice } from "./state/RandomApi/random-api-slice";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";
import { IRootState } from "./state/store";

export default function page1Page() {
    const GoForward = gql`
    mutation GoForward($input: userInput!) {
        goForward(input: $input) {
          pageNumber
        }
      }
      
`;

    const [createUser] = useMutation(GoForward);

    const router = useRouter();
    const dispatch = useDispatch();
    const status = useSelector((state: IRootState) => {
        return state.status
    });

    const [firstName, setFirstName] = useState("")

    useEffect(() => {
        // if (status === "SUCCESS") {
        //     console.log("hghjghjg")
        //     router.push(Paths.page2)

        // }
    }, [status])
    return (<>
        <div>page1</div>
        <input
            type="text"
            placeholder="first name"
            onChange={(event) => {
                setFirstName(event.target.value.toString());
            }}
        />
        <button onClick={() => {
            createUser({
                variables: {
                    input: { firstName },
                },
            });
            // dispatch(incrementPageAsync("1"))
        }} >to page 2</button>
    </>

    )
}

