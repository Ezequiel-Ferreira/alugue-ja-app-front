import { Filme } from 'src/app/models/filme';
export interface UsuarioCompleto{
    id: number;
    nome: string;
    email: string;
    creditos: number;
    alugueis: AluguelDTO[];
}

interface AluguelDTO {
    id: number;
    filme: Filme
}