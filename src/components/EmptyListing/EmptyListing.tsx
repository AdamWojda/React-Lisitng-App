import React from 'react';

export const EmptyListing = () => {
  return (
    <>
        <div className="listing__empty">
            <div className="empty">
                <div className="empty__icon">
                    <img src="img/empty.svg" alt=""/>
                </div>
                <div className="empty__heading heading h2">Ooops… It’s empty here</div>
                <div className="empty__text">There are no products on the list</div>
            </div>
        </div>
    </>
  );
};
