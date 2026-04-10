import { Ideable } from 'types/mixin';

export interface Comment extends Ideable {
  name: string;
  text: string;
  likeCount: number;
  createdAt: Date;
}
