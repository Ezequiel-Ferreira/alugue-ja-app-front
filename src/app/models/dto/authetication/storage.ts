export interface StorageModel {
    id : number;

   email : string;

   creditos : number;

    tipo: TipoUsuarioDTOOutput;

    token: string; 
}

export const emptyStorageModel : StorageModel =  {
    id: 0,
    email: '',
    creditos : 0,
    tipo: TipoUsuarioDTOOutput.CLIENTE,
    token: '' 
}



export const enum TipoUsuarioDTOOutput {
    ADMINISTRADOR, CLIENTE
} 

export interface QuantidadeHoras {
    quantidadeHoras : number;
  }