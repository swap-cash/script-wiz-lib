import IStackData from "../../model/IStackData";
import stackNumber from "../stackNumber";

const OP_TOALTSTACK = (): IStackData[] => [];

const OP_FROMALTSTACK = (stackData: IStackData): IStackData[] => [stackData];

const OP_2DROP = (): IStackData[] => [];

const OP_2DUP = (stackData1: IStackData, stackData2: IStackData): IStackData[] => [stackData1, stackData2];

const OP_3DUP = (stackData1: IStackData, stackData2: IStackData, stackData3: IStackData): IStackData[] => [stackData1, stackData2, stackData3];

const OP_2OVER = (stackData1: IStackData, stackData2: IStackData): IStackData[] => [stackData1, stackData2];

const OP_2ROT = (stackData1: IStackData, stackData2: IStackData, stackData3: IStackData, stackData4: IStackData, stackData5: IStackData, stackData6: IStackData): IStackData[] => [
  stackData4,
  stackData3,
  stackData2,
  stackData1,
  stackData6,
  stackData5,
];

const OP_2SWAP = (stackData1: IStackData, stackData2: IStackData, stackData3: IStackData, stackData4: IStackData): IStackData[] => [stackData2, stackData1, stackData4, stackData3];

const OP_DEPTH = (stackDataArrayLenght: number) => [stackNumber(stackDataArrayLenght.toString())];

const OP_DROP = (): IStackData[] => [];

const OP_DUP = (stackData1: IStackData): IStackData[] => [stackData1];

const OP_IFDUP = (stackData1: IStackData): IStackData[] => {
  if (stackData1.numberValue !== undefined && stackData1.numberValue === 0) {
    return [];
  }

  return [stackData1];
};

const OP_NIP = (stackData1: IStackData, stackData2: IStackData): IStackData[] => [stackData1];

const OP_OVER = (stackData: IStackData): IStackData[] => [stackData];

const OP_PICK = (stackDataArray: IStackData[], stackIndex: number): IStackData[] => [...stackDataArray, stackDataArray.reverse()[stackIndex]];

const OP_ROLL = (stackDataArray: IStackData[], stackIndex: number): IStackData[] => {
  const newStackDataArray: IStackData[] = [...stackDataArray].reverse();
  const currentItem: IStackData = newStackDataArray[stackIndex];

  newStackDataArray.splice(stackIndex, 1);

  newStackDataArray.unshift(currentItem);

  return newStackDataArray.reverse();
};

const OP_SWAP = (stackData1: IStackData, stackData2: IStackData): IStackData[] => [stackData1, stackData2];

export { OP_TOALTSTACK, OP_FROMALTSTACK, OP_2DROP, OP_2DUP, OP_3DUP, OP_2OVER, OP_2ROT, OP_2SWAP, OP_DEPTH, OP_DROP, OP_DUP, OP_IFDUP, OP_NIP, OP_OVER, OP_PICK, OP_ROLL, OP_SWAP };
