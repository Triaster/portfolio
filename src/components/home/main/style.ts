import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    max-width: 1140px;
    max-height: 380px;
    height: 100%;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 15% 85%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 1rem;
`

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.75rem;
`

export const Logo = styled.div`
    height: 64px;
    width: 64px;

    svg {
        height: 64px;
        width: 64px;
        color: white;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 95%;
    gap: 0.75rem;
`

export const SectionHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const SectionContent = styled.div`
    display: flex;
    gap: 1.5rem;
`

export const SectionContentAvatar = styled.div`
    display: flex;
    flex: 0.2;

    svg {
        width: 100%;
        height: 100%;
    }
`

export const SectionContentSocialNetworks = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`

export const SectionContentSocialNetworksList = styled.ul`
    display: flex;
    gap: 0.75rem;
`

export const SectionContentSocialNetworksListItem = styled.li`
    display: flex;
    flex-direction: column;
    background: #1c1c1c;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    flex: 20;
`

export const SectionFooter = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const SectionFooterControls = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const SectionFooterControlsButton = styled.button`
    background: #212121;
    display: flex;
    flex-direction: column;
    padding: 5px 12px;
    border-radius: 6px;
    max-width: 8rem;
    width: 100%;
`

// 
interface BlogContentItemProps {
    readonly $active: boolean | null;
}  

export const BlogContentItem = styled.div<BlogContentItemProps>`
    background: #2b2b2b;
    border-radius: 6px;
    padding: .5rem;
    display: ${(props: BlogContentItemProps) => props.$active == true ? "flex" : props.$active == null ? 'flex' : "none"};
    flex-direction: column;
    gap: 1rem;
    cursor: ${(props: BlogContentItemProps) => props.$active == true ? "auto" : props.$active == null ? "pointer" : "auto"};
    border-bottom-right-radius: 2rem;
    transition: 0.5s ease all;
    position: relative;

    height: ${(props: BlogContentItemProps) => props.$active == true ? "100%" : "auto"};
`

export const BlogContentButtonReturn = styled.button`
    width: 28px;
    height: 28px;
    background: #00000000;
    transform: rotate(125deg);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
`