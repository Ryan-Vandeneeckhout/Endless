import EmailAndPasswordInput from "./EmailAndPassInput";

const EmailAndPasswordComponent = (props) => {
  const EmailText = "Email";
  const PassText = "Password";

  return (
    <>
      <EmailAndPasswordInput
        valueInput={EmailText}
        valueText={EmailText}
        setValue={props.setEmail}
        value={props.email}
        InputRef={props.EmailRef}
        setErrorFromState={props.setErrorFromState}
      />
      <EmailAndPasswordInput
        valueInput={PassText}
        valueText={PassText}
        setValue={props.setPassword}
        value={props.password}
        InputRef={props.InputRef}
        setErrorFromState={props.setErrorFromState}
      />
    </>
  );
};
export default EmailAndPasswordComponent;
