import { useState } from "react";

export default function UserInput(prop) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={prop.userInput.initialInvestnemt}
            onChange={(event) =>
              prop.onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual investment</label>
          <input
            type="number"
            required
            value={prop.userInput.annualInvestment}
            onChange={(event) =>
              prop.onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={prop.userInput.expectedReturn}
            onChange={(event) =>
              prop.onChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={prop.userInput.duration}
            onChange={(event) => prop.onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
