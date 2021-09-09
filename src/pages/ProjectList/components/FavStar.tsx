import { Rate } from "antd";

interface IFavStarProps extends React.ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const FavStar = ({ checked, onCheckedChange, ...restProps }: IFavStarProps) => {
  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      {...restProps}
      onChange={(num) => onCheckedChange?.(!!num)}
    />
  );
};

export default FavStar;
