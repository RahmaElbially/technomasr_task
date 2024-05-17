import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  head: string;
  data: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  return (
    <div>
      <div className="service flex items-center bg-white px-4 py-6">
          <i className='text-4xl'>{props.icon}</i>
          <div className="service-data ms-4">
            <h4>{props.head}</h4>
            <p>{props.data}</p>
          </div>
        </div> {/* End Service */}
    </div>
  );
};

export default ServiceCard;
