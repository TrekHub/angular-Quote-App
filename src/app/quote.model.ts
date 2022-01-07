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
    description: string
    upVote: number
    downVote: number
}