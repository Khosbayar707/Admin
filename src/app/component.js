const Component = ({ props }) => {
  console.log(props);
  return (
    <div key={props.id} className="card">
      <h2>
        {props.firstName} {props.lastName}
      </h2>
      <p>{props.companyName}</p>
      <p>
        <img
          src="/picture/mail.png"
          alt="Mail Icon"
          style={{ width: "8px", height: "8px", marginRight: "8px" }}
        />
        {props.email}
      </p>
      <p>
        <img
          src="/picture/call.png"
          alt="Mail call"
          style={{ width: "8px", height: "8px", marginRight: "8px" }}
        />
        {props.phoneNumber}
      </p>
      <p>
        <img
          src="/picture/location.png"
          alt="Location"
          style={{ width: "8px", height: "8px", marginRight: "8px" }}
        />
        {props.address}
      </p>
    </div>
  );
};

export { Component };
