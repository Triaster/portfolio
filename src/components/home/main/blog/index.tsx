import { Section, BlogContentItem, BlogContentButtonReturn } from "../style";
import { IArticlesContent, articles } from "@/blog/articles";
import ArrowPreviousIcon from "@/images/arrow_previous";
import { useState } from "react";

export default function MainBlogContent() {
    const [stateArticles, setArticles] = useState<IArticlesContent[]>(articles)

    const handleArticles = (idx: number | null) => {
        console.log(idx)
        typeof idx == 'number' 
            ?
                setArticles(stateArticles.map((_v, _i, _a) => { _v.active = false; _a[idx].active = true; return _v; }))
            :
                setArticles(stateArticles.map((_v, _i, _a) => { _v.active = null; return _v; }))
    }

    return (
        <Section>
            {stateArticles.map((itm: IArticlesContent, idx: number) => (
                <BlogContentItem key={itm.id} onClick={() => handleArticles(idx)} $active={itm.active}>
                    <div>
                        Article <span>#{idx}</span>
                        <p>{itm.title}</p>
                    </div>
                    <p>{itm.description.min}</p>
                    {itm.active ? (
                        <BlogContentButtonReturn onClick={() => handleArticles(null)} >
                            <ArrowPreviousIcon />
                        </BlogContentButtonReturn>
                    ) : ""}
                </BlogContentItem>
            ))}
        </Section>
    )
}