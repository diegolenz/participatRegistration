export enum Gender {
    MALE = 'MASCULINO',
    FEMALE = 'FEMININO',
    UNDEFINED = 'INDEFINIDO'
}

export interface EnumType {
    value: string;
    label: string;
}

export const genderTypes = [
    { value: 'MALE', label: 'MASCULINO' },
    { value: 'FEMALE', label:'FEMININO' },
    { value: 'UNDEFINED', label: 'INDEFINIDO' }
]

export enum maritalStatus {
    SINGLE, MARRIED, SEPARATED, DIVORCED, WIDOWED
}