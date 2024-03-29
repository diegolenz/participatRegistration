export interface ParticipantResponse {
    code: number;
    externalCode?: number;
    name: string;
    cpfCnpj: number;
    phoneNumber?: string;
    digitalSignature?: boolean;
    status: boolean;
}

