import logo from '../images/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="container-fluid footer">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 diablo-contact">
                            <img src={logo} className="img-fluid footer-logo" />
                            <h6 style={{marginLeft:"7em"}} className='mt-3'>Diablo4.life is not affiliated with or endorsed by Activision Blizzard, Inc.</h6>
                            <h6 style={{marginLeft:"7em"}}  className='mt-3'>contact@diablo4.life</h6>
                            <h6 style={{marginLeft:"7em"}} className='mt-3'>© December 2023 Diablo4Life. All rights reserved.</h6>
                        </div>
                        <div className="col-lg-2 col-sm-12 diablo-links">
                            <h5>Links</h5>
                            <h6 className='mt-5'>Contact</h6>
                            <h6 className='mt-3'>Privacy Policy</h6>
                            <h6 className='mt-3'>Tools</h6>
                            <h6 className='mt-3'>Content Creators</h6>
                            <h6 className='mt-3'>Build Planner</h6>

                        </div>
                        <div className="col-lg-3 col-sm-12 diablo-official">
                            <h5> Official</h5>
                            <h6 className='mt-4'>Discord</h6>
                            <h6 className='mt-3'>Reddit</h6>
                            <h6 className='mt-3'>Bizard Forum</h6>
                            <h5 className='mt-4'>Other Sites by Me</h5>
                            <h6 className='mt-4'>D2Runewizard</h6>

                        </div>
                    </div>
                </div>
        </>
    )
}
export default Footer;