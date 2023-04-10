import EmailAndPasswordInput from "../inputs/EmailAndPassInput";
import TextInput from "../inputs/TextInput";

export const ShippingInfo = (props) => {
  return (
    <section className="shippingInfoSection">
      <h3>Shipping Info</h3>
      <div className="shippingContent">
        <p>Country: Canada</p>
        <form onSubmit={props.writeUserData}>
          <EmailAndPasswordInput valueInput="Email" valueText="Email" />
          <div className="name">
            <EmailAndPasswordInput
              valueInput="First Name"
              valueText="First Name"
            />
            <EmailAndPasswordInput
              valueInput="Last Name"
              valueText="Last Name"
            />
          </div>
          <TextInput
            placeholderInput="Apt #, Floor, etc, optionial"
            labelText="Apt #, Floor, etc, optionial"
          />
          <div className="countryInfo">
            <EmailAndPasswordInput valueInput="City" valueText="City" />
          </div>
          <EmailAndPasswordInput
            valueInput="Postal Code"
            valueText="Postal Code"
          />
        </form>
      </div>
    </section>
  );
};
