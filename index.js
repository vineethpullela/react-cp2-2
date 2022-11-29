const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, message } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="img" src={iconUrl} />
      <p className="infoMsg">{message}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="card-container">
      <Notification
        className="notification-card-info"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="notification-card-success"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="notification-card-warning"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="notification-card-error"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
