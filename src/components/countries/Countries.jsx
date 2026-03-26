import React from 'react';
import { use } from 'react';
const Countries = ({country}) => {

 const countryUse=use(country)
    return (
        <div>
            <h2>Lets Start write the code</h2>
            {
                countryUse.map( country => )
            }
        </div>
    );
};

export default Countries;