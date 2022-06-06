export interface Filme{
    id : number;
    nome : string;
    descricao: string;
    valor: number;
    urlCapa: string;
    genero : string;
}

export interface FilmeDTOInput{
    id : number;
    nome : string;
    descricao: string;
    valor: number;
    urlCapa: string;
    urlVideo: string;
    genero : Genero;
}



export enum Genero{
   acao = 'acao',aventura = 'aventura',drama = 'drama', suspense = 'suspense',romance ='romance' ,terror = 'terror',comedia = 'comedia'
}
