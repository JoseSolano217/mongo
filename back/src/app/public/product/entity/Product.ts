class Product {
    public productName: string;
    public productValue: number;
    public productAmount: number;
    public expireDate: Date;

    constructor (nm: string, vl: number, am: number, dt: Date) {
        this.productName = nm;
        this.productValue = vl;
        this.productAmount = am;
        this.expireDate = dt;
    }
}

export default Product;