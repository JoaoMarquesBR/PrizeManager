import { IITem } from "./IITem";

export interface IGroup {
    promotionGroupId: number | undefined,
    groupName: string | undefined,
    createdDate: Date | undefined,
    itemList: IITem[],
    itemListId: number[],
    participants: number
}