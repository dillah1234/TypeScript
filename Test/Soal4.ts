class Mobil {
    merk: string;
    tahun: number;

    constructor(merk: string, tahun: number) {
        this.merk = merk;
        this.tahun = tahun;
    }

    info(): string {
        return `Mobil ini adalah ${this.merk}, keluaran tahun ${this.tahun}.`;
    }
}

const mobil1 = new Mobil("Toyota Lamborghini", 2020);
const mobil2 = new Mobil("Honda Ferrari", 2019);


console.log(mobil1.info());
console.log(mobil2.info());
