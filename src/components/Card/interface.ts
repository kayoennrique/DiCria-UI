export type Card = {
    text: string
    content: React.ReactNode;
}

export type CardProps = {
    cards: Card[]
    title?: string
    footer?: string
    width?: string
    padding?: string
    borderradius?: string
    bgcolor?: string
    titlecolor?: string
    textcolor?: string
    sizetitle?: string
    sizetext?: string
    serparatorheight?: string
    serparatorwidth?: string
    serparatorcolor?: string
} 
