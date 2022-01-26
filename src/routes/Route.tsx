import { ComponentType } from "react";
import { RouteProps, Route as ReactRoute, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

interface Props extends RouteProps {
    isPrivate?: boolean
    component: ComponentType
}

export const Route = ({ isPrivate = false, component: Component, ...rest }: Props) => {
    const { accessToken } = useAuth()

    return (
        <ReactRoute
            {...rest}
            render={() => isPrivate === !! accessToken ? (
                <Component/>
            ) : (
                <Redirect to={isPrivate ? "/" : "/dashboard"} />
            )}
        />
    )
}