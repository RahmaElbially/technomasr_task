import React from 'react';

interface ShopCardProps {
  image?: string;
  name?: string;
}

const ShopCard: React.FC<ShopCardProps> = (props) => {
  return (
    <div>
       <div className="shop">
              <img src={props.image} />
              <p>{props.name}</p>
          </div> {/* End Shop */}
    </div>
  );
}

export default ShopCard;
