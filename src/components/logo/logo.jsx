import React from "react";
import iconVertLigh from "./iconVertLigh.svg";
import iconGorisLight from "./iconGorisLight.svg";
import iconVertDark from "./iconVertDark.svg";
import iconGorisDark from "./iconGorisDark.svg";

function Logo(props) {
  function Switch(theme, position) {
    switch (theme) {
      case "light":
        switch (position) {
          case "vertikal":
            return (
              <div>
                <img src={iconVertLigh} alt="iconVertLigh" />
              </div>
            );
          /* falls through */
          case "gorisont":
            return (
              <div>
                <img src={iconGorisLight} alt="iconGorisontLigh" />
              </div>
            );
          /* falls through */
        }
      /* falls through */
      case "dark":
        switch (position) {
          case "vertikal":
            return (
              <div>
                <img src={iconVertDark} alt="iconVertDark" />
              </div>
            );
          /* falls through */
          case "gorisont":
            return (
              <div>
                <img src={iconGorisDark} alt="iconGorisontDark" />
              </div>
            );
          /* falls through */
        }
    }
  }
  return <div>{Switch(props.props.theme, props.props.position)} </div>;
}

export default Logo;
