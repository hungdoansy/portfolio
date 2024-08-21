import { Article } from "@/components/Article"
import BlogLayout from "@/components/layout/BlogPost"
import getOgImage from "@/lib/generate-opengraph-images"
import { getFileBySlug, getFiles } from "@/lib/mdx"

export default async function BlogPost({ params: { slug } }: { params: { slug: string } }) {
    const post = await getFileBySlug(slug as string)

    const ogImage = await getOgImage({
        title: post.frontMatter.title,
        background: post.frontMatter.colorFeatured,
        color: post.frontMatter.fontFeatured,
    })

    return (
        <BlogLayout frontMatter={post.frontMatter} ogImage={ogImage}>
            <Article content={post.mdxSource} />
        </BlogLayout>
    )
}

export const generateStaticParams = async () => {
    const posts = await getFiles()

    return posts.map((p) => p.replace(/\.mdx/, ""))
}
