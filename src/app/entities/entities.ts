
export interface ChuckNorrisJoke { 
    id: string;
    value: string;
    url: string;
    icon_url: string;
    created_at: string;
    updated_at: string;
}

export interface Category {
    category: string
}

export interface ChuckNorrisJokes {
    total: number;
    result: ChuckNorrisJoke[]
}

export interface ChuckNorrisCategory {
    label: string;
    value: string;
}