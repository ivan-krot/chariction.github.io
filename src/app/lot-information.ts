export interface LotInformation {
    id: number,
    image: string,
    title: string,
    description: string,
    startprice: number,
    currency: string,
    isGroup: boolean,
    startDate: Date,
    endDate: Date,
    owner: string,
    owner_id: number, 
}
