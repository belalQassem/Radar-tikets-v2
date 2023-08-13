
import React from "react";
import { LoaderContainer,StyledSpan } from "./style";

const Loading = () => {
    return (
            <LoaderContainer>
                <StyledSpan className="loader-bar" style={{ '--d': '200ms' }}></StyledSpan>
                <StyledSpan className="loader-bar" style={{ '--d': '400ms' }}></StyledSpan>
                <StyledSpan className="loader-bar" style={{ '--d': '600ms' }}></StyledSpan>
                <StyledSpan className="loader-bar" style={{ '--d': '800ms' }}></StyledSpan>
                <StyledSpan className="loader-bar" style={{ '--d': '1000ms' }}></StyledSpan>
            </LoaderContainer>
        

    );
};

export default Loading;