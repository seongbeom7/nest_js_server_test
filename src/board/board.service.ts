import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
    AllBoards(): String {
        return 'All Boards return';
    }
}
