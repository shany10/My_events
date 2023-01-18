import React from 'react';
import Navbar from '../component/navebar';
import profil from '../img/photo-avatar-profil.png'

const Chat = () => {
    return (
        <section className="chat">
            <Navbar />
            <div className='container-chat pd-bottom-1'>
                <h1 className='mg-left-2'>titre de l'event</h1>
                <div className='chat-map'>
                </div>
                <div className='flex mg-left-2 mg-top-2'>
                    <div className='chat-container-participant pd-bottom-2'>
                        <p className='mg-left-4 fts-1-5'>participant</p>
                        <div className='mg-left-4 box-participant'>
                            <div className='participant-border'></div>
                            <div className='flex mg-top-1'>
                                <img src={profil} alt="profil participant" className='mg-left-2' />
                                <p className='mg-left-4 fts-1'>nom du participant</p>
                            </div>
                            <div className='participant-border'></div>
                        </div>
                    </div>
                    <div className='chat-container-message mg-left-1 pd-top-1 pd-bottom-2'>
                        <div className='flex mg-left-2 mg-top-2'>
                            <img src={profil} alt="profil" className='chat-profil mg-top-6' />
                            <div className="chat-box">
                                <p className='mg-left-4'>nom du participant</p>
                                <div className='box-message fts-1-2 mg-left-2'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem consequuntur quis. Tempore fuga expedita sit delectus, minima vel, commodi, laborum sed explicabo officia mollitia dignissimos architecto quidem ipsum vitae!
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis consequatur ipsam possimus ex cupiditate, officia nisi distinctio? Nam iste, quam temporibus officiis magnam obcaecati ipsum, pariatur, modi beatae architecto vero!
                                </div>
                            </div>
                        </div>
                        <div className='flex mg-right-2 content-right mg-top-2'>
                            <div className='chat-box'>

                                <p className='flex content-right mg-right-4'>nom du participant</p>
                                <div className='box-message fts-1-2 mg-right-2'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem consequuntur quis. Tempore fuga expedita sit delectus, minima vel, commodi, laborum sed explicabo officia mollitia dignissimos architecto quidem ipsum vitae!
                                </div>
                            </div>
                            <img src={profil} alt="profil" className='chat-profil mg-top-6' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat