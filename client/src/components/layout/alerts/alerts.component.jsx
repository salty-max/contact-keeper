import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertContext from '../../../context/alert/alert.context';

const Alerts = () => {
  const { alerts } = useContext(AlertContext);

  return (
    <div className="alerts">
      <TransitionGroup>
        {alerts
        && alerts.map((alert) => (
          <CSSTransition key={alert.id} classNames="item">
            <article className={`notification is-${alert.type} mb-1`}>
              <span className="icon mr-1">
                <i
                  className={`fas fa-${
                    alert.type === 'danger'
                      ? 'exclamation-triangle'
                      : 'info-circle'
                  }`}
                />
              </span>
              <span>{alert.msg}</span>
            </article>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Alerts;
