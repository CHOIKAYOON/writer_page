import React from 'react';

const Templete = ({children , onInsertToogle}) =>{
    return (
        <div className="Content_Column">
            <div className="Content_item">일 정 표</div>
            <div className="Content_item2">           
                 {children}
            </div>
            <div className="Content_item3">
                <img src="https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-plus-icon-png-image_1590225.jpg" onClick={onInsertToogle} />
            </div>
        </div>
    )
}

export default Templete