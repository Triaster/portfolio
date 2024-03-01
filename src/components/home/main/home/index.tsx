import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import { Section, SectionContent, SectionContentAvatar, SectionContentSocialNetworks, SectionContentSocialNetworksList, SectionContentSocialNetworksListItem, SectionFooter, SectionFooterControls, SectionFooterControlsButton, SectionHeader } from "../style";
import Avatar from "@/images/avatar";

export default function MainHomeContent() {
    const rows = [
        { logo: <TelegramIcon />, title: 'Telegram', id: 0 },
        { logo: <XIcon />, title: 'X & Twitter', id: 1 },
        { logo: <GitHubIcon />, title: 'Github', id: 2 },
        { logo: <GitHubIcon />, title: 'LeetCode', id: 3 },
        { logo: <GitHubIcon />, title: 'CodeWars', id: 4 }]
    return (
        <Section>
            <SectionHeader>
                <h1 style={{ letterSpacing: "0.075rem" }}>Maxime Sergeevich Brutsky</h1>
                <h4 style={{ letterSpacing: "0.075rem" }}>Hey, I'm Maxime the VP if Developer Experience at Vercel where my team helps developers build a faster web.</h4>
            </SectionHeader>

            <SectionContent>
                <SectionContentAvatar>
                    <Avatar />
                </SectionContentAvatar>
                <SectionContentSocialNetworks>
                    <SectionContentSocialNetworksList>
                        {rows.map(row => (
                            <SectionContentSocialNetworksListItem key={row.id} >
                                <div>
                                    {row.logo}
                                </div>
                                <div>
                                    {row.title}
                                </div>
                            </SectionContentSocialNetworksListItem>
                        ))}
                    </SectionContentSocialNetworksList>
                </SectionContentSocialNetworks>
            </SectionContent>

            <SectionFooter>

                <div>
                    <p style={{ letterSpacing: "0.075rem" }}>
                        I'am a Next.js contributor and heko lead our open-source communities. I'm passionate about frontend development and have created courses on React, Next.js and web development. I'am advisor and investor in early stage start.
                    </p>
                </div>

                <div>

                    <SectionFooterControls>
                        <SectionFooterControlsButton>
                            <AlternateEmailIcon />
                            contact with me
                        </SectionFooterControlsButton>

                        <SectionFooterControlsButton>
                            <DownloadIcon />
                            download cv
                        </SectionFooterControlsButton>
                    </SectionFooterControls>
                </div>
            </SectionFooter>
        </Section>
    )
}