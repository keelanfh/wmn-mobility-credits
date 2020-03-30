import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Import components
import Radio from 'components/shared/FormElements/Radio/Radio';

const Step1 = ({ currentStep, setCurrentStep, handleFormData }) => {
  const [CustomerType, setCustomerType] = useState(null);

  const handleContinue = () => {
    handleFormData('CustomerType', CustomerType);
    // classpass, swiftOnMobile, scratchcard
    if (CustomerType !== null) {
      setCurrentStep(currentStep + 2); // Skip two steps as customerType has been set
    } else {
      setCurrentStep(currentStep + 1); // Go to next step so we can set customerType
    }
  };

  return (
    <>
      <h2>About your ticket</h2>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">Which best describes your ticket?</h3>
          </legend>
          <div className="wmnds-fe-radios">
            <Radio
              name="CustomerType"
              text="Swift card"
              value="SwiftPortal"
              onChange={() => setCustomerType(null)}
            />
            <Radio
              name="CustomerType"
              text="Paper ticket"
              value="SwiftCard"
              onChange={() => setCustomerType(null)}
            />
            <Radio
              name="CustomerType"
              text="Swift on Mobile app"
              value="SwiftPortal"
              onChange={(e) => setCustomerType(e.target.value)}
            />
            <Radio
              name="CustomerType"
              text="Scratchcard"
              value="Scratchcard"
              onChange={(e) => setCustomerType(e.target.value)}
            />
            <Radio
              name="CustomerType"
              text="Class pass"
              value="ClassPass"
              onChange={(e) => setCustomerType(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
      <button
        type="button"
        className="wmnds-btn wmnds-col-1 wmnds-m-t-md"
        onClick={() => handleContinue()}
      >
        Continue
      </button>
    </>
  );
};

Step1.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
};

export default Step1;
