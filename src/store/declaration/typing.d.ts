declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.txt" {
  const content: string;
  export default content;
}
declare module "*.scss" {
  const content: string;
  export default content;
}

type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;

declare module "*.svg" {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}
declare module "*.png" {
  const value: any;
  export default value;
}
declare module "lodash-es";

declare module "*.jpeg";
