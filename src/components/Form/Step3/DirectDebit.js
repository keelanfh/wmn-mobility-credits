import React from 'react';
import PropTypes from 'prop-types';
// Import components
import Input from 'components/shared/FormElements/Input/Input';

const DirectDebit = ({ setDirectDebitNumber }) => {
  return (
    <>
      <div className="wmnds-fe-group">
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            <h3 className="wmnds-fe-question">
              What is your Direct Debit reference?
            </h3>
          </legend>
          <div className="wmnds-col-1-2 wmnds-col-sm-1-5">
            <Input
              name="DirectDebitNumber"
              label="Direct Debit reference"
              inputmode="numeric"
              onChange={(e) => setDirectDebitNumber(e.target.value)}
            />
          </div>
        </fieldset>
      </div>
    </>
  );
};

DirectDebit.propTypes = {
  setDirectDebitNumber: PropTypes.func.isRequired,
};

export default DirectDebit;