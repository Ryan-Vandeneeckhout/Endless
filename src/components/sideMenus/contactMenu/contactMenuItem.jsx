export const ContactMenuItem = (props) => {
  if (props.message === undefined || props.message === null) {
    console.log(props.message);
  }

  return (
    <>
      {props.message.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.messageArray}</p>
          </div>
        );
      })}
    </>
  );
};
