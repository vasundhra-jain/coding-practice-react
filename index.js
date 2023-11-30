const Notification = (props) => {
    {message, imageUrl, className}=props;
    <div className={className}>
        <img src={imageUrl}/>
        <p>{message}</p>
    </div>    
  //  Write your code here.
};

const element = (
  <div>
    <h1 className="heading">Notifications</h1>
    <Notification message="Information Message" imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" className="notification1"/>
    <Notification message="Success Message" imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" className="notification2"/>
    <Notification message="Warning Message" imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" className="notification3"/>
    <Notification message="Error Message" imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" className="notification4"/>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
