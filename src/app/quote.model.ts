export class Quote {



    public quoteId: any
    public author: string
    public quoteContent: string;
    public submitted: string
    public upVote: number;
    public downVote: number;
    public createdOn: Date

    constructor(quoteId: any, author: string, quoteContent: string, submitted: string, upVote: number, downVote: number, createdOn: Date) {
        this.quoteId = quoteId
        this.author = author
        this.quoteContent = quoteContent
        this.submitted = submitted
        this.upVote = upVote
        this.downVote = downVote
        this.createdOn = createdOn

    }

     static generateId() {
        return Math.floor(Math.random() * 100);
      }


}

