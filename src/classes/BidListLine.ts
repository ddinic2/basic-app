export class BidListLine {
    constructor(
        public AccountId: number,
        public Budget: number,
        public CategoryId: number,
        public Description: string,
        public Guid: string,
        public Id: number,
        public ParticipantId: number,
        public Published: boolean,
        public Quantity: number,
        public Subject: string,
        public Unit: string,
        public Items: BidListLine[]
    ){}
}
