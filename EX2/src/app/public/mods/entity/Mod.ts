class Mod {
    public modName: string;
    public modDownloads: number;
    public modOwner: string;
    public modState: boolean;

    constructor(nme: string, dwl: number, own: string, stt: boolean) {
        this.modName = nme;
        this.modDownloads = dwl;
        this.modOwner = own;
        this.modState = stt;
    }
}

export default Mod;