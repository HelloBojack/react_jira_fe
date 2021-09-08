import { Rate } from "antd";

interface IFavStarProps extends React.ComponentProps<typeof Rate> {
  checked: boolean;
}

const FavStar = ({ checked, ...restProps }: IFavStarProps) => {
  return <Rate count={1} value={checked ? 1 : 0} {...restProps} />;
};

export default FavStar;
