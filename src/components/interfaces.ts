export interface IStdButton {
  ButtonPath: string;
  ButtonText: string;
  ButtonStatus?: true | false;
}

export interface IPageIsland extends IStdButton {
  Title: string;
  Body: string;
}
