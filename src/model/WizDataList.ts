import { TxData } from "@script-wiz/lib-core";
import WizData from "@script-wiz/wiz-data";

export type WizDataList = {
  inputHexes: string[];
  main: WizData[];
  alt: WizData[];
  flow: boolean[];
  altFlow: boolean[];
  isStackFailed: boolean;
  errorMessage?: string;
  txData?: TxData;
};
