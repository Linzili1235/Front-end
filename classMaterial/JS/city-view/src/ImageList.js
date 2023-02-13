import './ImageList.scss'
export const ImageList = ({images,getBG}) => {
    console.log('in imageList',images)
    return <div className="carousel">
        {
            images && images.map((item,index) => {
                return <div key={index}
                            onClick={() => getBG(item)}
                            style = {
                {background: `url('${item.thumb}') no-repeat center center/cover fixed`}
            }>

                </div>
            })
        }

    </div>
}