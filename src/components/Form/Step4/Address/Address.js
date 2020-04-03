import React, { useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const Address = () => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext

  const customValidation = () => {
    let error;

    const postcodeRegex = /(GIR 0AA)|((([A-Z-[QVX]][0-9][0-9]?)|(([A-Z-[QVX]][A-Z-[IJZ]][0-9][0-9]?)|(([A-Z-[QVX][0-9][A-HJKSTUW])|([A-Z-[QVX]][A-Z-[IJZ]][0-9][ABEHMNPRVWXY]))))\s?[0-9][A-Z-[CIKMOV]]{2})/; // Matches postcode regex on server

    // If not a valid email address
    if (!postcodeRegex.test(formState.Application.AddressPostcode)) {
      error = 'Enter a postcode in the correct format';
    }

    return error;
  };

  return (
    <fieldset className="wmnds-fe-fieldset">
      <legend className="wmnds-fe-fieldset__legend">
        <h3 className="wmnds-fe-question">What is your home address?</h3>
      </legend>
      {/* Building and street */}
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-2-3"
        name="AddressLine1"
        label="Building and street"
        autocomplete="address-line1"
      />
      <Input
        className="wmnds-col-1-2 wmnds-col-sm-2-3"
        name="AddressLine2"
        label="Address line 2"
        autocomplete="address-line2"
      />

      {/* Town/City and County */}
      <Input
        className="wmnds-col-1 wmnds-col-sm-1-2"
        name="AddressTown"
        label="Town or city"
        autocomplete="address-level2"
      />
      <Input
        className="wmnds-col-1 wmnds-col-sm-1-2"
        name="AddressLine3"
        label="County"
        autocomplete="address-county"
      />

      {/* Postcode */}
      <Input
        name="AddressPostcode"
        label="Postcode"
        className="wmnds-col-1-2 wmnds-col-sm-1-4"
        autocomplete="postal-code"
        customValidation={customValidation}
      />
    </fieldset>
  );
};

export default Address;
