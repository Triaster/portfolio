"use client"

import Link from "next/link"
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Sidebar from "@/components/global/sidebar";

import { Main, Aside, Logo } from "./style";
import { ContextContentProvider, useContextContent, IContextContentState, IContextContentStateEnum, IContextContent } from "@/context/ContextContent";
import MainHomeContent from "./home";
import MainBlogContent from "./blog";

function ContentComponent() {
    const { state } = useContextContent() as IContextContent;
    const stateIndex = state.findIndex((item: IContextContentState) => item.active)

    switch (state[stateIndex].title) {
        case IContextContentStateEnum.HOME:
            return <MainHomeContent />
        case IContextContentStateEnum.BLOG:
            return <MainBlogContent />
        default:
            return <>Sorry, not this content</>
    }
}

export default function MainComponent() {
    return (
        <ContextContentProvider>
            <Main>

                <Aside>
                    <Logo>
                        <Link href={"/"}>
                            <LogoDevIcon />
                        </Link>
                    </Logo>
                    <Sidebar />
                </Aside>

                <ContentComponent/>
            </Main>
        </ContextContentProvider>
    )
}