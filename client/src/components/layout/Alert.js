import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const styledAlert = styled.div`
  padding: 0.8rem;
  margin: 1rem 0;
  opacity: 0.9;
  background: var(--light-color);
  color: #333;
`;

const Alert = ({ alerts }) => (
  <div className="alert-wrapper">
    {alerts.map((alert) => (
      <styledAlert key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </styledAlert>
    ))}
  </div>
);

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
