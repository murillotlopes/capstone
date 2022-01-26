import { ComponentType } from "react";
import { RouteProps, Route as ReactRoute, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

interface Props extends RouteProps {
    isPrivate?: boolean
    page: ComponentType
}

export const Route = ({ isPrivate = false, page: Page, ...rest }: Props) => {
    const { accessToken } = useAuth()

    return (
        <ReactRoute
            {...rest}
            render={() => isPrivate === !! accessToken ? (
                <Page/>
            ) : (
                <Redirect to={isPrivate ? "/signin" : "/dashboard"} />
            )}
        />
    )
}