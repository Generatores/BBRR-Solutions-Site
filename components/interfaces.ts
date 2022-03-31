import { StaticImageData } from "next/image";

export interface IStdButton {
  ButtonPath: string;
  ButtonText: string;
  ButtonStatus?: true | false;
}

export interface IPageIsland extends IStdButton, TitleBody {}

export interface ITopicContainer extends TitleBody {
  ImageSrc: StaticImageData;
  ImageAlt: string;
  RenderButton?: true | false;
  ButtonPath?: string;
}

export interface TitleBody {
  Title: string;
  Body?: string;
}
