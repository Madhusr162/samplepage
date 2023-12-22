import news from '../images/news.jpg'
import bignews from '../images/big news.jpg'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnderline, faBold, faItalic, faList } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className="container-fluid home">
                <Sidebar />
                <div className='row news-row'>
                    <div className='col-lg-7'>
                        <h4 className='mt-5' style={{ color: "#c4bfbf", textAlign: "left" }}>Featured News</h4>
                        <div className="card big">
                            <img src={news} className="card-img-top cardimage" alt="..." />
                            <div className="card-body card-body-text">
                                <h3 className='quick-text ms-2'>Significantly Reduced Cost for Bloodforged Sigils</h3>
                                <h5 className='ms-2'>Cost has been lowered by 5 to 7 times across all tiers</h5>
                                <p className='muted-text ms-2'>3 days ago, by Prowner</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <h4 className='mt-5' style={{ color: "rgb(23, 29, 29);" }}>sdfsdfsd</h4>
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-5">
                                    <img
                                        src={bignews}
                                        alt="Card Image"
                                        className="card-img cardImg"
                                    />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body card-body-text">
                                        <h6 className="card-title">Big Itemizaton Overhaul Coming to Season 4</h6>
                                        <p className="card-text">
                                            2 weeks ago, by Prowner
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-5">
                                    <img
                                        src={bignews}
                                        alt="Card Image"
                                        className="card-img cardImg"
                                    />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body card-body-text">
                                        <h6 className="card-title">Big Itemizaton Overhaul Coming to Season 4</h6>
                                        <p className="card-text">
                                            2 weeks ago, by Prowner
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-5">
                                    <img
                                        src={bignews}
                                        alt="Card Image"
                                        className="card-img cardImg"
                                    />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body card-body-text">
                                        <h6 className="card-title">Big Itemizaton Overhaul Coming to Season 4</h6>
                                        <p className="card-text">
                                            2 weeks ago, by Prowner
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='links'>
                    <h3 className='quick-links mt-5'>Quick links</h3>
                    <div className='row news-row mt-5'>
                        <div className='col-lg-3'>
                            <button type="button" className="btn btn-dark dark">Dark</button>
                        </div>
                        <div className='col-lg-3'>
                            <button type="button" className="btn btn-dark dark">Dark</button>
                        </div>
                        <div className='col-lg-3'>
                            <button type="button" className="btn btn-dark dark">Dark</button>
                        </div>
                        <div className='col-lg-3'>
                            <button type="button" className="btn btn-dark dark">Dark</button>
                        </div>
                    </div>
                </div>
                <div className='guides'>
                    <h4 className='mt-5 quick-links'>Diablo 4 Guides</h4>
                    <div className='row news-row'>
                        <div className='col-lg-3'>
                            <div className="card big mt-2">
                                <img src={news} className="card-img-top cardimage" alt="..." />
                                <div className="card-body card-body-guide-text">
                                    <h3 className='quick-text'>How to find the secret cow level</h3>
                                    <p >1 week ago, by Prowner</p>
                                    <p className='muted-text'>updated 1 week ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="card big mt-2">
                                <img src={news} className="card-img-top cardimage" alt="..." />
                                <div className="card-body card-body-guide-text">
                                    <h3 className='quick-text'>How to find the secret cow level</h3>
                                    <p >1 week ago, by Prowner</p>
                                    <p className='muted-text'>updated 1 week ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="card big mt-2">
                                <img src={news} className="card-img-top cardimage" alt="..." />
                                <div className="card-body card-body-guide-text">
                                    <h3 className='quick-text'>How to find the secret cow level</h3>
                                    <p >1 week ago, by Prowner</p>
                                    <p className='muted-text'>updated 1 week ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='feedback'>
                    <div className="box mb-3">
                        <label className='label-radio'>
                            <input type="radio" name="feedback" value="excellent" />
                            Excellent
                        </label>
                        <span className="bar"><span className="excellent"></span></span>
                    </div>
                    <div className="box mb-3">
                        <label className='label-radio'>
                            <input type="radio" name="feedback" value="good" />
                            Good
                        </label>
                        <span className="bar"><span className="good"></span></span>
                    </div>
                    <div className="box mb-3">
                        <label className='label-radio'>
                            <input type="radio" name="feedback" value="fair" />
                            Fair
                        </label>
                        <span className="bar"><span className="fair"></span></span>
                    </div>
                    <div className="box mb-3">
                        <label className='label-radio'>
                            <input type="radio" name="feedback" value="bad" />
                            Bad
                        </label>
                        <span className="bar"><span className="bad"></span></span>
                    </div>
                </div>
                <div className='guides mb-5'>
                    <h4 className='mt-5 quick-links'>Diablo 4 Guides</h4>
                    <div className='row news-row'>
                        <div className='col-lg-2'>
                            <div className="card big mt-2">
                                <img src={news} className="card-img-top cardimage" alt="..." />
                                <div className="card-body card-body-guide-text">
                                    <h3 className='quick-text'>How to find the secret cow level</h3>
                                    <p >1 week ago, by Prowner</p>
                                    <p className='muted-text'>updated 1 week ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className="card big mt-2">
                                <img src={news} className="card-img-top cardimage" alt="..." />
                                <div className="card-body card-body-guide-text">
                                    <h3 className='quick-text'>How to find the secret cow level</h3>
                                    <p >1 week ago, by Prowner</p>
                                    <p className='muted-text'>updated 1 week ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className="card big mt-2">
                                <img src={news} className="card-img-top cardimage" alt="..." />
                                <div className="card-body card-body-guide-text">
                                    <h3 className='quick-text'>How to find the secret cow level</h3>
                                    <p >1 week ago, by Prowner</p>
                                    <p className='muted-text'>updated 1 week ago</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className="card big mt-2">
                                <img src={news} className="card-img-top cardimage" alt="..." />
                                <div className="card-body card-body-guide-text">
                                    <h3 className='quick-text'>How to find the secret cow level</h3>
                                    <p >1 week ago, by Prowner</p>
                                    <p className='muted-text'>updated 1 week ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='comments'>
                    <h3 className='mb-3'>Comments</h3>
                    <span>Guest now</span>
                    <div className='fontawesome-icons mt-3 mb-5'>
                        <FontAwesomeIcon icon={faBold} className='me-4' /><FontAwesomeIcon icon={faItalic} className='me-4' /> <FontAwesomeIcon icon={faUnderline} className='me-4' /> <FontAwesomeIcon icon={faList} className='me-4' />
                    </div>
                    <div className="input-group mb-3">
                        <textarea className="textarea" aria-label="With textarea" placeholder='Enter your comment'></textarea>
                    </div>
                    <button type="button mb-3" class="btn btn-secondary btn-comments">Place Comment</button>
                    <div className='comment-btn mt-5'>
                        <button type="button" class="btn btn-secondary btn-cmnt">Show Comments</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home