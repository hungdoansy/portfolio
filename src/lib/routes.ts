export const getPostURL = (slug: string) => {
    return `/posts/${slug}`
}

export function isExternalLink(url: string): boolean {
    try {
        const link = new URL(url)
        return link.hostname !== window.location.hostname
    } catch (e) {
        // If the URL constructor throws an error (e.g., for relative URLs), it means it's not an external link.
        return false
    }
}
