import React from 'react';
import fleche_droite from '../img/icons8-flèche-droit-50.png'
import fleche_gauche from '../img/icons8-flèche-gauche-50.png'

const Pagination = ({starteur , start}) => {
    let pages = [];
    for(let i = 1 ; i <= 10 ; ++i) {
        pages.push(<div key={i} className='pagination pointer' onClick={() => starteur(i * 20 - 20)}>{i}</div>)
    }
    return(
        <div className='container-pagination flex center'>
          <img src={fleche_gauche} alt="fleche droite" className='pointer mg-right-2' onClick={() => starteur(start - 20)}/>
          {pages}
          <img src={fleche_droite} alt="fleche droite" className='pointer mg-left-2' onClick={() => starteur(start + 20)}/>
        </div>
    )
}

export default Pagination