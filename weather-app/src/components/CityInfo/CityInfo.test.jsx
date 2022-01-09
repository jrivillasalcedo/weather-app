import CityInfo from "./CityInfo"
import React from 'react'
import { render } from '@testing-library/react'

test('CityInfo render', async () =>{
    
    const city = 'Madrid';
    const country = 'Spain'
    const { findAllByRole } = render( <CityInfo city = 'Madrid' country = 'Spain'></CityInfo>);
    const cityAndCountryComponents = await findAllByRole('heading');
    expect(cityAndCountryComponents[0]).toHaveTextContent(city);
    expect(cityAndCountryComponents[1]).toHaveTextContent(country);


} )