
import {FC} from "react";

type productdetailprops={
    title:string,
    description:string,
    price:number
};

const ProductDetail: FC<productdetailprops> = (props) =>
{
    return (
    <>
    <h1 className="text-5xl font-bold ">{props.title}</h1>
    <p className="text-2xl">{props.description}</p>
    <p>{props.price}</p>
    </>
    )
}
export default ProductDetail;
