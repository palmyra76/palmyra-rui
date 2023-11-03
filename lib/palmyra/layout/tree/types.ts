
interface TreeListener<T> {
    onClick: (id: string, e: T) => void
    expand: (id: string, e: T) => void
    collapse: (id: string, e: T) => void
}

export type { TreeListener }