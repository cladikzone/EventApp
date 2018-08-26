import { Branch } from './branch';

export class RegisterModel {
    public branches: Array<Branch>;
    public email: string;
    public mobile: string;
    public notifyDates: number;
}