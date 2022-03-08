import "./galleryViews.css"
import {Footer} from "../Footer/footer";
import {Header, HeaderGallery} from "../header/header";
import useWindowDimensions from "../../utils/layout/layout";

export const YoungOnes = () => {
    const {width} = useWindowDimensions();
    const images = ['https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg', 'https://www.katkajelenova.cz/galleries/Uvod/007.jpg']

    function getText(width: number) {
       if(width <= 700){
           return 'gallery-text-small'
       }else{
           return 'gallery-text'
       }
    }

    function getVertical(width: number) {
        if(width <= 500){
            return 'vertical-line-gallery-small'
        }else{
            return 'vertical-line-gallery'
        }
    }
    return (
        <div>
            <HeaderGallery/>
            <div className="gallery-header">
                <div className={getText(width)}>
                    Young Ones
                </div>
                <div style={{padding: '1rem', display: 'flex', justifyContent: 'center'}}>
                    <div className={getVertical(width)}>
                    </div>
                </div>
            </div>
            <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                <div className="gallery-view">
                    {images.map(image => {
                        return (
                            <div style={{padding: '10px'}}>
                                <img className="gallery-view-images" src={image}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </div>

    )
}
