export interface BlogPost {
    url: string,
    title: string,
    text: string,
    publishDate: Date,
    authors: string,
    concepts: string,
    sentiment:string,

}

export interface Blog {
    itens: BlogPost[]
}
