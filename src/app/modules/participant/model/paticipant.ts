export interface ParticipantResponse {
    code: number;
    externalCode?: number;
    name: string;
    cpfCnpj: number;
    phoneNumber?: string;
    digitalSignature?: boolean;
    status: boolean;
}

export const ELEMENT_DATA: ParticipantResponse[] = [
    { code: 1, name: 'Hydrogen', cpfCnpj: 1.0079, status: true },
    { code: 2, name: 'Helium', cpfCnpj: 4.0026, status: false },
    { code: 3, name: 'Lithium', cpfCnpj: 6.941, status: false },
    { code: 4, name: 'Beryllium', cpfCnpj: 9.0122, status: true },
    { code: 5, name: 'Boron', cpfCnpj: 10.811, status: true },
    { code: 6, name: 'Carbon', cpfCnpj: 12.0107, status: true },
    { code: 7, name: 'Nitrogen', cpfCnpj: 14.0067, status: true },
    { code: 8, name: 'Oxygen', cpfCnpj: 15.9994, status: true },
    { code: 9, name: 'Fluorine', cpfCnpj: 18.9984, status: true },
    { code: 10, name: 'Neon', cpfCnpj: 20.1797, status: true },
    { code: 11, name: 'Sodium', cpfCnpj: 22.9897, status: true },
    { code: 12, name: 'Magnesium', cpfCnpj: 24.305, status: true },
    { code: 13, name: 'Aluminum', cpfCnpj: 26.9815, status: true },
    { code: 14, name: 'Silicon', cpfCnpj: 28.0855, status: true},
    { code: 15, name: 'Phosphorus', cpfCnpj: 30.9738, status: true},
    { code: 16, name: 'Sulfur', cpfCnpj: 32.065, status: true },
    { code: 17, name: 'Chlorine', cpfCnpj: 35.453, status: true },
    { code: 18, name: 'Argon', cpfCnpj: 39.948, status: true },
    { code: 19, name: 'Potassium', cpfCnpj: 39.0983, status: true },
    { code: 20, name: 'Calcium', cpfCnpj: 40.078, status: true },
  ];