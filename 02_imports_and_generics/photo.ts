// {
// 	"albumId": 1,
// 	"id": 1,
// 	"title": "accusamus beatae ad facilis cum similique qui sunt",
// 	"url": "https://via.placeholder.com/600/92c952",
// 	"thumbnailUrl": "https://via.placeholder.com/150/92c952"
// },

export interface Photo {
  albumId: number;
  readonly id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const SM_BREAK_POINT = "460px";
