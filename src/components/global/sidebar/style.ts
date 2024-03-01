import styled from "styled-components";

interface AsideListItemProps {
    readonly $active: boolean;
}  

export const AsideList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const AsideListItem = styled.li<AsideListItemProps>`
    border-radius: 5px;
    color: white;
    width: 100%;

    button {
        color: inherit;
        display: block;
        width: 100%;
        padding: 0.35rem 0.5rem 0.35rem;
        letter-spacing: 0.075rem;
        background: ${(props: any) => props.$active ? "#2b2b2b" : "none"};
    }
`