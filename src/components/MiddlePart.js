import React from 'react';

const MiddlePart = ({ data}) => {


  return (
<>
<div className="my-3">
        <div className="col-md-8 m-auto">
          <div className="d-flex justify-content-center middle_div_main">
            <div className="text-center">
            <img className="w-100" height={300} src={data.image} alt={data.name}></img>
            <div>
                <p className="descrip">{data.name}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
</>
    

  );
};

export default MiddlePart;
