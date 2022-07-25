import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AlertType } from '../../model';
import { selectAlert } from '../../redux/actions/alert';

const Alert: FC = () => {
  const alerts: AlertType[] = useSelector(selectAlert);

  return (
    <div className="alert-wrapper">
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </div>
  );
};

export default Alert;
