import crypto from 'node:crypto'
export type linkProps = {
    id: string
    originalUrl: string
    shortUrl: string
}



export class Link {

    private constructor(private readonly props: linkProps) {
        Object.assign(this, props)
    }

    public static create(originalUrl: string, shortUrl: string) {
        return new Link({
            id: crypto.randomUUID().toString(),
            originalUrl,
            shortUrl
        })
    }


    public get originalUrl() {
        return this.props.originalUrl
    }

    public get shortUrl() {
        return this.props.shortUrl
    }

    public get id() {
        return this.props.id
    }

}
