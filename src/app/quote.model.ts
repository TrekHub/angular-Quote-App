// export class Quote {




//     public description!: string;
//     public upVote!: number;
//     public downVote!: number;

//     constructor(description:string, upVote:number, downVote:number) {
//         this.description = description
//         this.upVote = upVote
//         this.downVote = downVote

//     }

// }

export interface Quote {
    author: string
    quoteContent: string
    submitted: string
    upVote: number
    downVote: number
}