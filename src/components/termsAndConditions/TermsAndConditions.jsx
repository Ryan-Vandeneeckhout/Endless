import { TermsAndConditionsItem } from "./TermsAndConditionsItem";
import { TermsandConditionsNewUserTermsMap } from "./TermsandConditionsMap";

export const TermsAndConditions = () => {
  return (
    <section className="TermsandConditions">
      <div className="wrapper">
        <div className="content">
          <h3>Introduction</h3>
          <p>
            Endless Demands was created by Ryan Van Den Eeckhout as a non-profit
            personal project. All images used on the site are the property of
            their respective owners. The site is not intended as a actual makeup
            store site and all prices are fictitious.
          </p>
          <ul>
            {TermsandConditionsNewUserTermsMap.map((item, index) => {
              return (
                <li key={index}>
                  <TermsAndConditionsItem
                    termsTitle={item.termsTitle}
                    terms={item.terms}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
