export class Branch{
    private name: string;
    private location: Object = {
        latitude: null,
        longitude: null
    };
    private description: string;
    private image: string;

    constructor(obj: any){
        this.name = obj.name;
    }
} 