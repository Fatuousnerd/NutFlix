import './xx.scss';
import Acc from "./Acc";
import { Telegram } from '@mui/icons-material';

const Go = ({ item }) => {
    return (
        <a href={item.lnk} target='_blank'>
            <div className="wrap">
                <img src={item.pic} alt="" />
                <div className="tx">
                    <h1>{item.name}</h1>
                    <div className="stats">
                        {/* <p>{item.follows}+ Followers</p> */}
                        {/* <p>{item.posts}+ Posts</p> */}
                    </div>
                </div>
                <p className='desc'>{item.desc}</p>
                <p className='tg'>
                    <a href={item.tg}>
                        VIP Telegram <Telegram />
                    </a>
                </p>
            </div>
        </a>
    )
}

const XX = () => {
    return (
        <>
            <div className="xx">
                {Acc.map(item => (
                    <Go item={item} key={item.id} />
                ))}
            </div>
        </>
    )
}

export default XX