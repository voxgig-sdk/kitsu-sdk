import { KitsuEntityBase } from '../KitsuEntityBase';
import type { KitsuSDK } from '../KitsuSDK';
import type { Control } from '../types';
import type { Anime, AnimeLoadMatch } from '../KitsuTypes';
declare class AnimeEntity extends KitsuEntityBase<Anime> {
    constructor(client: KitsuSDK, entopts: any);
    make(this: AnimeEntity): AnimeEntity;
    load(this: any, reqmatch?: AnimeLoadMatch, ctrl?: Control): Promise<AnimeEntity>;
}
export { AnimeEntity };
