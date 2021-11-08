import "./gallery.css"
import useWindowDimensions from "../../utils/layout/layout";
import {Link} from "react-router-dom";

export const Gallery = () => {
    const {width} = useWindowDimensions();

    function galleryCss(width: any){
        if(width <=1550){
            return 'small-gallery'
        }else{
            return 'gallery'
        }
    }
    function getImageSize(width: any){
        if(width <=1550){
            return 'small-gallery-image'
        }else{
            return 'gallery-image'
        }
    }
    function getImageSizes(width: any){
        if(width <=1550){
            return '-small'
        }else{
            return ''
        }
    }
    return(
        <div className={galleryCss(width)}>
            <div className={'container' + getImageSizes(width)}>

                <img className={getImageSize(width)} src="https://www.brides.com/thmb/NwnePY2QvJ4n_akPcNjokAYPH6g=/2500x2500/smart/filters:no_upscale()/2020_02_22_emilyalex_0876-ab7e30b96b4f44b9b7e562ad7bebea56.jpg"/>

            <Link to="/WeddingCeremony" >
               <div className={'overlay' + getImageSizes(width)}>
                        <div className="text">Wedding Ceremony</div>
                    </div>
            </Link>
            </div>
            <div className={'container' + getImageSizes(width)}>
                <img className={getImageSize(width)} src="https://image.freepik.com/free-photo/wedding-preparation-dressing-up-bride-wedding-ceremony-front-view-wedding-attire_8353-11483.jpg"/>
                <Link to="/WeddingCeremony" >
                <div className={'overlay' + getImageSizes(width)}>
                    <div className="text">Wedding Preparations</div>
                </div>
                </Link>
            </div>
            <div className={'container' + getImageSizes(width)}>
                <img className={getImageSize(width)}  src="https://www.brides.com/thmb/yQ5WEDP-6gecSmGEF9clYIo5Yxs=/3101x3101/filters:fill(auto,1)/ariel-and-alissa-wedding29-a1766c0c4c35406381bed3dee27d7e1a.jpeg"/>
                <Link to="/WeddingCeremony" >
                <div className={'overlay' + getImageSizes(width)}>
                    <div className="text">You Two</div>
                </div>
                </Link>
            </div>
            <div className={'container' + getImageSizes(width)}>
                <img className={getImageSize(width)}  src="https://www.yourperfectweddingphotographer.co.uk/wp-content/uploads/2018/12/YPWP-happy-emotion.jpg"/>
                <Link to="/WeddingCeremony" >
                <div className={'overlay' + getImageSizes(width)}>
                    <div className="text">Wedding Emotions</div>
                </div>
                </Link>
            </div>
            <div className={'container' + getImageSizes(width)}>
                <img className={getImageSize(width)}  src="https://www.thespruce.com/thmb/_lAFWHqMqzdLIo0yfaUyb-L6-mQ=/2123x1415/filters:fill(auto,1)/GettyImages-544490573-5653f4e63df78c6ddf16fdd1.jpg"/>
                <Link to="/WeddingCeremony" >
                <div className={'overlay' + getImageSizes(width)}>
                    <div className="text">Wedding Celebration</div>
                </div>
                </Link>
            </div>
            <div className={'container' + getImageSizes(width)}>
                <img className={getImageSize(width)}  src="https://images.squarespace-cdn.com/content/v1/56aaa8964bf11837b0fa2222/1458638785633-M56UIDF24I7GKGL45SAX/shutterstock_282028181.jpg?format=1000w"/>
                <Link to="/WeddingCeremony" >
                <div className={'overlay' + getImageSizes(width)}>
                    <div className="text">Young Ones</div>
                </div>
                </Link>
            </div>
        </div>
    )
}
