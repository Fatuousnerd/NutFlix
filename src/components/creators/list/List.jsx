import './list.scss';
import Models from "./Models";

const Mapp = ({ item }) => {
    return (
        <div className="hold">
            <img src={item.pic} alt="" />
            <h1>{item.name}</h1>
        </div>
    )
}

const List = () => {
    return (
        <>
            <div className="list">
                {Models.map(item => (
                    <Mapp item={item} key={item.id} />
                ))}
            </div>
        </>
    )
}

export default List