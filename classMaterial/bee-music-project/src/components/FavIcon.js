import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


const FavIcon = ({liked,...rest}) => {
    return <div  className="icon" {...rest}>
        {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
    </div>
}

const CheckedIcon = ({checked,...rest}) => {
    return <div className="icon" {...rest}>
        {checked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>}
    </div>
}


const PlayingIcon = ({playing}) => {
    return <div className="icon">
        {playing ? <img width='28px' src='./img/sound.gif'/> : <></>}
    </div>
}

export {
    FavIcon,
    CheckedIcon,
    PlayingIcon
}